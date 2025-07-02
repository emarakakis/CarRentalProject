import * as React from 'react'
import { useEffect } from 'react'
import {Dialog, DialogTitle, DialogActions, Button, DialogContent, DialogContentText, TextField} from '@mui/material'
import { CarType } from '../CarItem/type'
import { useForm } from 'react-hook-form'
import { zero_car } from '../Cars/cars'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { EditModalContext } from './editModal-context'
import { updateCar, addCar } from '../scripts/serverFunctions'

export default function EditModal(){

    const {open, setOpen, type} = useContext(EditModalContext)
    const {mutate: mutateUpdate} = useMutation({
        mutationFn: updateCar,
        onSuccess: () => {
            console.log("Car Updated!")
        }
    })

    const {mutate: mutateAdd} = useMutation({
        mutationFn: addCar,
        onSuccess: () => {
            console.log("Car Added!")
        }
    })

    const queryClient = useQueryClient()
    let car = queryClient.getQueryData<CarType>(['selected-car'])
    if (typeof car !== "object" || !car){
        car = zero_car
    }
    

    // const {id, name, brand, quantity, price: carPrice} = {...car}
    const {register, handleSubmit, reset} = useForm<CarType>({
        defaultValues:car
    })

    useEffect(() => {
        if (type === "add"){
            reset(zero_car)
        } else {
            
            reset(car)
        }
        
    }, [open, car, reset, type])

    const handleClose = () => {
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
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">{type === "add" ? "Add Car" : "Save Changes"}</Button>
            </DialogActions>
        </form>
        </Dialog>

    )
}