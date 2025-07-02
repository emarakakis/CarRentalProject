"use client"
import * as React from 'react'
import { useState } from 'react'


import CarItem from './Car'
import { CarType } from './type'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { List, ListItem } from '@mui/material'
import { carStyle } from '../styles'


export default function CarList({cars}: {cars: CarType[]}){
    const [open, setOpen] = useState<boolean>(false)
    
    const theme = createTheme({
        palette:{
            primary: {
                main: "#f5f5f5",
                dark: "#949494"
            }
        }
    })
    return (
            <ThemeProvider theme={theme}>
                <List
                    
                    sx={{width:1, height:1}}>
                    <ListItem sx={carStyle('yellow')}>
                        <span>Brand</span>
                        <span>Name</span>
                        <span>Price</span>
                        <span>Edit</span>
                        <span>Add to Cart</span>
                        <span>Delete</span>
                    </ListItem>
                    {cars.map((c,index) =>{
                        return <CarItem key={c.id} props={c} index={index}/>
                    })}
                </List>

            </ThemeProvider>
    )
}