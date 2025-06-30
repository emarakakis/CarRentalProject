import React from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AppButton from "../AppButton/AppButton";
export default function AddCarButton(){

    function handleAddNewCar(){

    }

    return <AppButton
        props={
            {
                icon : AddIcon,
                buttonColor :"",
                iconColor :"red",
                handleClick : handleAddNewCar
            }
        }
    />
    
}