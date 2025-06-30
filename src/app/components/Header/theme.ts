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
        }
    }
  })

export const containerSX = {
    alignItems: "center",
    bgcolor: 'primary.main',
    height: "100px",
    width:"100%",
    display: "flex",
    gap: 2
}