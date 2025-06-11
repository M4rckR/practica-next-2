import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ 
        method: "GET",
        count: 100
    })
}

export async function POST() {
    return NextResponse.json({ 
        method: "POST",
        count: 100
    })
}