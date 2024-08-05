import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import connectDB from "@/utils/connectDB";
import { User } from "@/models/User";

export async function PUT(req: any) {
    try {
        await connectDB();
        const data = await req.json();
        const session = await getServerSession(req);

        if (!session || !data) throw new Error("Invalid session or data");

        const email = session.user.email;

        if ("name" in data) await User.updateOne({ email }, { name: data.name });


        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error in PUT /api/profile:", error);
        return NextResponse.json({ error: "Error in Connecting to DB" }, { status: 500 });
    }
}
