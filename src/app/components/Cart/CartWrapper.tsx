"use client"
import * as React from 'react'
import { CartContextProvider } from './cart-context'
import CarList from '../Car/CarList'
import EditModal from '../EditModal/EditModal'
import { EditModalContext } from '../EditModal/editModal-context'
import { useContext } from 'react'
import { cars } from '../cars'
import { CarType } from '../Car/type'
import { useState } from 'react'

export default function CartWrapper(){
    const {open, setOpen, car, setCar} = useContext(EditModalContext)
    const [carArray, setCars] = useState<CarType[]>(cars)
    return(
        <CartContextProvider>
            <CarList cars={carArray}/>
            <EditModal props={{open, setOpen, car}} setCars={setCars}/>
        </CartContextProvider>
    )

}
