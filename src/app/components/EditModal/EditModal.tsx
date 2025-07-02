import * as React from 'react'
import { useEffect } from 'react'
import {Dialog, DialogTitle, DialogActions, Button, DialogContent, DialogContentText, TextField} from '@mui/material'
import { CarType } from '../CarItem/type'
import { useForm } from 'react-hook-form'
import { zero_car } from '../Cars/cars'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { EditModalContext } from './editModal-context'
import { updateCar, addCar, deleteCar } from '../scripts/serverFunctions'


export default function EditModal(){
    const queryClient = useQueryClient()
    const {open, setOpen, type, setType} = useContext(EditModalContext)
    const {mutate: mutateUpdate} = useMutation({
        mutationFn: updateCar,
        onSuccess: () => {
            console.log("Car Updated!")
            queryClient.invalidateQueries({queryKey: ['cars']})
        }
    })

    const {mutate: mutateAdd} = useMutation({
        mutationFn: addCar,
        onSuccess: () => {
            console.log("Car Added!")
            queryClient.invalidateQueries({queryKey: ['cars']})
        }
    })

    const {mutate: mutateDelete} = useMutation({
        mutationFn: deleteCar,
        onSuccess: () => {
            console.log("Successfully Deleted Car!")
            queryClient.invalidateQueries({ queryKey: ['cars'] })
            queryClient.invalidateQueries({ queryKey: ['cart'] })
            setOpen(false)
            reset(zero_car)
        }
    })

    
    let car = queryClient.getQueryData<CarType>(['selected-car'])
    if (typeof car !== "object" || !car){
        car = zero_car
    }
    
    const {register, handleSubmit, reset} = useForm<CarType>({
        defaultValues:car
    })

    console.log(type)

    useEffect(() => {
        if (type === "pad"){}
        else if (type === "add"){
            reset(zero_car)
        } else {
            reset(car)
        }
        
    }, [open, car, reset, type])

    const handleClose = () => {
        setType("pad")
        setOpen(false)
    }

    const onSubmit = (data: CarType) => {
        if (type === "add"){
            mutateAdd(data)
        } else {
            mutateUpdate(data)
        }
        reset(zero_car)
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{type === "add" ? "Add" : "Edit"} Car</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
                <DialogContentText>Edit the current values and then save.</DialogContentText>
                <TextField {...register("brand")} fullWidth />
                <TextField {...register("name")} fullWidth />
                <TextField {...register("quantity")} fullWidth />
                <TextField {...register("price")} fullWidth />
            </DialogContent>
            <DialogActions>
                {type === "edit" && <Button sx = {{color:'red'}}onClick={()=> mutateDelete(car.id)}>Delete</Button>}
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" sx={{color:'green'}}>{type === "add" ? "Add Car" : "Save Changes"}</Button>
            </DialogActions>
        </form>
        </Dialog>

    )
}