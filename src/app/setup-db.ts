import { db, carTable, initializeDB } from './db'
import { cars } from './components/Cars/cars'

initializeDB()

async function seedCars(){
  for (let i = 0; i < cars.length; i++){
    await db.insert(carTable).values({ ...cars[i], id: i + 1,  })
  }
}

seedCars().then(() => {
  console.log('DB seeded')
})
