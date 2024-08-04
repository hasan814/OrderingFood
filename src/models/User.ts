import { Model, models, Schema, model } from "mongoose";
import { IUser } from "../types";

const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "USER" },
  createdAt: { type: Date, default: Date.now },
});


const User: Model<IUser> = models.User || model<IUser>("User", userSchema)

export default User