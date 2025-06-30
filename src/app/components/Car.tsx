"use client"
import * as React from 'react'
import { CarType } from './cars'
import Box from '@mui/material/Box'
import AppButton from './AppButton'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react'
import { CartContext } from './cart-context'
import { carStyle } from './styles'
import { CartType } from './cart-context'
import { EditModalContext } from './editModal-context'

export default function Car({props, index}: {props:CarType, index:number}){

    const {id, name, brand, quantity, price: carPrice} = {...props}
    const color = (index % 2) === 0 ? "primary.main" : "primary.dark"
    const buttonColor = (index % 2) === 1 ? "primary.main" : "primary.dark"
    
    const cartContext = useContext(CartContext)
    const editModalContext = useContext(EditModalContext)

    if (!cartContext){
        throw new Error("Something went wrong!")
    }
    const {cart, setCart} = cartContext
    const {setOpen, setCar} = editModalContext

    function handleAddButton(){
        setCart((previousCart: CartType) => {
            const {items, price} = {...previousCart}
            
            const newItems = [...items]
            let newPrice = price

            let itemExistsIndex = newItems.findIndex((car:{id:string, quantity:number}) => car.id === id)
            if(itemExistsIndex === -1){
                newItems.push({id:id, quantity: 1})
            } else {
                newItems[itemExistsIndex] = {...newItems[itemExistsIndex], quantity: newItems[itemExistsIndex].quantity + 1}
            }
            newPrice += carPrice
            console.log(cart)
            return {price: newPrice, items:newItems}
        })

    }

    function handleEditButton(){
        setCar(props)
        setOpen(true)
    }

    return <Box sx={carStyle(color)}>
        <span>{brand}</span>
        <span>{name}</span>
        <span>{carPrice}</span>
        <AppButton props = {{icon:EditIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleEditButton}}/>
        <AppButton props = {{icon:AddIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleAddButton}}/>
    </Box>
}