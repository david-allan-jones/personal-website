import i18next from '../../i18n/i18next'
import llcHomepage from './img/llc-homepage.png'
import llcLanguage from './img/llc-languages-home.png'
import llcJapanese from './img/llc-japanese-films.png'
import llcArabic from './img/llc-arabic-home.png'
import llcPlacement from './img/llc-placement-test.png'
import llcAbout from './img/llc-about.jpg'
import scmlaSessions from './img/scmla-conference-sessions.png'
import scmlaDetails from './img/scmla-event-details.png'
import scmlaPanels from './img/scmla-panels.png'
import scmlaThanks from './img/scmla-thanks.png'

const projects = [
    {
        url: 'https://llc.ou.edu',
        linkText: i18next.t('projects.llc.header'),
        carousel: {
            items: [
                { src: llcLanguage, alt: i18next.t('projects.llc.languages') },
                { src: llcJapanese, alt: i18next.t('projects.llc.japanese') },
                { src: llcHomepage, alt: i18next.t('projects.llc.homepage') },
                { src: llcArabic, alt: i18next.t('projects.llc.arabic') },
                { src: llcPlacement, alt: i18next.t('projects.llc.placement') },
                { src: llcAbout, alt: i18next.t('projects.llc.about') }
            ]
        }
    },
    {
        url: 'https://play.google.com/store/apps/details?id=scmlaconference.llc&hl=en&gl=US',
        linkText: i18next.t('projects.scmla.header'),
        carousel: {
            items: [
                { src: scmlaDetails, alt: i18next.t('projects.scmla.details') },
                { src: scmlaSessions, alt: i18next.t('projects.scmla.sessions') },
                { src: scmlaPanels, alt: i18next.t('projects.scmla.panels') },
                { src: scmlaThanks, alt: i18next.t('projects.scmla.thanks') }
            ]
        }
    },
    {
        url: 'https://github.com/david-allan-jones/personal-website',
        linkText: i18next.t('projects.personalWebsite.header')
    }
]

export default projects