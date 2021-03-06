import Introduction from './sections/Introduction/Introduction'
import ExperiencePanel from './sections/ExperiencePanel/ExperiencePanel'
import EducationPanel from './sections/EducationPanel/EducationPanel'
import LinksPanel from './sections/LinksPanel/LinksPanel'
import { createMuiTheme } from '@material-ui/core/styles'
import { useState } from 'react'
import i18next from './i18n/i18next'
import {
  ThemeProvider,
  Switch,
  Container,
  Divider,
  FormGroup,
  FormControlLabel
} from '@material-ui/core'

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2CCB73'
    },
    secondary: {
      main: '#2CCB73'
    }
  }
})

const darkMode = createMuiTheme({
  palette: {
    primary: {
      main: "#555555"
    },
    seconary: {
      main: "#FFFFFF"
    }
  }
})

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  function getDarkModeSwitch() {
    return <Switch
      checked={darkModeEnabled}
      size='large'
      onChange={() => setDarkModeEnabled(!darkModeEnabled)}
    />
  }

  return (
    //TODO: Figure out how to utilize theme across all components
    <ThemeProvider theme={darkModeEnabled ? defaultTheme : darkMode}>
      <Container>
        <FormGroup>
            <FormControlLabel
                control={getDarkModeSwitch()}
                label={i18next.t('darkmode.label')}
            />
        </FormGroup>
        <Introduction />
        <Divider />
        <ExperiencePanel />
        <Divider />
        <EducationPanel />
        <Divider />
        <LinksPanel />
      </Container>
    </ThemeProvider>
  )
}

export default App