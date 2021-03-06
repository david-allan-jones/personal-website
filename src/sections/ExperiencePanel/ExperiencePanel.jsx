import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import MediaCard from '../../shared/MediaCard'
import avatar from '../Introduction/img/avatar.png'
import { Grid, Paper } from '@material-ui/core'

export default function ExperiencePanel() {
    return (
        <div>
          <SectionHeader>{i18next.t('experience.header')}</SectionHeader>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              <MediaCard
              imageSrc={avatar}
              title={i18next.t('experience.paycom.name')}
              details={i18next.t('experience.paycom.position')}
              url={'https://www.paycom.com/'}
              start={'May 2019'}
              end={'present'}
            />
            </Grid>
            <Grid item xs={12} sm={4}>
              <MediaCard
              imageSrc={avatar}
              title={i18next.t('experience.ou.name')}
              details={i18next.t('experience.ou.position')}
              url={'https://www.ou.edu/'}
              start={'October 2015'}
              end={'May 2019'}
            />
            </Grid>
            <Grid item xs={12} sm={4}>
              <MediaCard
              imageSrc={avatar}
              title={i18next.t('experience.scmla.name')}
              details={i18next.t('experience.scmla.position')}
              url={'https://www.southcentralmla.org/'}
              start={'2016'}
              end={'2018'}
            />
            </Grid>
          </Grid>
        </div>
      );
}