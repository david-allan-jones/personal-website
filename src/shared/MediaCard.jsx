import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import i18next from '../i18n/i18next'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
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
        {`${start} - ${end}`}
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
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {details}
          </Typography>
          {getTimespanText()}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={openUrl}>
          {i18next.t('common.learnMore')}
        </Button>
      </CardActions>
    </Card>
  )
}