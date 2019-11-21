import React, { FC } from "react";
import { Button } from "@bitbloq/ui";
import queryString from "query-string";
import env from "../lib/env";
import { googleAuthEndpoint, googleScopes } from "../config";
import { v1 } from "uuid";

const uuid = v1;

const appID: string =
  "950738575520-rcvmb9omvrhigb7nepgekjl3hlurslgg.apps.googleusercontent.com";

const LoginWithGoogleButton: FC = () => {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    sessionStorage.setItem("googleAuthState", uuid());
    sessionStorage.setItem("googleAuthNonce", uuid());

    const location = window.location;
    console.log(appID);
    const authParams = {
      response_type: "code",
      client_id: appID,
      redirect_uri: `${location.protocol}//${location.host}/google-redirect`,
      scope: googleScopes,
      state: sessionStorage.getItem("googleAuthState"),
      nonce: sessionStorage.getItem("googleAuthNonce"),
      access_type: "offline"
    };

    location.assign(
      googleAuthEndpoint + "?" + queryString.stringify(authParams)
    );
  };

  return (
    <Button tertiary onClick={onClick}>
      Google
    </Button>
  );
};

export default LoginWithGoogleButton;
