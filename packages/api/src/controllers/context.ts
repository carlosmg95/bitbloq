import { ApolloError, AuthenticationError } from "apollo-server-koa";
import { UserModel } from "../models/user";
import { IUserInToken, IDataInRedis } from "../models/interfaces";
import { sign as jwtSign, verify as jwtVerify } from "jsonwebtoken";
import { compare as bcryptCompare } from "bcrypt";

import { redisClient, userAuthService } from "../server";
import { IUser } from "../api-types";

import { SESSION } from "../config";

const checkOtherSessionOpen = async (user: IUserInToken, justToken: string) => {
  let reply: string | undefined;
  if (String(process.env.USE_REDIS) === "true") {
    const now: Date = new Date();
    let expiresAt: Date;
    // now.setHours(now.getHours() + 1);
    try {
      if (user.userId) {
        const result: IDataInRedis = await redisClient.hgetallAsync(
          String(user.userId)
        );
        reply = result ? result.authToken : "";
        expiresAt = result ? new Date(result.expiresAt) : new Date();
      } else if (user.submissionID) {
        const result: IDataInRedis = await redisClient.hgetallAsync(
          String(user.submissionID)
        );
        reply = result ? result.subToken : "";
        expiresAt = result ? new Date(result.expiresAt) : new Date();
      } else {
        reply = "";
        expiresAt = new Date();
      }
    } catch (e) {
      return undefined;
    }
    if (reply === justToken) {
      if (now.getTime() > expiresAt.getTime()) {
        throw new ApolloError("Session expired", "SESSION_EXPIRED");
      }
      if (user.userId) {
        await storeTokenInRedis(user.userId, justToken);
      } else if (user.submissionID) {
        await storeTokenInRedis(user.userId, justToken, true);
      }
      return user;
    } else {
      throw new ApolloError(
        "Token not valid. More than one session opened",
        "ANOTHER_OPEN_SESSION"
      );
    }
  } else {
    return user;
  }
};

export const storeTokenInRedis = async (
  id: string,
  token: string,
  subToken?: boolean
) => {
  if (id === undefined) {
    return undefined;
  }
  let date: Date = new Date();
  date = new Date(
    date.setMinutes(date.getMinutes() + SESSION.DURATION_MINUTES)
  );
  if (process.env.USE_REDIS === "true") {
    try {
      if (subToken) {
        return redisClient.hmset(
          String(id),
          "subToken",
          String(token),
          "expiresAt",
          date
        );
      } else {
        return redisClient.hmset(
          String(id),
          "authToken",
          String(token),
          "expiresAt",
          date
        );
      }
    } catch (e) {
      return undefined;
    }
  }
};

export const updateExpireDateInRedis = async (
  id: string,
  submission: boolean
) => {
  if (String(process.env.USE_REDIS) === "true") {
    try {
      const token: string = submission
        ? (await redisClient.hgetallAsync(id)).subToken
        : (await redisClient.hgetallAsync(id)).authToken;
      return storeTokenInRedis(id, token, submission);
    } catch (e) {
      return undefined;
    }
  }
};

// setInterval(checksSessionExpires, 5000);

const contextController = {
  getMyUser: async authorization => {
    let type: string | undefined;
    let justToken: string | undefined;
    if (authorization) {
      type = authorization.split(" ")[0];
      justToken = authorization.split(" ")[1] || undefined;
    }
    if (type === "Bearer" && justToken && justToken !== "null") {
      const data = await userAuthService.checkToken(justToken);
      if (data) {
        await userAuthService.userActivity(justToken);
      }
      return data;
    } else if (type === "Basic") {
      const data:
        | string
        | undefined = await contextController.getDataInBasicAuth(justToken);
      if (!data) {
        throw new Error("No data");
      }
      const email: string = data.split(":")[0];
      const pass: string = data.split(":")[1];
      const contactFound: IUser | null = await UserModel.findOne({ email });
      if (!contactFound || !contactFound.active) {
        throw new ApolloError("Token not valid.", "ERROR_IN_TOKEN");
      }
      // Compare passwords from request and database
      const valid: boolean = await bcryptCompare(pass, contactFound.password);
      if (valid) {
        const userBas: IUserInToken = {
          userId: contactFound.id as string,
          permissions: "usr-",
          submissionID: ""
        };
        return userBas;
      }
    }
  },
  getDataInToken: async inToken => {
    if (inToken) {
      try {
        return jwtVerify(inToken, process.env.JWT_SECRET || "");
      } catch (e) {
        throw new AuthenticationError("Token not value.");
      }
    }
    return undefined;
  },

  getDataInBasicAuth: async inToken => {
    if (inToken) {
      try {
        const data: string = Buffer.from(inToken, "base64").toString("ascii");
        return data;
      } catch (e) {
        throw new ApolloError("Token not valid.", "ERROR_IN_TOKEN");
      }
    }
    return;
  },

  generateLoginToken: async user => {
    let role: string;
    let rolePerm = "usr-";
    if (user.admin) {
      rolePerm = rolePerm.concat("admin-");
    }
    if (user.publisher) {
      rolePerm = rolePerm.concat("pub-");
    }
    if (user.teacher) {
      rolePerm = rolePerm.concat("tchr-");
    }
    if (user.teacherPro) {
      rolePerm = rolePerm.concat("tchrPro-");
    }
    if (user.family) {
      rolePerm = rolePerm.concat("fam-");
    }
    const token = await jwtSign(
      {
        email: user.email,
        userID: user._id,
        role: rolePerm
      },
      process.env.JWT_SECRET || ""
    );
    return { token, role: rolePerm };
  },

  generateNewToken: async oldToken => {
    const data = ((await contextController.getDataInToken(
      oldToken
    )) as unknown) as IUserInToken;
    await checkOtherSessionOpen(data, oldToken);
    const token = await jwtSign(data, process.env.JWT_SECRET || "");
    return { data, token };
  }
};

export { contextController };
