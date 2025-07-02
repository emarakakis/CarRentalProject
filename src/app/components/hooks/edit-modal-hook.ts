import { CarType } from "../CarItem/type";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { QueryClient } from "@tanstack/react-query";

export function useEditModal(
    setOpen     : React.Dispatch<React.SetStateAction<boolean>>,
    setType     : React.Dispatch<React.SetStateAction<"add" | "edit" | "pad">>,
    button      : "add" | "edit",
    delta       : boolean,
    refetch    ?: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<CarType, Error>>,
    client     ?: QueryClient
) {
    const [start, setStart] = useState<boolean>(true)
    useEffect(() => {

        async function updateSelectedCar(){
            if (refetch === undefined){
                throw new Error("Adding without a refetch function")
            }
            await refetch()
            //client?.invalidateQueries({queryKey:["selected-car"]})
            setType("edit")
            setOpen(true)

        }
        console.log("EEEhaa")
        if (start){
            setStart(false)
        }
        else if (button === "add"){
            setType("add")
            setOpen(true)
        } else {
            updateSelectedCar()
        }

    }, [delta])
}