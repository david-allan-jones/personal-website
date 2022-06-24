import { green, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const commonPalette = {
    primary: {
        main: red[400]
    },
    secondary: {
        main: green[600]
    }
}

export const lightTheme = createTheme({
    palette: {
        ...commonPalette
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        ...commonPalette
    }
})