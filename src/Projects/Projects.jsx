import React from 'react'
import i18next from '../i18n/i18next'
import SectionHeader from '../shared/SectionHeader'
import ProjectCarousel from './ProjectCarousel'
import GithubShowcase from './GithubShowcase'
import { Link, useTheme } from '@mui/material'
import projects from './model'
import './ProjectsPanel.css'

function getCarousel(carousel) {
    if (carousel) {
        return <ProjectCarousel className='project-carousel' items={carousel.items} />
    }
    return null
}

export default function Projects() {
    const theme = useTheme()
    return (
        <div>
            <SectionHeader>{i18next.t('projects.header')}</SectionHeader>
            <br></br>
            {projects.map((project) => {
                return (
                    <div style={{ textAlign: 'center' }} key={project.linkText}>
                        <Link
                            style={{
                                color: '#f27573',
                                textDecoration: project.url ? 'underline' : 'none',
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
            <GithubShowcase />
        </div>
    )
}