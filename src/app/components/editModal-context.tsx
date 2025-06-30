import * as React from 'react'

import { createContext, useState } from 'react'
import { CarType, zero_car } from './cars'

type EditModalType = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    car: CarType
    setCar: React.Dispatch<React.SetStateAction<CarType>>
}

export const EditModalContext = createContext<EditModalType>({
    open:false,
    setOpen:() => {},
    car: zero_car,
    setCar: () => {}})

export default function EditModalContextProvider({children} : {children : React.ReactNode}){
    const [open, setOpen] = useState<boolean>(false)
    const [car, setCar] = useState<CarType>(zero_car)
    return (
        <EditModalContext.Provider value={{open, setOpen, car, setCar}}>
            {children}
        </EditModalContext.Provider>
    )
}