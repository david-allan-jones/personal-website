import i18next from './i18n/i18next'
import Home from './Home/Home'
import Contact from './Contact/Contact'

const navigations = [
    { label: i18next.t('navigation.home'), path: '/', component: <Home /> },
    { label: i18next.t('navigation.contact'), path: '/contact', component: <Contact /> }
]

export default navigations