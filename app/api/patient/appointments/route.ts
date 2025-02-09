import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("hospital");
    // In a real application, you would get the patient ID from the authenticated user
    const patientId = "example_patient_id";
    const appointments = await db
      .collection("appointments")
      .find({ patientId })
      .toArray();
    return NextResponse.json(appointments);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch patient appointments" },
      { status: 500 }
    );
  }
}
