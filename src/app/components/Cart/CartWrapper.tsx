"use client"
import * as React from 'react'
import { CartContextProvider } from './cart-context'
import CarList from '../CarItem/CarList'
import EditModal from '../EditModal/EditModal'
import { EditModalContext } from '../EditModal/editModal-context'
import { useContext } from 'react'
import { cars } from '../Cars/cars'
import { CarType } from '../CarItem/type'
import { CarContext } from '../Cars/car-context'
import { useState } from 'react'
import Header from '../Header/Header'

export default function CartWrapper(){
    const {open, setOpen, car, type} = useContext(EditModalContext)
    const {cars, setCars} = useContext(CarContext)
    console.log(cars)
    return(
        <CartContextProvider>
            <Header/>
            <CarList cars={cars}/>
            <EditModal props={{open, setOpen, car, type}} setCars={setCars}/>
        </CartContextProvider>
    )

}
