import i18next from 'i18next'
import enLocale from './locales/en.json'
import jaLocale from './locales/ja.json'

i18next.init({
    lng: navigator.language,
    resources: {
        en: { translation: enLocale },
        ja: { translation: jaLocale }
    }
})

export default i18next