import Introduction from './sections/Introduction/Introduction'
import ExperiencePanel from './sections/ExperiencePanel/ExperiencePanel'
import EducationPanel from './sections/EducationPanel/EducationPanel'
import ProjectsPanel from './sections/ProjectsPanel/ProjectsPanel'
import LinksPanel from './sections/LinksPanel/LinksPanel'
import { createMuiTheme } from '@material-ui/core/styles'
import { useState } from 'react'
import i18next from './i18n/i18next'
import MenuIcon from '@material-ui/icons/Menu'
import {
  ThemeProvider,
  Switch,
  Container,
  FormGroup,
  FormControlLabel,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer
} from '@material-ui/core'

const defaultTheme = createMuiTheme({})
const darkMode = createMuiTheme({})

function SectionWrapper({ children }) {
  return <div style={{ marginTop: '80px' }}>
    {children}
  </div>
}

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  function getDarkModeSwitch() {
    return <Switch
      checked={darkModeEnabled}
      onChange={() => setDarkModeEnabled(!darkModeEnabled)}
    />
  }

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen)
  }

  return (
    //TODO: Figure out how to utilize theme across all components
    <ThemeProvider theme={darkModeEnabled ? defaultTheme : darkMode}>
      <Container>
        <AppBar position='fixed'>
          <Toolbar>
            <FormGroup>
              <FormControlLabel
                control={getDarkModeSwitch()}
                label={i18next.t('darkmode.label')}
              />
            </FormGroup>
            <IconButton
              edge='end'
              color='inherit'
              aria-label='menu'
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={toggleDrawer}
        >
          <Typography variant='p'>Drawer</Typography>
        </Drawer>
        <SectionWrapper>
          <Introduction />
        </SectionWrapper>
        <SectionWrapper>
          <ExperiencePanel />
        </SectionWrapper>
        <SectionWrapper>
          <ProjectsPanel />
        </SectionWrapper>
        <SectionWrapper>
          <EducationPanel />
        </SectionWrapper>
        <SectionWrapper>
          <LinksPanel />
        </SectionWrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App