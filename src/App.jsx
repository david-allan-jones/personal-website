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
  Drawer,
  makeStyles,
  Typography,
  Tabs,
  Tab,
  Divider
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  drawerList: {
    width: '250px'
  },
  pageContainer: {
    paddingTop: '80px'
  },
  navMenu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  hideSm: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  hideXs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

const storageKey = 'darkModeEnabled'

function App() {
  const classes = useStyles()
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
              <Tabs value={false} className={classes.hideXs}>
                {navigations.map((navigation, index) => (
                  <Tab
                    key={navigation.label}
                    component={Link}
                    to={navigation.path}
                    label={navigation.label}
                  />
                ))}
              </Tabs>
              <IconButton
                  className={classes.navMenu}
                  color='inherit'
                  aria-label='menu'
                  onClick={toggleNavDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor='left' open={navDrawerOpen} onClose={toggleNavDrawer}>
                <List className={classes.drawerList}>
                  <ListItem>
                    <Typography variant='h6'>{i18next.t('navigation.header')}</Typography>
                  </ListItem>
                  <Divider />
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
                <Typography className={classes.hideSm} variant='body2'>
                  {i18next.t(`languages.${i18next.language}`)}
                </Typography>
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
                <List className={classes.drawerList}>
                  <ListItem>
                    <Typography variant='h6'>{i18next.t('settings')}</Typography>
                  </ListItem>
                  <Divider />
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
                <div className={classes.pageContainer}>
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