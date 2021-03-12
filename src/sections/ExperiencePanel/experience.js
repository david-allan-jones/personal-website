import okcSkyline from './img/okc-skyline.jpg'
import ouLibrary from './img/ou-library.jpg'
import scmlaLogo from './img/scmla-logo.png'
import i18next from '../../i18n/i18next'

const experiences = [
    {
        imageSrc: okcSkyline,
        title: i18next.t('experience.paycom.name'),
        details: i18next.t('experience.paycom.position'),
        url: 'https://www.paycom.com/',
        start: 'May 2019',
        end: 'present'
    },
    {
        imageSrc: ouLibrary,
        title: i18next.t('experience.ou.name'),
        details: i18next.t('experience.ou.position'),
        url: 'https://www.ou.edu/',
        start: 'October 2015',
        end: 'May 2019'
    },
    {
        imageSrc: scmlaLogo,
        title: i18next.t('experience.scmla.name'),
        details: i18next.t('experience.scmla.position'),
        url: 'https://www.southcentralmla.org/',
        start: '2016',
        end: '2018'
    }
]

export default experiences