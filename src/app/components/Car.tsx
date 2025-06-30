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

export default function Car({props, index}: {props:CarType, index:number}){

    const {id, name, brand, quantity, price} = {...props}
    const color = (index % 2) === 0 ? "primary.main" : "primary.dark"
    const buttonColor = (index % 2) === 1 ? "primary.main" : "primary.dark"
    const {cart, setCart} = useContext(CartContext)

    function handleAddButton(){

    }

    function handleEditButton(){

    }

    return <Box sx={carStyle(color)}>
        <span>{brand}</span>
        <span>{name}</span>
        <span>{price}</span>
        <AppButton props = {{icon:EditIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleAddButton}}/>
        <AppButton props = {{icon:AddIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleEditButton}}/>
    </Box>
}