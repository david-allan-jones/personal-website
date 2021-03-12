import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import ProjectCarousel from './ProjectCarousel'
import llcHomepage from './img/llc-homepage.png'
import llcLanguage from './img/llc-languages-home.png'
import llcJapanese from './img/llc-japanese-films.png'
import llcArabic from './img/llc-arabic-home.png'
import llcPlacement from './img/llc-placement-test.png'
import llcAbout from './img/llc-about.jpg'
import scmlaSessions from './img/scmla-conference-sessions.png'
import scmlaDetails from './img/scmla-event-details.png'
import scmlaPanels from './img/scmla-panels.png'
import scmlaThanks from './img/scmla-thanks.png'
import { Link } from '@material-ui/core'
import './ProjectsPanel.css'

export default function ExperiencePanel() {
    return (
        <div>
            <SectionHeader>{i18next.t('projects.header')}</SectionHeader>
            <br></br>
            <div style={{ textAlign: 'center' }}>
                <Link
                    href='https://llc.ou.edu'
                    variant='h5'
                >
                    {i18next.t('projects.llc.header')}
                </Link>
            </div>
            <ProjectCarousel
                className='llc-carousel'
                items={[
                    { src: llcLanguage, alt: i18next.t('projects.llc.languages') },
                    { src: llcJapanese, alt: i18next.t('projects.llc.japanese') },
                    { src: llcHomepage, alt: i18next.t('projects.llc.homepage') },
                    { src: llcArabic, alt: i18next.t('projects.llc.arabic') },
                    { src: llcPlacement, alt: i18next.t('projects.llc.placement') },
                    { src: llcAbout, alt: i18next.t('projects.llc.about') }
                ]}
            />
            <div style={{ textAlign: 'center' }}>
                <Link
                    href='https://play.google.com/store/apps/details?id=scmlaconference.llc&hl=en&gl=US'
                    variant='h5'
                >
                    {i18next.t('projects.scmla.header')}
                </Link>
            </div>
            <ProjectCarousel
                className='scmla-carousel'
                items={[
                    { src: scmlaSessions, alt: i18next.t('projects.scmla.sessions') },
                    { src: scmlaDetails, alt: i18next.t('projects.scmla.details') },
                    { src: scmlaPanels, alt: i18next.t('projects.scmla.panels') },
                    { src: scmlaThanks, alt: i18next.t('projects.scmla.thanks') }
                ]}
            />
            <div style={{ textAlign: 'center' }}>
                <Link
                    href='https://github.com/david-allan-jones/personal-website'
                    variant='h5'
                >
                    {i18next.t('projects.personalWebsite.header')}
                </Link>
            </div>
        </div>
    );
}