import { useEffect, useState } from "react";

export function useAddCar(
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setType: React.Dispatch<React.SetStateAction<"add" | "edit">>,
    add: boolean)
{
    const [start, setStart] = useState(true)
    useEffect(() => {
        if (start){
            setStart(false)
        } else {
            setOpen(true)
            setType("add")
        }
    }, [add])

}