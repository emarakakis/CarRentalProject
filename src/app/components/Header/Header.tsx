'use client';

import {ThemeProvider } from "@mui/material/styles";
import {theme, containerSX} from './theme'
import { Container, Button, Typography } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';

import AppButton from "../AppButton/AppButton";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={containerSX}>
        <AppButton 
          //variant="contained"
          props = {
            {icon : CarRentalIcon,
             buttonColor :"primary.main",
             iconColor :"primary.dark",
             handleClick : ()=>{}}
          }
          >
        </AppButton>
        <Typography variant="h1" sx={(theme) =>( {
            color: theme.palette.primary.dark
        })}>Eftychis Car Rentals</Typography>
      </Container>
    </ThemeProvider>
  );
}
