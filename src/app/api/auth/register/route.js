import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/auth";

import User from "@/models/Use";
import connectDB from "@/utils/connectDb";

export const POST = async (req) => {
  try {
    await connectDB();

    const { email, password } = await req.json();
    if (!email || !password)
      return NextResponse.json({ error: "Invalid Data!" }, { status: 422 });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json(
        { error: "There is such an account" },
        { status: 422 }
      );
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "Account Created!" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};
