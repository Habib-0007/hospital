import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("hospital");
    const doctors = await db.collection("doctors").find({}).toArray();
    return NextResponse.json(doctors);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch doctors" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("hospital");
    const body = await request.json();
    const result = await db.collection("doctors").insertOne(body);
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to add doctor" },
      { status: 500 }
    );
  }
}
