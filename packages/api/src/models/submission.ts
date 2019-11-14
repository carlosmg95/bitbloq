import { Document, Model, model, Schema } from "mongoose";
const timestamps = require("mongoose-timestamp");

export interface ISubmission extends Document {
  user?: string;
  title: string;
  exercise?: string;
  studentNick?: string;
  password?: string;
  content?: string;
  cache?: string;
  finished?: boolean;
  comment?: string;
  type: string;
  image: string;
  active: boolean;
}

const submissionMongSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "userModel"
  },

  title: {
    type: String,
    default: "New Submission"
  },

  exercise: {
    type: Schema.Types.ObjectId,
    ref: "exerciseModel"
  },

  document: {
    type: Schema.Types.ObjectId,
    ref: "documentModel"
  },

  teacherID: {
    type: Schema.Types.ObjectId,
    ref: "userModel"
  },

  studentNick: {
    type: String,
    required: true
  },

  password: {
    type: String
  },

  content: {
    type: String,
    default: "content"
  },

  cache: {
    type: String,
    default: "cache"
  },

  submissionToken: {
    type: String
  },

  finished: {
    type: Boolean,
    default: false
  },

  active: {
    type: Boolean,
    default: false
  },

  type: {
    type: String
  },

  studentComment: {
    type: String,
    default: "studentComment"
  },

  finishedAt: {
    type: Date
  },

  grade: {
    type: Number
  },

  teacherComment: {
    type: String,
    default: "teacherComment"
  },

  gradedAt: {
    type: Date
  }
});
submissionMongSchema.plugin(timestamps);
export const submissionModel: Model<ISubmission> = model<ISubmission>(
  "submissionModel",
  submissionMongSchema
);
