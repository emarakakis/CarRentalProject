import { db, cartTable } from "../../../../db";
import { NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm"
export function GET(request: Request){
    const cart = db.select().from(cartTable).all()
    if(!cart){
        throw new Error("Cart is Null!")
    }
    return NextResponse.json(cart)
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, quantity } = body

    // Basic validation
    if (typeof id !== 'string' || id.trim() === '') {
      return new Response(JSON.stringify({ error: 'Invalid or missing id' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    if (typeof quantity !== 'number' || quantity < 0) {
      return new Response(JSON.stringify({ error: 'Invalid or missing quantity' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const alreadyIn = await db.select().from(cartTable).where(eq(cartTable.id, id)).all()
    console.log(JSON.stringify(alreadyIn))
    if (alreadyIn.length > 0) {
      const what = await db.update(cartTable).set({ quantity : sql`${cartTable.quantity} + 1 `}).where(eq(cartTable.id, id)).run()
    } else {
      await db.insert(cartTable).values({ id, quantity }).run()
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error in PUT /api/cart:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}