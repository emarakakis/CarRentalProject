import * as React from 'react'

import { createContext, useState } from 'react'
import { zero_car } from '../cars'
import { CarType } from '../Car/type'
import { EditModalContextType } from './types'

export const EditModalContext = createContext<EditModalContextType>({
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