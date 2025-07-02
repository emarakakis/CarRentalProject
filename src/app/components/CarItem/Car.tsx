"use client"
import * as React from 'react'
import { CarType } from './type'
import {ListItem} from '@mui/material'
import AppButton from '../AppButton/AppButton'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { carStyle } from '../styles'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addToCart, getCarById, deleteCar } from '../scripts/serverFunctions'
import { useContext, useState } from 'react'
import { EditModalContext } from '../EditModal/editModal-context'
import { useQueryClient } from '@tanstack/react-query'
import { useEditModal } from '../hooks/edit-modal-hook'

export default function CarItem({props: car, index}: {props:CarType, index:number}){

    const {id, name, brand, quantity, price: carPrice} = {...car}
    const color = (index % 2) === 0 ? "primary.main" : "primary.dark"
    const buttonColor = (index % 2) === 1 ? "primary.main" : "primary.dark"
    
    
    const {data:selectedCar, refetch: refetchCar} = useQuery<CarType>({
        queryKey: ["selected-car"],
        queryFn: () => getCarById(id)
    })

    const {setType, setOpen} = useContext(EditModalContext)
    const [edit, setEdit] = useState<boolean>(false)
    const client = useQueryClient()

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: addToCart,
        onSuccess: async () => {
            console.log("Item Added")
            client.invalidateQueries({queryKey: ['cart']})
        }
    })

    const {mutate: mutateDeleteCartItem} = useMutation({
            mutationFn: deleteCar,
            onSuccess: () => {
                console.log("Deleted Cart Item Successfully.")
                client.invalidateQueries({queryKey: ['cars']})
                client.invalidateQueries({queryKey: ['cars']})
            }
        })

    useEditModal(setOpen, setType, "edit", edit, refetchCar, client)
    
    async function handleAddButton(){
        await mutate({id, quantity: 1})
    }

    function handleEditButton(){
        setEdit(val => !val)
    }

    function handleDeleteCar(){
        mutateDeleteCartItem(id)
    }

    const moreSx = {
        
    }

    return <ListItem sx={carStyle(color)}>
        <span>{brand}</span>
        <span>{name}</span>
        <span>{carPrice}</span>
        <span><AppButton props = {{icon:EditIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleEditButton, moreSx:moreSx}}/></span>
        <span><AppButton props = {{icon:AddIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleAddButton, moreSx}}/></span>
        <span><AppButton props = {{icon:DeleteIcon, buttonColor:color, iconColor:buttonColor, handleClick: handleDeleteCar, moreSx}}/></span>
    </ListItem>
}