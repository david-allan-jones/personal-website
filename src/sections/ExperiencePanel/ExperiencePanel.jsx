import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import MediaCard from '../../shared/MediaCard'
import { Grid } from '@material-ui/core'
import experiences from './experience'

export default function ExperiencePanel() {
  return (
    <div>
      <SectionHeader>{i18next.t('experience.header')}</SectionHeader>
      <Grid container alignItems="center" spacing={10}>
        {experiences.map((experience) => (
          <Grid key={experience.title} item xs={12} sm={4}>
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
    </div>
  );
}