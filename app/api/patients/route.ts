import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("hospital");
    const patients = await db
      .collection("patients")
      .find({})
      .limit(10)
      .toArray();
    return NextResponse.json(patients);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch patients" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("hospital");
    const body = await request.json();
    const result = await db.collection("patients").insertOne(body);
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to add patient" },
      { status: 500 }
    );
  }
}
