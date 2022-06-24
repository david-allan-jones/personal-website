import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import MediaCard from '../../shared/MediaCard'
import ouLibarry from '../ExperiencePanel/img/ou-library.jpg'
import uecKoudou from './img/uec-koudou.jpg'
import tulsaSkyline from './img/tulsa-skyline.jpg'
import { Grid } from '@mui/material'

export default function SimpleAccordion() {
  return (
    <div>
      <SectionHeader>{i18next.t('education.header')}</SectionHeader>
      <Grid container alignItems="center" spacing={4}>
        <Grid item md={4} sm={6} xs={12}>
          <MediaCard
            imageSrc={ouLibarry}
            title={i18next.t('education.ou.title')}
            details={i18next.t('education.ou.detail')}
            url={'https://www.ou.edu/'}
            start={i18next.t('date.2015')}
            end={i18next.t('date.2019')}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <MediaCard
            imageSrc={uecKoudou}
            title={i18next.t('education.uec.title')}
            details={i18next.t('education.uec.detail')}
            url={'https://www.uec.ac.jp/eng/'}
            start={i18next.t('date.2016')}
            end={i18next.t('date.2017')}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <MediaCard
            imageSrc={tulsaSkyline}
            title={i18next.t('education.tcc.title')}
            details={i18next.t('education.tcc.detail')}
            url={'https://www.tulsacc.edu/'}
            start={i18next.t('date.2013')}
            end={i18next.t('date.2015')}
          />
        </Grid>
      </Grid>
    </div>
  );
}