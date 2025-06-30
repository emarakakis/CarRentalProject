import * as React from 'react'
import { useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { CarType } from '../Car/type'
import { EditModalType } from './types'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { zero_car } from '../cars'

export default function EditModal({props, setCars} : {
    props:EditModalType,
    setCars:React.Dispatch<React.SetStateAction<CarType[]>>
}){
    const {open, setOpen, car, type} = props
    const {id, name, brand, quantity, price: carPrice} = {...car}
    const {register, handleSubmit, reset} = useForm<CarType>({
        defaultValues:car
    })

    // Επειδή δεν έχουμε κάποιο state, τα defaultValues από τα TextField
    // υπολογίζεται μόνο μια φορά. Για αυτό χρειαζόμαστε με κάποιον τρόπο
    // ανανεώσεις. Αυτό επειδή κάναμε το useContext στο από πάνω level.
    useEffect(() => {
      if (type === "add"){
        reset(zero_car)
      } else {
        reset(car)
      }
    }, [car, reset, type])

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = (data: CarType) => {
        setCars((prevCars:CarType[]) => {
            const newCars = [...prevCars]
            let carIndex = newCars.findIndex(c => c.id === data.id)
            if (carIndex === -1){
                newCars.push(data)
            }
            else{
                newCars[carIndex] = data
            }
            
            //Apo Chat auto
            //newCars.map(c=>c.id === data.id : data ? c)
            reset(zero_car)
            return newCars
        })
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
                <Button type="submit">{type === "add" ? "Add Car" : "Save Changes"}</Button>
            </DialogActions>
        </form>
        </Dialog>

    )
}