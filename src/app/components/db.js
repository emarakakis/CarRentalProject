

import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import {cars} from './Cars/cars'
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'


const sqliteDB = new Database('mydb.sqlite')

export const carTable = sqliteTable('cars', {
    id: integer('id').primaryKey(),
    name: text('name'),
    brand: text('brand'),
    quantity: integer('quantity'),
    price: integer('price')
})

await sqliteDB.exec(`
    CREATE TABLE IF NOT EXISTS cars (
        id INTEGER PRIMARY KEY,
        name TEXT,
        brand TEXT,
        quantity INTEGER,
        price INTEGER
    )
`)



export const db = drizzle(sqliteDB)



export async function seedCars(){
    for (const car of cars){
        await db.insert(carTable).values(car)
    }
}