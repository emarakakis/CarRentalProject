'use client';

import {ThemeProvider } from "@mui/material/styles";
import {theme, containerSX} from './theme'
import { Container, Button, Typography, Box} from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";
import { SearchParamType } from "./SearchBar";

import AppButton from "../AppButton/AppButton";
import AddCarButton from "./AddCarButton";

export default function Header({setSearchParams} :{setSearchParams: React.Dispatch<React.SetStateAction<SearchParamType>>}) {

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={containerSX}>
        <Box sx={{display:"flex"}}>
          <AppButton 
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
        <SearchBar setSearchParams={setSearchParams}/>
        <AddCarButton/>
        <CartButton />
      </Container>
    </ThemeProvider>
  );
}