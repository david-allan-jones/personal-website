import React from 'react'
import i18next from '../../i18n/i18next'
import SectionHeader from '../../shared/SectionHeader'
import MediaCard from '../../shared/MediaCard'
import avatar from '../Introduction/img/avatar.png'

export default function SimpleAccordion() {
  return (
    <div>
      <SectionHeader>{i18next.t('education.header')}</SectionHeader>
      <MediaCard
        imageSrc={avatar}
        title={i18next.t('education.ou')}
        url={'https://www.ou.edu/'}
        start={'2015'}
        end={'2019'}
      />
      <MediaCard
        imageSrc={avatar}
        title={i18next.t('education.uec')}
        url={'https://www.uec.ac.jp/eng/'}
        start={'2016'}
        end={'2017'}
      />
      <MediaCard
        imageSrc={avatar}
        title={i18next.t('education.tcc')}
        url={'https://www.tulsacc.edu/'}
        start={'2013'}
        end={'2015'}
      />
    </div>
  );
}