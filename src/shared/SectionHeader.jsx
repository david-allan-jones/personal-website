import { Typography } from "@material-ui/core";

export default function SectionHeader({ children }) {
    return (
        <div>
            <Typography variant='h3'>{children}</Typography>
        </div>
    )
}