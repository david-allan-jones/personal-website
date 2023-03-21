import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import MediaCard from '../../shared/MediaCard'
import { Grid } from '@mui/material'
import experiences from './experience'

export default function ExperiencePanel() {
  return (
    <React.Fragment>
      <SectionHeader>{i18next.t('experience.header')}</SectionHeader>
      <Grid container alignItems="center" spacing={4}>
        {experiences.map((experience) => (
          <Grid key={experience.url} item md={4} sm={6} xs={12}>
            <MediaCard
              imageSrc={experience.imageSrc}
              title={experience.title}
              details={experience.details}
              url={experience.url}
              start={experience.start}
              end={experience.end}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}