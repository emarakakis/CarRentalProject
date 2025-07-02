"use client"

import * as React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material'
import { cartButton } from './theme'
import { useState } from 'react';
import { CartType } from '../Cart/types';
import { useQuery } from '@tanstack/react-query';
import { fetchCart } from '../scripts/serverFunctions';
import { Dispatch, SetStateAction } from 'react';



export default function CartButton({setShow}:
    {setShow: Dispatch<SetStateAction<boolean>>}){
    
    const {data} = useQuery<CartType>({
        queryKey: ['cart'],
        queryFn: fetchCart
    })

    

    let cart = data
    if (!cart || !Array.isArray(cart)){
        cart = []
    }
    let cartNum = 0
    if (cart)
        cartNum = calculateCartQuantity(cart)
    
    return (
        <Button
            sx={cartButton}
            onClick={()=>{setShow(true)}}>
            <ShoppingCartIcon />
            <Typography variant='h2'>{cartNum}</Typography>

        </Button>
    )
}

function calculateCartQuantity(cart: CartType){
    let cartQuantity = 0
    cart.map(c => {
        cartQuantity += c.quantity
    })
    return cartQuantity
}