import { OverridableComponent } from '@mui/material/OverridableComponent'
import { ButtonProps } from '@mui/material'
import { SvgIconTypeMap } from '@mui/material/SvgIcon'
export type ButtonType = {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;}
    handleClick: () => void
    buttonColor: string
    iconColor: string
    moreSx?: {
        [key: string] : string | number
    }
} & ButtonProps