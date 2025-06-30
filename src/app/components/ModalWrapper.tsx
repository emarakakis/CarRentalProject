"use client"
import * as React from 'react'

import EditModalContextProvider from './EditModal/editModal-context'
import CartWrapper from './Cart/CartWrapper'

export default function ModalWrapper(){
    return (
        <EditModalContextProvider>
            <CartWrapper />
        </EditModalContextProvider>
    )
}