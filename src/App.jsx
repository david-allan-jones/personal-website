import { useState } from 'react'
import i18next from './i18n/i18next'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { lightTheme, darkTheme } from './themes'
import sections from './sections'
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
  CssBaseline,
} from '@material-ui/core'

function SectionWrapper({ children, anchor }) {
  return <div id={anchor} style={{ paddingTop: '80px' }}>
    {children}
  </div>
}

const storageKey = 'darkModeEnabled'

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(JSON.parse(localStorage.getItem(storageKey)) || false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen)
  }

  function handleSwitch() {
    const newValue = !darkModeEnabled
    setDarkModeEnabled(newValue)
    if (newValue) {
      localStorage.setItem(storageKey, newValue)
    } else {
      localStorage.removeItem(storageKey)
    }
  }

  return (
    <ThemeProvider theme={darkModeEnabled ? { ...darkTheme } : { ...lightTheme }}>
      <CssBaseline />
      <Container>
        <AppBar color='primary' position='fixed'>
          <Toolbar>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={darkModeEnabled} onChange={handleSwitch} />}
                label={i18next.t('darkmode.label')}
              />
            </FormGroup>
            <IconButton
              style={{ marginLeft: 'auto' }}
              color='inherit'
              aria-label='menu'
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor='right'
          open={drawerOpen}
          onOpen={() => { }}
          onClose={toggleDrawer}
        >
          <List style={{ width: '250px' }}>
            {sections.map((section) => (
              <ListItem
                button
                key={section.name}
                onClick={() => document.getElementById(section.anchor).scrollIntoView({ behavior: 'smooth' })}
              >
                <ListItemText primary={section.name} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        {sections.map((section) => (
          <SectionWrapper key={section.name} anchor={section.anchor}>
            {section.component}
          </SectionWrapper>
        ))}
      </Container>
    </ThemeProvider>
  )
}

export default App