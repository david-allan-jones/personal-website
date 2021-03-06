import LinkAvatar from './LinkAvatar'
import GitHubLogo from './img/github.png'
import LinkedInLogo from './img/linkedin.png'
import SectionHeader from '../../shared/SectionHeader'
import { Grid } from '@material-ui/core'
import i18next from '../../i18n/i18next'

export default function LinksPanel() {
    return (
        <div>
            <SectionHeader>{i18next.t('links.header')}</SectionHeader>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                <LinkAvatar
                    src={GitHubLogo}
                    alt='GitHub'
                    url='https://github.com/david-allan-jones?tab=repositories'
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <LinkAvatar
                    src={LinkedInLogo}
                    alt='LinkedIn'
                    url='https://www.linkedin.com/in/david-jones-407a06159/'
                />
                </Grid>
            </Grid>
        </div>
    )
}