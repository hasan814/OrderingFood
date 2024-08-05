import { Document } from "mongoose";

export interface FormDataProps {
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
  role?: string;
}

export interface Credentials {
  email: string;
  password: string;
}