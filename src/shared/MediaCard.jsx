import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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