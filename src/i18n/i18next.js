import i18next from 'i18next'
import enLocale from './locales/en.json'
import jaLocale from './locales/ja.json'

const defaultLangauge = 'en'
const supported = ['en', 'ja']

i18next.init({
    lng: supported.includes(navigator.language) ? navigator.language : defaultLangauge,
    resources: {
        en: { translation: enLocale },
        ja: { translation: jaLocale }
    }
})

export default i18next