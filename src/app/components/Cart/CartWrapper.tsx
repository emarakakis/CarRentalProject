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
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
export default function CartWrapper(){
    const {open, setOpen, car, type} = useContext(EditModalContext)
    const {cars, setCars} = useContext(CarContext)
    const [searchParams, setSearchParams] = useState<SearchParamType>({query:""})
    const {isLoading, error, data} = useQuery({
        queryKey:['cars'],
        queryFn: async () => {
            const response = await axios.get('/api/cars')
            console.log("Mple")
            return response.data
        }
    })

    console.log(data)

    const query  = searchParams.query
    let carList: CarType[] = []

    if (query === ""){
            carList = cars
        } else {
            carList = cars.filter(car => car.brand.startsWith(query) || car.name.startsWith(query))
    }

    return(
        <CartContextProvider>
            <Header setSearchParams={setSearchParams}/>
            <CarList cars={carList}/>
            <EditModal props={{open, setOpen, car, type}} setCars={setCars}/>
        </CartContextProvider>
    )

}
