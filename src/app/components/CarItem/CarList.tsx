"use client"
import { useState } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import CarItem from './Car'
import { CarType } from './type'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'


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
                <Box
                    sx={{display: 'grid', gridTemplateRows: 'repeat(2,1fr)', width:1, height:1}}>
                    {cars.map((c,index) =>{
                        return <CarItem key={c.id} props={c} index={index}/>
                    })}
                </Box>

            </ThemeProvider>
    )
}