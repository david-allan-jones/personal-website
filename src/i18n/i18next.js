import i18next from 'i18next'
import enStrings from './strings/en.json'
import jaStrings from './strings/ja.json'

const defaultLocale = 'en'

export const supportedLocales = ['en', 'ja']

const storageKey = 'locale-override'
export const languageStorage = {
    read: () => localStorage.getItem(storageKey),
    write: (locale) => localStorage.setItem(storageKey, locale)
}

function getLanguage() {
    const locale = languageStorage.read() || navigator.language
    if (supportedLocales.includes(locale)) {
        return locale
    }
    return defaultLocale
}

i18next.init({
    lng: getLanguage(),
    resources: {
        en: { translation: enStrings },
        ja: { translation: jaStrings }
    }
})

export default i18next