import { Typography } from "@mui/material";
import React from "react";

export default function SectionHeader({ children }) {
    return (
        <React.Fragment>
            <Typography variant='h5'>
                {children}
            </Typography>
        </React.Fragment>
    )
}