"use client"
import * as React from 'react'
import CarList from '../CarItem/CarList'
import { CarType } from '../CarItem/type'
import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { SearchParamType } from '../Header/SearchBar'
import { useQuery } from '@tanstack/react-query'
import { fetchCarList, fetchCars } from '../scripts/serverFunctions'
import { Box } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import EditModal from '../EditModal/EditModal'

export default function CartWrapper(){
    const [searchParams, setSearchParams] = useState<SearchParamType>({query:""})
    const {isLoading, error, data:cars} = useQuery({
        queryKey:['cars', 'query'],
        queryFn: () => fetchCarList(searchParams.query),
    })

    const queryClient = useQueryClient()
    useEffect(()=>{
        queryClient.invalidateQueries({queryKey:['cars', 'query']})
    },[searchParams.query])

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
        <>
            <Header setSearchParams={setSearchParams}/>
            <CarList cars={cars}/>
            <EditModal/>
        </>
    )
}
