import * as React from 'react'

import { createContext, Dispatch, SetStateAction, useState} from 'react'
import { CarType } from '../CarItem/type'
import { cars as carsInitial } from './cars'

type CarContextType = {
  cars: CarType[]
  setCars: Dispatch<SetStateAction<CarType[]>>
}

export const CarContext = createContext<CarContextType>({
  cars: carsInitial,
  setCars: () => {}
})

export function CarContextProvider({children} : {children:React.ReactNode}){
    const [cars, setCars] = useState<CarType[]>(carsInitial)

    return <CarContext.Provider value = {{cars, setCars}}>
        {children}
    </CarContext.Provider>
}

