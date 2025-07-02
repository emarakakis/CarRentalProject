"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AppButton from "../AppButton/AppButton";
import { EditModalContext } from "../EditModal/editModal-context";
import { useContext } from "react";
import { useEditModal } from "../hooks/edit-modal-hook";
export default function AddCarButton(){
    const {open, setOpen, type, setType} = useContext(EditModalContext)
    const [add, setAdd] = useState<boolean>(false)

    useEditModal(setOpen, setType, "add", add);

    return <AppButton
        props={
            {
                icon : AddIcon,
                buttonColor :"",
                iconColor :"red",
                handleClick : () => {setAdd(val => !val)}
            }
        }
    />
    
}