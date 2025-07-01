"use client"
import * as React from 'react'
import { CartContextProvider } from './cart-context'
import CarList from '../CarItem/CarList'
import EditModal from '../EditModal/EditModal'
import { EditModalContext } from '../EditModal/editModal-context'
import { useContext, useEffect } from 'react'
import { cars } from '../Cars/cars'
import { CarType } from '../CarItem/type'
import { CarContext } from '../Cars/car-context'
import { useState } from 'react'
import Header from '../Header/Header'
import { SearchParamType } from '../Header/SearchBar'

export default function CartWrapper(){
    const {open, setOpen, car, type} = useContext(EditModalContext)
    const {cars, setCars} = useContext(CarContext)
    const [searchParams, setSearchParams] = useState<SearchParamType>({query:""})

    const query  = searchParams.query
    let carList: CarType[] = []
    console.log(query)

    if (query === ""){
            carList = cars
            console.log(carList)
        } else {
            carList = cars.filter(car => car.brand.startsWith(query) || car.name.startsWith(query))
            console.log(carList)
    }

    return(
        <CartContextProvider>
            <Header setSearchParams={setSearchParams}/>
            <CarList cars={carList}/>
            <EditModal props={{open, setOpen, car, type}} setCars={setCars}/>
        </CartContextProvider>
    )

}
