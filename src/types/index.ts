import { Document } from "mongoose";

export interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser extends Document {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}
