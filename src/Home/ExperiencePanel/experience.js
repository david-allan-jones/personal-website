import japan from './img/japan.jpg'
import okcSkyline from './img/okc-skyline.jpg'
import ouLibrary from './img/ou-library.jpg'
import scmlaImg from './img/scmla.jpg'
import i18next from '../../i18n/i18next'

const experiences = [
    {
        imageSrc: japan,
        title: i18next.t('experience.paypay.name'),
        details: i18next.t('experience.paypay.position'),
        url: 'https://paypay.ne.jp/',
        start: i18next.t('date.january2023'),
        end: i18next.t('date.present')
    },
    {
        imageSrc: okcSkyline,
        title: i18next.t('experience.paycom.name'),
        details: i18next.t('experience.paycom.position'),
        url: 'https://www.paycom.com/',
        start: i18next.t('date.may2019'),
        end: i18next.t('date.october2022')
    },
    {
        imageSrc: ouLibrary,
        title: i18next.t('experience.ou.name'),
        details: i18next.t('experience.ou.position'),
        url: 'https://www.ou.edu/',
        start: i18next.t('date.october2015'),
        end: i18next.t('date.may2019')
    },
    {
        imageSrc: scmlaImg,
        title: i18next.t('experience.scmla.name'),
        details: i18next.t('experience.scmla.position'),
        url: 'https://www.southcentralmla.org/',
        start: i18next.t('date.2016'),
        end: i18next.t('date.2017')
    }
]

export default experiences