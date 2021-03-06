import LinkAvatar from './LinkAvatar'
import GitHubLogo from './img/github.png'
import LinkedInLogo from './img/linkedin.png'

export default function LinksPanel() {
    return (
        <div>
            <LinkAvatar
                src={GitHubLogo}
                alt='GitHub'
                url='https://github.com/david-allan-jones?tab=repositories'
            />
            <LinkAvatar
                src={LinkedInLogo}
                alt='LinkedIn'
                url='https://www.linkedin.com/in/david-jones-407a06159/'
            />
        </div>
    )
}