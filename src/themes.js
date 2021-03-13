import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const commonPalette = {
    primary: {
        main: red[400]
    },
    secondary: {
        main: red[900]
    }
}

export const lightTheme = createMuiTheme({
    palette: {
        ...commonPalette
    }
})

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        ...commonPalette
    }
})