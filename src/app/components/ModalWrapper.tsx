import * as React from 'react'

import EditModalContextProvider from './editModal-context'
import CartWrapper from './CartWrapper'

export default function ModalWrapper(){
    return (
        <EditModalContextProvider>
            <CartWrapper />
        </EditModalContextProvider>
    )
}