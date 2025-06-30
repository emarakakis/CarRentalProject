import * as React from 'react'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { CarType } from './cars'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'

type EditModal ={
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    car: CarType
}

export default function EditModal(props : EditModal){
    const {open, setOpen, car} = props
    const {id, name, brand, quantity, price: carPrice} = {...car}
    const {register, handleSubmit, reset} = useForm<CarType>({
        defaultValues:car
    })

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = (data: CarType) => {
        console.log(data)
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
                <DialogContentText>Edit the current values and then save.</DialogContentText>
                <TextField defaultValue={brand} {...register("brand")} fullWidth />
                <TextField defaultValue={name} {...register("name")} fullWidth />
                <TextField defaultValue={quantity} {...register("quantity")} fullWidth />
                <TextField defaultValue={carPrice} {...register("price")} fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
            </DialogActions>
        </form>
        </Dialog>

    )
}