import { NextResponse } from "next/server"
import { cartTable,carTable,  db } from "../../../../db"
import { sql, eq } from "drizzle-orm"

export async function GET(request: Request){
  const url = new URL(request.url)
  const params = url.searchParams
  const id = params.get('id')

  if (!id){
    throw new Error("Didn't find id in the URL")
  }

  const car = await db.select().from(carTable).where(eq(carTable.id, Number(id)))
  const firstCar = car[0]
  console.log(firstCar)
  return NextResponse.json({
    car: firstCar,
    success:true
  })
}

export async function PUT(request: Request){
    const car = await request.json();

    if (!car || typeof car !== "object") {
      throw new Error("Invalid body");
    }



    console.log(`This is the body id ${car.id}`)
    const { id, name, brand, price, quantity} = car
    console.log(id, name, brand, price, quantity)
    try{
      const result = await db
      .update(carTable)
      .set({id, name, brand, price, quantity})
      .where(eq(carTable.id, id))
    } catch (error) {
      console.log("Something went wrong when Updating the Car!")
      throw error
    }
    
    return NextResponse.json({
      success: true,
      message: "Added Car Successully"})

}

export async function POST(request: Request){
    const car = await request.json()
    car.id = null
    await db.insert(carTable).values(car)

    return NextResponse.json({success: true})
}

export async function DELETE(request: Request){
    const url = new URL(request.url)
    const query = url.searchParams
    const id = query.get('id')
    try{
      const response = await db.delete(carTable).where(eq(carTable.id, Number(id)))
      return NextResponse.json({success: true, status: 200})
    } catch(error) {
      console.log("Error when Deleting Car from DB!")
      throw error
    }
    
}
