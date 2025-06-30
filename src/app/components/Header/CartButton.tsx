"use client"

import * as React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material'
import { cartButton } from './theme'
import { CartContext } from '../Cart/cart-context';
import { useContext } from 'react';
import { CartType } from '../Cart/types';



export default function CartButton(){
    const context = useContext(CartContext)
    console.log("Re-Render!")
    let cartNum = 0
    if (context){
        const {cart, setCart} = context
        cartNum = calculateCartQuantity(cart)
    }

    return (
        <Button
            sx={cartButton}>
            <ShoppingCartIcon />
            <Typography variant='h2'>{cartNum}</Typography>
        </Button>
    )
}

function calculateCartQuantity(cart: CartType){
    let cartQuantity = 0
    cart.items.map(c => {
        cartQuantity += c.quantity
    })
    return cartQuantity
}