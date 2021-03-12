import avatarSrc from './img/avatar.png'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Typography } from '@material-ui/core'
import i18next from '../../i18n/i18next'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: '#3f51b5',
        width: theme.spacing(20),
        height: theme.spacing(20),
    }
}))

export default function Introduction() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Avatar
                alt={i18next.t('introduction.name')}
                src={avatarSrc}
                className={classes.avatar}
            />
            <Typography style={{ textAlign: "center" }} variant='h2'>{i18next.t('introduction.greeting')}</Typography>
            <Typography style={{ textAlign: "center" }} variant='h6'>{i18next.t('introduction.aboutMe')}</Typography>
        </React.Fragment>
    )
}