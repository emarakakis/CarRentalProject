'use client';

import {ThemeProvider } from "@mui/material/styles";
import {theme, containerSX} from './theme'
import { Container, Button, Typography, Box} from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import CartButton from "./CartButton";

import AppButton from "../AppButton/AppButton";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>

      <Container
        maxWidth={false}
        sx={containerSX}>
        <Box sx={{display:"flex"}}>
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
        </Box>
        <CartButton />
      </Container>
    </ThemeProvider>
  );
}
