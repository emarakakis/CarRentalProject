// Header.tsx
'use client';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import CarRentalIcon from '@mui/icons-material/CarRental';
import Typography from "@mui/material/Typography";

export default function Header() {
    const theme = createTheme({
    palette: {
      primary: {
          main: '#d8d8d8',
          dark: '#aaa4a3',
      }
    },
    typography:{
        fontFamily: "Roboto",
        h1:{
            fontSize: '2.5rem',
            fontWeight: 600,
        }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" 
        sx={{
            alignItems: "center",
            bgcolor: 'primary.main',
            height: "100px",
            display: "flex",
            gap: 2 }}>
        <Button variant="contained" sx={{width: 50, height: 50, bgcolor:"primary.dark", borderRadius: 15}}>
            <CarRentalIcon />
        </Button>
        <Typography variant="h1" sx={(theme) =>( {
            color: theme.palette.primary.dark
        })}>Eftychis Car Rentals</Typography>
      </Container>
    </ThemeProvider>
  );
}
