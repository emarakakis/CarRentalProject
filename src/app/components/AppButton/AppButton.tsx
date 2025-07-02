import * as React from 'react'
import Button from '@mui/material/Button'
import { ButtonType } from './type'

export default function AppButton({props, ...other} : {props: ButtonType}){
    const {icon:Icon, buttonColor, iconColor, handleClick, moreSx} = {...props}
    return (
        <Button {...other}
            sx={{color:buttonColor, ...moreSx}}
            onClick={()=>handleClick()}>
            <Icon sx={{color:iconColor}}/>
        </Button>)

}