import i18next from '../i18n/i18next'
import llcHomepage from './img/llc-homepage.png'
import llcLanguage from './img/llc-languages-home.png'
import llcJapanese from './img/llc-japanese-films.png'
import llcArabic from './img/llc-arabic-home.png'
import llcPlacement from './img/llc-placement-test.png'
import llcAbout from './img/llc-about.jpg'
import sizzleHome from './img/sizzle-home.png'
import sizzlePoll from './img/sizzle-poll.png'
import sizzleAnswer from './img/sizzle-answer.png'
import sizzleResults from './img/sizzle-results.png'
import gomiRepl from './img/gomi-repl.png'
import gomiSrc from './img/gomi-src.png'
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
        url: 'https://sizzle-io.vercel.app/polls',
        linkText: i18next.t('projects.sizzle.header'),
        carousel: {
            items: [
                { src: sizzleHome, alt: i18next.t('projects.sizzle.home') },
                { src: sizzlePoll, alt: i18next.t('projects.sizzle.poll') },
                { src: sizzleAnswer, alt: i18next.t('projects.sizzle.answer') },
                { src: sizzleResults, alt: i18next.t('projects.sizzle.results') },
            ]
        }
    },
    {
        url: 'https://github.com/david-allan-jones/gomi-lang',
        linkText: i18next.t('projects.gomi.header'),
        carousel: {
            items: [
                { src: gomiRepl, alt: i18next.t('projects.gomi.repl') },
                { src: gomiSrc, alt: i18next.t('projects.gomi.src') },
            ]
        }
    },
    {
        url: 'https://drive.google.com/drive/folders/1r9-na4wTYQl36tE47mSkFgv79414bz0z',
        linkText: i18next.t('projects.scmla.header'),
        carousel: {
            items: [
                { src: scmlaDetails, alt: i18next.t('projects.scmla.details') },
                { src: scmlaSessions, alt: i18next.t('projects.scmla.sessions') },
                { src: scmlaPanels, alt: i18next.t('projects.scmla.panels') },
                { src: scmlaThanks, alt: i18next.t('projects.scmla.thanks') }
            ]
        }
    }
]

export default projects