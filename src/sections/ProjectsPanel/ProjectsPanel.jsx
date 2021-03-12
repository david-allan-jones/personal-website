import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import ProjectCarousel from './ProjectCarousel'
import { Link } from '@material-ui/core'
import projects from './projects'
import './ProjectsPanel.css'

function getCarousel(carousel) {
    if (carousel) {
        return <ProjectCarousel className={carousel.className} items={carousel.items} /> 
    }
    return null
}

export default function ExperiencePanel() {
    return (
        <div>
            <SectionHeader>{i18next.t('projects.header')}</SectionHeader>
            <br></br>
            {projects.map((project) => {
                return (
                    <React.Fragment>
                        <div style={{ textAlign: 'center' }}>
                            <Link href={project.url} variant='h5'>{project.linkText}</Link>
                        </div>
                        {getCarousel(project.carousel)}
                    </React.Fragment>

                )})
            }
        </div>
    )
}