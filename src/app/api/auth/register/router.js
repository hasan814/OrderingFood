import User from "@/models/Use";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    const { email, password } = await req.json();
    if (!email || !password)
      return NextResponse.json({ error: "Invalid Data!" }, { status: 422 });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json({ error: "There is sush an account" }, {});
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "Account Created!" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error in Connecting to DB" },
      { status: 500 }
    );
  }
};
