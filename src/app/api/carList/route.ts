import { NextResponse } from "next/server";
import { db, carTable } from "../../db";

export async function GET(request: Request){
    const cars = await db.select().from(carTable).all()
    return NextResponse.json(cars)
}