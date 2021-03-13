import LinkAvatar from './LinkAvatar'
import GitHubLogo from './img/github.png'
import LinkedInLogo from './img/linkedin.png'
import SectionHeader from '../../shared/SectionHeader'
import i18next from '../../i18n/i18next'

export default function LinksPanel() {
    return (
        <div>
            <SectionHeader>{i18next.t('links.header')}</SectionHeader>
            <LinkAvatar
                tooltipTitle='GitHub'
                tooltipLabel='github'
                src={GitHubLogo}
                alt='GitHub'
                url='https://github.com/david-allan-jones?tab=repositories'
            />
            <LinkAvatar
                tooltipTitle='LinkedIn'
                tooltipLabel='linkedin'
                src={LinkedInLogo}
                alt='LinkedIn'
                url='https://www.linkedin.com/in/david-jones-407a06159/'
            />
        </div>
    )
}