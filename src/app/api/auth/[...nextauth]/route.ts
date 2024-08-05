import NextAuth, { NextAuthOptions } from "next-auth";
import { verifyPassword } from "@/utils/auth";
import { User } from "@/models/User";

import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";

interface Credentials {
    email: string;
    password: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Credentials | undefined, req) {
                if (!credentials) {
                    throw new Error("No credentials provided");
                }

                const { email, password } = credentials;

                try {
                    await connectDB();
                } catch (error) {
                    throw new Error("Error in connecting to the database");
                }

                if (!email || !password) {
                    throw new Error("Please provide both email and password");
                }

                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("No user found with this email address");
                }

                const isValid = await verifyPassword(password, user.password);
                if (!isValid) {
                    throw new Error("Invalid email or password");
                }

                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                };
            }
        })
    ],

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
