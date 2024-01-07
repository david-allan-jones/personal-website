import i18next from './i18n/i18next'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

const navigations = [
    { label: i18next.t('navigation.home'), path: '/personal-website', component: <Home /> },
    { label: i18next.t('navigation.projects'), path: '/personal-website/projects', component: <Projects /> },
    { label: i18next.t('navigation.contact'), path: '/personal-website/contact', component: <Contact /> }
]

export default navigations
