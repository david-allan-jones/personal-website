import i18next from './i18n/i18next'
import Introduction from './sections/Introduction/Introduction'
import ExperiencePanel from './sections/ExperiencePanel/ExperiencePanel'
import ProjectsPanel from './sections/ProjectsPanel/ProjectsPanel'
import EducationPanel from './sections/EducationPanel/EducationPanel'
import LinksPanel from './sections/LinksPanel/LinksPanel'

const sections = [
    { name: i18next.t('introduction.header'), anchor: 'introduction-section', component: <Introduction /> },
    { name: i18next.t('experience.header'), anchor: 'experience-section', component: <ExperiencePanel /> },
    { name: i18next.t('projects.header'), anchor: 'projects-section', component: <ProjectsPanel /> },
    { name: i18next.t('education.header'), anchor: 'education-section', component: <EducationPanel /> },
    { name: i18next.t('links.header'), anchor: 'links-section', component: <LinksPanel /> }
]

export default sections