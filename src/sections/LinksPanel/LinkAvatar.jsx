import { makeStyles } from '@material-ui/core/styles'
import { Tooltip } from '@material-ui/core'
import React from "react";

const useStyles = makeStyles((theme) => ({
    link: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    }
}))

export default function LinkAvatar({ tooltipTitle, tooltipLabel, src, alt, url }) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Tooltip title={tooltipTitle} aria-label={tooltipLabel}>
                <img   
                    src={src}
                    alt={alt}
                    onClick={() => window.location = url}
                    className={classes.link}
                    style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 50px 0 0',
                        cursor: 'pointer'
                    }}
                />
            </Tooltip>
        </React.Fragment>
    )
}