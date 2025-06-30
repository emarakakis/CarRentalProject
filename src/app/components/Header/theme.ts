import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
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
        },
        h2:{
            fontSize: '2rem',
            color: 'red',
            fontWeight: 600
        }
    }
  })

export const containerSX = {
    alignItems: "center",
    bgcolor: 'primary.main',
    height: "100px",
    width:"100%",
    display: "flex",
    justifyContent: "space-between",
    gap: 2
}

export const cartButton = {
    color:'black', 
    width:"5px",
    '&:hover':{
        color:'white',
        backgroundColor: 'black'
    }
}