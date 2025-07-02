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
    <ListItem
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Χωρίζεται σε 5 ίσα μέρη
        width: '100%',
        alignItems: 'center',
      }}
    >
      <ListItemText sx={{fontSize:2}} primary={`${brand} ${name}`}/>
      <ListItemText sx={{fontSize:2}} primary="Quantity" />
      <ListItemText sx={{fontSize:2}} primary={quantity.toString()} />
      <Button
        sx={{ color: 'red' }}
        onClick={() => mutateDeleteCartItem(id)}
      >
        Delete
      </Button>
    </ListItem>
  )
}