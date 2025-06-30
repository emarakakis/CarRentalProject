import { CarType } from "../Car/type"

export type EditModalContextType = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    car: CarType
    setCar: React.Dispatch<React.SetStateAction<CarType>>
}

export type EditModalType ={
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    car: CarType
}