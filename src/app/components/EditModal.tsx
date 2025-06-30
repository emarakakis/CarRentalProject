import * as React from 'react'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { CarType } from './cars'

type EditModal ={
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    car: CarType
}

export default function EditModal(props : EditModal){
    const {open, setOpen} = props

    const handleClose = (reason:string) => {
        setOpen(false)
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Edit Car</DialogTitle>
            <DialogActions>
                <Button>Ok</Button>
                <Button>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}