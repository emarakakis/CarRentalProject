import { CarType } from "../CarItem/type"

export type EditModalContextType = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    type: "add" | "edit" | "pad",
    setType: React.Dispatch<React.SetStateAction<"add" | "edit" | "pad">>
}

export type EditModalType ={
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    type: "add" | "edit" | "pad"
}