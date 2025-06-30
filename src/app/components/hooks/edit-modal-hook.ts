import { useEffect, useState } from "react";
import { CarType } from "../Car/type";

export function useEditModal(
    setCar:React.Dispatch<React.SetStateAction<CarType>>,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    setType:React.Dispatch<React.SetStateAction<"add" | "edit">>,
    car:CarType,
    edit:boolean)
{
    const [start, setStart] = useState<boolean>(true)
    
    useEffect(()=>{
        if (start){
            setStart(false) 
        } else {
            setType("edit")
            setCar(car)
            setOpen(true)
        }
    },[edit])
}