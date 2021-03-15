import { useState } from 'react'
import i18next, { supportedLocales, languageStorage } from './i18n/i18next'
import MenuIcon from '@material-ui/icons/Menu'
import TranslateIcon from '@material-ui/icons/Translate'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
  Menu,
  MenuItem,
  Typography,
  Divider
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
  const [languageAnchor, setLanguageAnchor] = useState(null)

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

  function handleLanguageMenu(locale) {
    languageStorage.write(locale)
    window.location.reload()
  }

  return (
    <ThemeProvider theme={darkModeEnabled ? { ...darkTheme } : { ...lightTheme }}>
      <CssBaseline />
      <Container>
        <AppBar color='primary' position='fixed'>
          <Toolbar>
            <IconButton
              style={{ marginLeft: 'auto' }}
              color='inherit'
              aria-label='menu'
              onClick={(e) => setLanguageAnchor(e.currentTarget)}
            >
              <TranslateIcon />
              <Typography variant='button'>{i18next.t(`languages.${i18next.language}`)}</Typography>
              <ExpandMoreIcon />
            </IconButton>
            <Menu
              id="language-menu"
              anchorEl={languageAnchor}
              keepMounted
              open={Boolean(languageAnchor)}
              onClose={() => setLanguageAnchor(null)}
            >
              {supportedLocales.map((locale) => (
                <MenuItem key={locale} onClick={() => handleLanguageMenu(locale)}>
                    {i18next.t(`languages.${locale}`)}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
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
                onClick={() => {
                  window.location.hash = section.anchor
                  toggleDrawer()
                }}
              >
                <ListItemText primary={section.name} />
              </ListItem>
            ))}
            <Divider />
            <ListItem>
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={darkModeEnabled} onChange={handleSwitch} />}
                  label={i18next.t('darkmode.label')}
                />
              </FormGroup>
            </ListItem>
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