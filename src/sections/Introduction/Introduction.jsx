import avatarSrc from './img/avatar.png'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Typography } from '@material-ui/core'
import i18next from '../../i18n/i18next'
import React from 'react'
import TypeWriter from 'typewriter-effect'

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: theme.palette.primary.main,
        width: theme.spacing(20),
        height: theme.spacing(20),
        display: 'inline-block',
    }
}))

export default function Introduction() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <div style={{ textAlign: 'center' }}>
                <Avatar
                    alt={i18next.t('introduction.name')}
                    src={avatarSrc}
                    className={classes.avatar}
                />
            </div>
            <Typography style={{ textAlign: "center" }} variant='h5'>
                <TypeWriter
                    onInit={(typeWriter) => {
                        typeWriter.typeString(i18next.t('introduction.role.languageLearner'))
                            .pauseFor(800)
                            .deleteAll()
                            .typeString(i18next.t('introduction.role.webDeveloper'))
                            .pauseFor(800)
                            .deleteAll()
                            .typeString(i18next.t('introduction.role.softwareEngineer'))
                            .start()
                    }}
                    options={{
                        delay: 80
                    }}
                />
            </Typography>
            <Typography style={{ textAlign: "center" }} variant='h6'>{i18next.t('introduction.aboutMe')}</Typography>
        </React.Fragment>
    )
}