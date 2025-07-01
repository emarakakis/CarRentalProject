"use client"
import * as React from 'react'
import { CartContextProvider } from './cart-context'
import CarList from '../CarItem/CarList'
import { CarType } from '../CarItem/type'
import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { SearchParamType } from '../Header/SearchBar'
import { useQuery } from '@tanstack/react-query'
import { fetchCarList, fetchCars } from '../scripts/serverFunctions'
import { Box } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'

export default function CartWrapper(){
    const [searchParams, setSearchParams] = useState<SearchParamType>({query:""})
    const {isLoading, error, data:cars} = useQuery({
        queryKey:['cars', 'query'],
        queryFn: () => fetchCarList(searchParams.query),
    })

    const queryClient = useQueryClient()
    useEffect(()=>{
        queryClient.invalidateQueries({queryKey:['cars']})
    },[searchParams.query])

    console.log(searchParams.query)

    const query  = searchParams.query
    let carList: CarType[] = []

    if (isLoading){
        return <Box>Loading...</Box>
    }

    if (error) {
        console.error(error);
    return <Box>Error loading cars</Box>;
    }

    if (!cars){
        throw new Error("Something went wrong with the cars")
    }

    return(
        <CartContextProvider>
            <Header setSearchParams={setSearchParams}/>
            <CarList cars={cars}/>
            {/* {<EditModal props={{open, setOpen, car, type}} setCars={setCars}/>} */}
        </CartContextProvider>
    )

}
