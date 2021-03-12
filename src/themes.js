import { createMuiTheme } from '@material-ui/core/styles'

export const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#118811'
        },
        secondary: {
            main: '#888888'
        },
        background: {
            main: '#FFFFFF'
        }
    }
})

export const darkTheme = createMuiTheme({
    primary: {
        main: '#FF0000'
    },
    secondary: {
        main: '#888888'
    },
    background: {
        main: '#000000'
    }
})