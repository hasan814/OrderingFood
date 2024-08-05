import { hashPassword } from "@/utils/auth"
import { NextResponse } from "next/server"
import { User } from "@/models/User"

import connectDB from "@/utils/connectDB"

export const POST = async (req: any) => {
    try {
        await connectDB()

        const { name, phoneNumber, email, password, role } = await req.json()
        if (!name || !phoneNumber || !email || !password) return NextResponse.json({ error: "Invalid Data!" }, { status: 422 })

        const existingUser = await User.findOne({ email })
        if (existingUser) return NextResponse.json({ error: "User already Exist, Please Login" }, { status: 422 })

        const hashedPassword = await hashPassword(password)
        const newUser = await User.create({ name, phoneNumber, email, password: hashedPassword, role: role || 'USER' })

        return NextResponse.json({ message: "Account Created!" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Error in Connecting to DB' }, { status: 500 })
    }
}