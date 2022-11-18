import { Typography } from "@mui/material";
import React from "react";

export default function SectionHeader({ children }) {
    return (
        <React.Fragment>
            <Typography variant='h5' style={{ color: '#f27573', fontWeight: 'bold', fontFamily: 'monospace' }}>
                {children}
            </Typography>
        </React.Fragment>
    )
}