"use client"

import * as React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material'
import { cartButton } from './theme'
import { useState } from 'react';
import { CartType } from '../Cart/types';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import CartDisplay from './CartDisplay';
import { fetchCart } from '../scripts/serverFunctions';



export default function CartButton(){
    
    const {data} = useQuery<CartType>({
        queryKey: ['cart'],
        queryFn: fetchCart
    })
    const [open, setOpen] = useState<boolean>(false)

    

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
            onClick={()=>{setOpen(true)}}>
            <ShoppingCartIcon />
            <Typography variant='h2'>{cartNum}</Typography>
            {open &&
                <CartDisplay show={open} setShow={setOpen}/>
            
            }
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