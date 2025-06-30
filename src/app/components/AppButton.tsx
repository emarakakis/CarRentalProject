import * as React from 'react'
import Button from '@mui/material/Button'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon'

type Button = {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;}
    handleClick: () => void
    buttonColor: string
    iconColor: string
}
export default function AppButton({props} : {props: Button}){
    const {icon:Icon, buttonColor, iconColor, handleClick} = {...props}
    return (
        <Button 
            sx={{color:buttonColor}}
            onClick={()=>handleClick()}>
            <Icon sx={{color:iconColor}}/>
        </Button>)

}