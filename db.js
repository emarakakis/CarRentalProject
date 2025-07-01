import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

import path from 'path'

const sqliteDB = new Database('./mydb.sqlite')



export const carTable = sqliteTable('cars', {
    id: text('id').primaryKey(),
    name: text('name'),
    brand: text('brand'),
    quantity: integer('quantity'),
    price: integer('price')
})

export const cartTable = sqliteTable('cart', {
    id : text("id").primaryKey(),
    quantity : integer("quantity")
})

export const db = drizzle(sqliteDB)

export function initializeDB() {
    sqliteDB.exec(`
        DROP TABLE IF EXISTS cart;
        DROP TABLE IF EXISTS cars;

        CREATE TABLE cart (
            id TEXT PRIMARY KEY,
            quantity INTEGER
        );

        CREATE TABLE cars (
            id TEXT PRIMARY KEY,
            name TEXT,
            brand TEXT,
            quantity INTEGER,
            price INTEGER
        );
    `)
}


