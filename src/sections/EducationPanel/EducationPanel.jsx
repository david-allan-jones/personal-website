import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import MediaCard from '../../shared/MediaCard'
import ouLibarry from '../ExperiencePanel/img/ou-library.jpg'
import uecKoudou from './img/uec-koudou.jpg'
import tulsaSkyline from './img/tulsa-skyline.jpg'
import { Grid } from '@material-ui/core'

export default function SimpleAccordion() {
  return (
    <div>
      <SectionHeader>{i18next.t('education.header')}</SectionHeader>
      <Grid container alignItems="center" spacing={10}>
        <Grid item xs={12} sm={4}>
          <MediaCard
            imageSrc={ouLibarry}
            title={i18next.t('education.ou')}
            url={'https://www.ou.edu/'}
            start={'2015'}
            end={'2019'}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MediaCard
            imageSrc={uecKoudou}
            title={i18next.t('education.uec')}
            url={'https://www.uec.ac.jp/eng/'}
            start={'2016'}
            end={'2017'}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MediaCard
            imageSrc={tulsaSkyline}
            title={i18next.t('education.tcc')}
            url={'https://www.tulsacc.edu/'}
            start={'2013'}
            end={'2015'}
          />
        </Grid>
      </Grid>
    </div>
  );
}