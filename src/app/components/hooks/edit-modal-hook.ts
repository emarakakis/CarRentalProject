import { CarType } from "../CarItem/type";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useEditModal(
    setOpen     : React.Dispatch<React.SetStateAction<boolean>>,
    setType     : React.Dispatch<React.SetStateAction<"add" | "edit">>,
    button      : "add" | "edit",
    delta       : boolean,
    refetch    ?: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<CarType, Error>>,
) {
    const [start, setStart] = useState<boolean>(true)
    useEffect(() => {
        if (start){
            setStart(false)
        }
        else if (button === "add"){
            setType("add")
            setOpen(true)
        } else {
            if (refetch === undefined){
                throw new Error("Adding without a refetch function")
            }
            refetch()
            setType("edit")
            setOpen(true)
        }

    }, [delta])
}