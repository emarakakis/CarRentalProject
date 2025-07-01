import axios from 'axios'
import { CarType } from '../CarItem/type'
import { CartType } from '../Cart/types'
export async function fetchCarList(query: string){
    const response = await axios.get<CarType[]>('/api/carList')
    if (!Array.isArray(response.data))
        throw new Error("The cars is not an array")

    return response.data.filter(c => c.brand.startsWith(query) || c.name.startsWith(query))
}

export async function fetchCars(){
    const response = await axios.get<CarType[]>('/api/cars')
    if (!Array.isArray(response.data))
        throw new Error("The cars are not an array")
    console.log(response.data)
    return response.data
}

export async function fetchCart(){
    const response = await axios.get<{id: string, quantity: number}[]>('/api/cart')
    if (!Array.isArray(response.data)){
        throw new Error("RIP Cart :(")
    }
    console.log(response.data)
    return response.data
}


export async function addToCart(car: {id: string, quantity: number}){
    const response = await axios.put("/api/car", {...car})
    if(!response.data.success){
        throw new Error("F")
    }
    return
}