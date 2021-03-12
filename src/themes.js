import { createMuiTheme } from '@material-ui/core/styles'

const commonPalette = {
    primary: {
        main: '#689f38'
    },
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