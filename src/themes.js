import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const commonPalette = {
    primary: red,
    secondary: {
        main: '#ffffff'
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