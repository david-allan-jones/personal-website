import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import ProjectCarousel from './ProjectCarousel'
import { Link, useTheme } from '@material-ui/core'
import projects from './projects'
import './ProjectsPanel.css'

function getCarousel(carousel) {
    if (carousel) {
        return <ProjectCarousel className='project-carousel' items={carousel.items} />
    }
    return null
}

export default function ProjectsPanel() {
    const theme = useTheme()
    return (
        <div>
            <SectionHeader>{i18next.t('projects.header')}</SectionHeader>
            <br></br>
            {projects.map((project) => {
                return (
                    <div style={{ textAlign: 'center' }}key={project.linkText}>
                        <Link
                            style={{
                                color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
                            }}
                            href={project.url}
                            variant='h6'
                        >
                            {project.linkText}
                        </Link>
                        {getCarousel(project.carousel)}
                    </div>
                )
            })
            }
        </div>
    )
}