import { useState } from 'react'
import i18next, { supportedLocales, languageStorage } from './i18n/i18next'
import MenuIcon from '@material-ui/icons/Menu'
import TranslateIcon from '@material-ui/icons/Translate'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SettingsIcon from '@material-ui/icons/Settings'
import { lightTheme, darkTheme } from './themes'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import navigations from './navigations'
import {
  ThemeProvider,
  Switch as MaterialSwitch,
  Container,
  FormGroup,
  FormControlLabel,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  CssBaseline,
  Menu,
  MenuItem,
  Button,
  Drawer
} from '@material-ui/core'

const storageKey = 'darkModeEnabled'

function App() {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)
  const [languageAnchor, setLanguageAnchor] = useState(null)
  const [optionsDrawerOpen, setOptionsDrawerOpen] = useState(false)
  const [darkModeEnabled, setDarkModeEnabled] = useState(JSON.parse(localStorage.getItem(storageKey)) || false)

  function toggleNavDrawer() {
    setNavDrawerOpen(!navDrawerOpen)
  }

  function toggleOptionsDrawer() {
    setOptionsDrawerOpen(!optionsDrawerOpen)
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
        <Router>
          <AppBar color='primary' position='fixed'>
            <Toolbar>
              <IconButton
                  color='inherit'
                  aria-label='menu'
                  onClick={toggleNavDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor='left' open={navDrawerOpen} onClose={toggleNavDrawer}>
                <List style={{width: '250px'}}>
                  {navigations.map((navigation) => (
                      <ListItem
                        onClick={() => toggleNavDrawer()}
                        button
                        key={navigation.label}
                        component={Link} 
                        to={navigation.path}
                      >
                        {navigation.label}
                      </ListItem>
                  ))}
                </List>
              </Drawer>
              <Button
                style={{ marginLeft: 'auto' }}
                color='inherit'
                aria-label='menu'
                onClick={(e) => setLanguageAnchor(e.currentTarget)}
              >
                <TranslateIcon />
                <ExpandMoreIcon />
              </Button>
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
                onClick={toggleOptionsDrawer}
              >
                <SettingsIcon />
              </IconButton>
              <Drawer anchor='right' open={optionsDrawerOpen} onClose={toggleOptionsDrawer}>
                <List style={{ width: '250px' }}>
                  <ListItem>
                    <FormGroup>
                      <FormControlLabel
                        control={<MaterialSwitch checked={darkModeEnabled} onChange={handleSwitch} />}
                        label={i18next.t('darkmode.label')}
                      />
                    </FormGroup>
                  </ListItem>
                </List>
              </Drawer>
            </Toolbar>
          </AppBar>
          <Switch>
            {navigations.map((navigation) => (
              <Route key={navigation.label} path={navigation.path} exact>
                <div style={{paddingTop: '80px'}}>
                  {navigation.component}
                </div>
              </Route>
            ))}
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App