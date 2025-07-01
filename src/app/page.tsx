import { cars } from "./components/Cars/cars"
import ModalWrapper from "./components/ModalWrapper"
import {db, carTable, seedCars} from './components/db'

export default async function Home() {

  await seedCars()

  async function test(){
    const cars = await db.select().from(carTable).all()
  }

  console.log(cars)


  return(
    <>
      <ModalWrapper />
    </>
  )
}
