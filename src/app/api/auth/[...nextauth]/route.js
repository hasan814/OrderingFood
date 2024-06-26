import { verifyPassword } from "@/utils/auth";

import connectDB from "@/utils/connectDb";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import User from "@/models/Use";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error in Connecting to DB");
        }
        if (!email || !password) throw new Error("Invalid Data!");

        const user = await User.findOne({ email });
        if (!user) throw new Error("Please enter into your account");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("Email or passowrd is Wrong!");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
