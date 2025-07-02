import axios from 'axios'
import { CarType } from '../CarItem/type'

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
    return response.data
}

export async function fetchCart(){
    const response = await axios.get<{id: number, quantity: number}[]>('/api/cart')
    if (!Array.isArray(response.data)){
        throw new Error("RIP Cart :(")
    }
    return response.data
}

export async function addToCart(car: {id: number, quantity: number}){
    const response = await axios.put("/api/cart", {...car})
    if(!response.data.success){
        throw new Error("F")
    }
    return
}

export async function getCarById(id: number){
    const response = await axios.get<{car:CarType, success:boolean}>(`/api/car`, { params: {id}})
    const data = response.data
    if(!data || !data.success)
        throw new Error("Error while getting car")
    const car = data.car
    console.log("Fetched!")
    return car
}

export async function updateCar(car: CarType){
    const response = await axios.put('/api/car', car )
    const data = response.data

    if (!data || !data.success){
        throw new Error("Something went wrong on Car Edit!")
    }
}

export async function addCar(car: CarType){
    const response = await axios.post('/api/car', car)
        const data = response.data

    if (!data || !data.success){
        throw new Error("Something went wrong on Car Add!")
    }
}

export async function deleteCar(id: number){
    let response = await axios.delete(`/api/car?id=${id}`)
    let data = response.data

    if (!data || !data.success){
        throw new Error("Something went wrong on Cart Car Delete!")
    }

    await deleteCartCar(id)
}

export async function deleteCartCar(id: number){
    const response = await axios.delete(`/api/cart?id=${id}`)
    const data = response.data
    if (!data || !data.success){
        throw new Error("Something went wrong on Cart Car Delete!")
    }
}