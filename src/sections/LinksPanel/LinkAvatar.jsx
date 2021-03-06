import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import React from "react";

const useStyles = makeStyles((theme) => ({
    link: {
        backgroundColor: 'gray',
        width: theme.spacing(20),
        height: theme.spacing(20)
    }
}))

export default function LinkAvatar({ src, alt, url }) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Avatar
                src={src}
                alt={alt}
                onClick={() => window.location = url}
                className={classes.link}
            />
        </React.Fragment>
    )
}