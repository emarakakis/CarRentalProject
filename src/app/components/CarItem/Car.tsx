"use client"
import * as React from 'react'
import { CarType } from './type'
import Box from '@mui/material/Box'
import AppButton from '../AppButton/AppButton'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { carStyle } from '../styles'
import { useMutation } from '@tanstack/react-query'
import { addToCart } from '../scripts/serverFunctions'

export default function CarItem({props: car, index}: {props:CarType, index:number}){

    const {id, name, brand, quantity, price: carPrice} = {...car}
    const color = (index % 2) === 0 ? "primary.main" : "primary.dark"
    const buttonColor = (index % 2) === 1 ? "primary.main" : "primary.dark"
 
    //const [edit, setEdit] = useState<boolean>(false)
    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: addToCart,
        onSuccess: () => {
            console.log("Item Added")
        }
    })
    //useEditModal(setCar, setOpen, setType, car, edit)
    
    function handleAddButton(){
        // setCart((previousCart: CartType) => {
        //     const {items, price} = {...previousCart}
        //     const newItems = [...items]
        //     let newPrice = price

        //     let itemExistsIndex = newItems.findIndex((car:{id:string, quantity:number}) => car.id === id)
        //     if(itemExistsIndex === -1){
        //         newItems.push({id:id, quantity: 1})
        //     } else {
        //         newItems[itemExistsIndex] = {...newItems[itemExistsIndex], quantity: newItems[itemExistsIndex].quantity + 1}
        //     }
        //     newPrice += carPrice
        //     return {price: newPrice, items:newItems}
        // })
        console.log(typeof id)
        mutate({id, quantity: 1})
    }

    function handleEditButton(){
        //setEdit(val => !val)
    }

    return <Box sx={carStyle(color)}>
        <span>{brand}</span>
        <span>{name}</span>
        <span>{carPrice}</span>
        <AppButton props = {{icon:EditIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleEditButton}}/>
        <AppButton props = {{icon:AddIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleAddButton}}/>
    </Box>
}