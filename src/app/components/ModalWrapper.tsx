"use client"
import * as React from 'react'

import EditModalContextProvider from './EditModal/editModal-context'
import { CarContextProvider } from './Cars/car-context'
import CartWrapper from './Cart/CartWrapper'

export default function ModalWrapper(){
    return (
        <EditModalContextProvider>
            <CarContextProvider>
                <CartWrapper />
            </CarContextProvider>
        </EditModalContextProvider>
    )
}