import Introduction from './sections/Introduction/Introduction'
import ExperiencePanel from './sections/ExperiencePanel/ExperiencePanel'
import EducationPanel from './sections/EducationPanel/EducationPanel'
import ProjectsPanel from './sections/ProjectsPanel/ProjectsPanel'
import LinksPanel from './sections/LinksPanel/LinksPanel'
import { createMuiTheme } from '@material-ui/core/styles'
import { useState } from 'react'
import i18next from './i18n/i18next'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import {
  ThemeProvider,
  Switch,
  Container,
  FormGroup,
  FormControlLabel,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Link
} from '@material-ui/core'

const defaultTheme = createMuiTheme({})
const darkMode = createMuiTheme({})

function SectionWrapper({ children, anchor }) {
  return <div id={anchor} style={{ paddingTop: '80px' }}>
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

  const sections = [
    { name: i18next.t('drawer.introduction'), anchor: 'introduction-section', component: <Introduction /> },
    { name: i18next.t('drawer.experience'), anchor: 'experience-section', component: <ExperiencePanel /> },
    { name: i18next.t('drawer.projects'), anchor: 'projects-section', component: <ProjectsPanel /> },
    { name: i18next.t('drawer.education'), anchor: 'education-section', component: <EducationPanel /> },
    { name: i18next.t('drawer.links'), anchor: 'links-section', component: <LinksPanel /> }
  ]

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
              style={{ marginLeft: 'auto' }}
              edge='end'
              color='inherit'
              aria-label='menu'
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          style={{ width: '50%' }}
          anchor='right'
          open={drawerOpen}
          onClose={toggleDrawer}
        >
          <List style={{ width: '250px' }}>
            {sections.map((section) => (
              <Link style={{ color: 'black', textDecoration: 'none' }} href={`#${section.anchor}`}>
                <ListItem button key={section.name}>
                  <ListItemText primary={section.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </SwipeableDrawer>
        {sections.map((section) => (
          <SectionWrapper anchor={section.anchor}>
            {section.component}
          </SectionWrapper>
        ))}
      </Container>
    </ThemeProvider>
  )
}

export default App