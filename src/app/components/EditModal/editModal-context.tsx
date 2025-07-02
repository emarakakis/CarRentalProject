import * as React from 'react'

import { createContext, useState } from 'react'
import { zero_car } from '../Cars/cars'
import { CarType } from '../CarItem/type'
import { EditModalContextType } from './types'

export const EditModalContext = createContext<EditModalContextType>({
    open:false,
    setOpen:() => {},
    type: "add",
    setType: () => {}
})

export default function EditModalContextProvider({children} : {children : React.ReactNode}){
    const [open, setOpen] = useState<boolean>(false)
    const [type, setType] = useState<"add" | "edit">("add")
    return (
        <EditModalContext.Provider value={{open, setOpen, type, setType}}>
            {children}
        </EditModalContext.Provider>
    )
}