import { db, cartTable } from "../../../../db";
import { NextResponse } from "next/server";
export function GET(request: Request){
    const cart = db.select().from(cartTable).all()
    if(!cart){
        throw new Error("Cart is Null!")
    }
    return NextResponse.json(cart)
}