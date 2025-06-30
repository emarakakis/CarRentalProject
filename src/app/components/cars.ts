// cars.ts

import { CartType } from "./cart-context"

export type CarType = {
  id: string
  name: string
  brand: string
  quantity: number
  price: number // τιμή ανά ενοικίαση ή μονάδα, σε €
}

export const zero_car = {
  id: "-1", name: '', brand: '', quantity: -1, price: -1
}

export const cars: CarType[] = [
  { id: '1', name: 'Civic', brand: 'Honda', quantity: 3, price: 45 },
  { id: '2', name: 'Model 3', brand: 'Tesla', quantity: 2, price: 90 },
  { id: '3', name: 'Golf', brand: 'Volkswagen', quantity: 5, price: 50 },
  { id: '4', name: 'Corolla', brand: 'Toyota', quantity: 4, price: 47 },
  { id: '5', name: 'A4', brand: 'Audi', quantity: 1, price: 75 },
  { id: '6', name: 'Mustang', brand: 'Ford', quantity: 2, price: 95 },
  { id: '7', name: 'i30', brand: 'Hyundai', quantity: 6, price: 42 },
  { id: '8', name: 'C-Class', brand: 'Mercedes-Benz', quantity: 3, price: 85 },
  { id: '9', name: '208', brand: 'Peugeot', quantity: 4, price: 38 },
  { id: '10', name: 'Giulia', brand: 'Alfa Romeo', quantity: 1, price: 78 }
]
