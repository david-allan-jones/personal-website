import React from 'react'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import i18next from '../i18n/i18next'

const useStyles = makeStyles({
  media: {
    height: 140,
  },
})

export default function MediaCard({ imageSrc, title, details, url, start, end }) {
  const classes = useStyles();

  function openUrl() {
    window.open(url)
  }

  function getTimespanText() {
    if (start && end) {
      return <Typography variant="body2" color="textSecondary" component="p">
        {`${start} ${i18next.t('date.rangeIndicator')} ${end}`}
      </Typography>
    }
    return null
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openUrl}>
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title={title}
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {details}
          </Typography>
          {getTimespanText()}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}