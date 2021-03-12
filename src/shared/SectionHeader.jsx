import { Typography } from "@material-ui/core";
import React from "react";

export default function SectionHeader({ children }) {
    return (
        <React.Fragment>
            <Typography
                style={{ textAlign: "center" }}
                variant='h5'
            >
                {children}
            </Typography>
        </React.Fragment>
    )
}