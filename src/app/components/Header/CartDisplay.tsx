import * as React from 'react'

import {Box, Drawer, Typography, Button, ListItem, ListItemText} from '@mui/material'
import { CartContext } from '../Cart/cart-context'
import { useContext } from 'react'
import { CartType } from '../Cart/types'

type CartDisplayProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CartDisplay({ show, setShow }: CartDisplayProps) {
    const context = useContext(CartContext)

    if (!context){
        throw new Error("How")
    }

    const {cart} = context

    const handleClose = () => {
        setShow(false)
    }

    return (
        <Drawer anchor="right" open={show} onClose={handleClose}>
            <Box sx={{display: 'flex', flexDirection:"column", alignItems:"center", width: 300, padding: 2}}>
                <Typography variant='h1'>Your Cart!</Typography>
                {cart.items.map((c:{id: string, quantity: number}, i:number) => {
                    return (
                        <ListItem key = {i}>
                            <ListItemText>{c.id} {c.quantity}</ListItemText>
                        </ListItem>)
                })}
                <Button sx={{color:"black"}}>Buy</Button>
                <Button sx={{color:"black"}}onClick={handleClose}>Exit</Button>
                Price: {cart.price}
            </Box>
        </Drawer>
    )
}
