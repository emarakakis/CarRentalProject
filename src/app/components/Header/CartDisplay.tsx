import * as React from 'react'

import {Box, Drawer, Typography, Button, ListItem, ListItemText} from '@mui/material'
import { CarType } from '../CarItem/type'
import { useMutation, useQuery } from '@tanstack/react-query'
import { CartType } from '../Cart/types'
import { deleteCartCar, fetchCars, fetchCart } from '../scripts/serverFunctions'
import CartItem from './CartItem'

type CartDisplayProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CartDisplay({ show, setShow }: CartDisplayProps) {
    const {data:cart, isLoading: isLoadingCart, error: errorCart} = useQuery<CartType>({
        queryKey: ['cart'],
        queryFn: fetchCart
    })

    const {data:cars, isLoading:isLoadingCars, error: errorCars} = useQuery<CarType[]>({
        queryKey: ['cars'],
        queryFn: fetchCars
    })

    

    const handleClose = () => {
        setShow(false)
    }

    if (isLoadingCars || isLoadingCart){
        return <Box>Loading...</Box>
    }

    if (!cars || errorCars){
        throw new Error("Error when returning cars")
    }

    if (!cart || errorCart){
        throw new Error("Error when returning cart")
    }


    const carInformation = findCarInformation(cars, cart)
    const cartPrice = findCartPrice(carInformation, cars)

    return (
        <Drawer anchor="right" open={show} onClose={handleClose}>
            <Box sx={{display: 'flex', flexDirection:"column", alignItems:"center", width: 300, padding: 2}}>
                <Typography variant='h1'>Your Cart!</Typography>
                {carInformation.map((car: CarType & {quantity: number} , i:number) => {
                    return (
                        <CartItem key={i} name={car.name} brand={car.brand} quantity={car.quantity} id={car.id}/>
                        )
                })}
                <Typography variant='h1'>Cart Price: {cartPrice}</Typography>
                <Button sx={{color:"black"}}>Buy</Button>
                <Button sx={{color:"black"}}onClick={handleClose}>Exit</Button>
                {/* Price: {cart.price} */}
            </Box>
        </Drawer>
    )
}

function findCarInformation(cars:CarType[], cartItems:{id: number, quantity: number}[]): (CarType & {quantity:number})[] {
  return cartItems
    .map(item => {
      const car = cars.find(car => car.id === item.id)
      if (!car) {
        console.warn('Skipping missing car with id:', item.id)
        return null
      }
      return {...car, quantity: item.quantity}
    })
    .filter(Boolean) as (CarType & {quantity:number})[]
}

function findCartPrice(cartItems:CartType, cars:CarType[]){
    let price = 0
    cartItems.map((item) => {
        const carInfo = cars.find(car => car.id === item.id)
        if (!carInfo){
            throw new Error("F u typescript")
        }
        price += item.quantity * carInfo?.price
    })

    return price
}

