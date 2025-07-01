import * as React from 'react'

import {Box, Drawer, Typography, Button, ListItem, ListItemText} from '@mui/material'
import { CartContext } from '../Cart/cart-context'
import { useContext } from 'react'
import { CartType } from '../Cart/types'
import { CarContext } from '../Cars/car-context'
import { CarType } from '../CarItem/type'
import { error } from 'console'

type CartDisplayProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CartDisplay({ show, setShow }: CartDisplayProps) {
    const context = useContext(CartContext)
    const {cars} = useContext(CarContext)

    if (!context){
        throw new Error("How")
    }

    const {cart} = context

    const handleClose = () => {
        setShow(false)
    }

    const carInformation = findCarInformation(cars, cart.items)

    return (
        <Drawer anchor="right" open={show} onClose={handleClose}>
            <Box sx={{display: 'flex', flexDirection:"column", alignItems:"center", width: 300, padding: 2}}>
                <Typography variant='h1'>Your Cart!</Typography>
                {carInformation.map((car: CarType & {quantity: number} , i:number) => {
                    return (
                        <ListItem key = {i}>
                            <ListItemText>{car.brand} {car.name} of Quantity: {car.quantity}</ListItemText>
                        </ListItem>)
                })}
                <Button sx={{color:"black"}}>Buy</Button>
                <Button sx={{color:"black"}}onClick={handleClose}>Exit</Button>
                Price: {cart.price}
            </Box>
        </Drawer>
    )
}

function findCarInformation(cars:CarType[], cartItems:{id: string, quantity: number}[]): CarType[]{
    return cartItems.map(item => {
        const car = cars.find(car => car.id === item.id)
        if (!car){
            throw new Error("Wtf")
        } else {
            return {...car, quantity: item.quantity}
        }
        
    })
}
