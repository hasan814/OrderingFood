import { Schema, model, models } from 'mongoose';
import { IUser } from '../types';



const userSchema = new Schema<IUser>({
  name: { type: String, required: true, trim: true },
  phoneNumber: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" }
}, { timestamps: true });

const User = models.User || model<IUser>('User', userSchema);

export { User };
