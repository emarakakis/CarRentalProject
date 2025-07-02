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
  console.log("Mpee")
  try {
    const body = await request.json()
    const { id, quantity } = body
    if (typeof id !== 'number') {
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

export async function DELETE(request: Request){
  const url = new URL(request.url)
  const query = url.searchParams
  const id = query.get('id')

  try{
    const response = await db.delete(cartTable).where(eq(cartTable.id, Number(id))).run()
    return NextResponse.json({success: true, status: 200})
  } catch(error) {
    console.log("Error while deleting Cart Item")
    throw error
  }
}