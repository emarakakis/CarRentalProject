import * as React from 'react'
import { ListItem, ListItemText, Button } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { deleteCartCar } from '../scripts/serverFunctions'
import { useQueryClient } from '@tanstack/react-query'

export default function CartItem({name, brand, quantity, id} :
    {name: string,
    brand: string,
    quantity: number,
    id: number}
){
    const client = useQueryClient()

    const {mutate: mutateDeleteCartItem} = useMutation({
        mutationFn: deleteCartCar,
        onSuccess: () => {
            console.log("Deleted Cart Item Successfully.")
            client.invalidateQueries({queryKey: ['cart']})
        }
    })

    return (
        <ListItem>
            <ListItemText>
                {brand} {name} of Quantity: {quantity}
                <Button sx={{color:'red'}} onClick={() => mutateDeleteCartItem(id)}>Delete</Button>
            </ListItemText>
        </ListItem>
        )

}