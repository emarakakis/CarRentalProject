"use client"

import * as React from 'react'
import Box from '@mui/material/Box'
import Car from './Car'
import { cars } from './cars'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { CartContextProvider } from './cart-context'

export default function CarList(){
    const theme = createTheme({
        palette:{
            primary: {
                main: "#f5f5f5",
                dark: "#949494"
            }
        }
    })


    return (
        <CartContextProvider>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{display: 'grid', gridTemplateRows: 'repeat(2,1fr)', width:1, height:1}}>
                    {cars.map((c,index) =>{
                        return <Car key={c.id} props={c} index={index} />
                    })}
                </Box>
            </ThemeProvider>
        </CartContextProvider>
    )
}