import { useEffect, useState } from "react";
import { CarType } from "../cars";

export function useEditModal(setCar:React.Dispatch<React.SetStateAction<CarType>> , setOpen:React.Dispatch<React.SetStateAction<boolean>>, car:CarType, edit:boolean){
    const [start, setStart] = useState<boolean>(true)
    
    useEffect(()=>{
        if (start){
            setStart(false) 
        } else {
            setCar(car)
            setOpen(true)
        }
    },[edit])
}