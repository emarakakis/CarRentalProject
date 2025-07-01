import { db, carTable, cartTable, initializeDB } from './db'
import { cars } from './src/app/components/Cars/cars'

initializeDB()

async function seedCars(){
  for (let i = 0; i < cars.length; i++){
    await db.insert(carTable).values({ ...cars[i], id: `${i + 1}` })
  }

  // Προσθήκη dummy δεδομένων στο cart
  const dummyCartItems = [
    { id: '1', quantity: 2 },
    { id: '3', quantity: 1 },
    { id: '5', quantity: 4 },
  ]

  for (const item of dummyCartItems) {
    await db.insert(cartTable).values(item)
  }
}

seedCars().then(() => {
  console.log('DB seeded')
})
