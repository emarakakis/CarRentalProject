import { NextResponse } from "next/server";
import { db, carTable } from "../../../../db";

export async function GET(request: Request) {
  try {
    const cars = await db.select().from(carTable).all();
    return NextResponse.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    return NextResponse.json({ error: "Failed to fetch cars" }, { status: 500 });
  }
}
