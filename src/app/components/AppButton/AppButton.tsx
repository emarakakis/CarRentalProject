import * as React from 'react'
import Button from '@mui/material/Button'
import { ButtonType } from './type'

export default function AppButton({props, ...other} : {props: ButtonType}){
    const {icon:Icon, buttonColor, iconColor, handleClick} = {...props}
    return (
        <Button {...other}
            sx={{color:buttonColor}}
            onClick={()=>handleClick()}>
            <Icon sx={{color:iconColor}}/>
        </Button>)

}