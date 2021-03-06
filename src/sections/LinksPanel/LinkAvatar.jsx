import { makeStyles } from '@material-ui/core/styles'
import React from "react";

const useStyles = makeStyles((theme) => ({
    link: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    }
}))

export default function LinkAvatar({ src, alt, url }) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <img
                src={src}
                alt={alt}
                onClick={() => window.location = url}
                className={classes.link}
                style={{"cursor": "pointer"}}
            />
        </React.Fragment>
    )
}