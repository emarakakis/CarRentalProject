"use client"
import * as React from 'react'
import { CartContextProvider } from './cart-context'
import CarList from './CarList'
import EditModal from './EditModal'
import { EditModalContext } from './editModal-context'
import { useContext } from 'react'

export default function CartWrapper(){
    const {open, setOpen, car, setCar} = useContext(EditModalContext)

    return(
        <CartContextProvider>
            <CarList/>
            <EditModal open={open} car={car} setOpen={setOpen}/>
        </CartContextProvider>
    )

}
