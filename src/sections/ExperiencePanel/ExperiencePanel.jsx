import SectionHeader from '../../shared/SectionHeader'
import i18next from '../../i18n/i18next'

export default function ExperiencePanel() {
    return (
        <div>
            <SectionHeader>{i18next.t('experience.header')}</SectionHeader>
        </div>
    )
}