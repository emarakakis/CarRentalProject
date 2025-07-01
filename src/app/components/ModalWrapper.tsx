"use client"
import * as React from 'react'

import EditModalContextProvider from './EditModal/editModal-context'
import { CarContextProvider } from './Cars/car-context'
import CartWrapper from './Cart/CartWrapper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'

export default function ModalWrapper(){
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <EditModalContextProvider>
                <CarContextProvider>
                    <CartWrapper />
                </CarContextProvider>
            </EditModalContextProvider>
        </QueryClientProvider>
    )
}