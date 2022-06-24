import { Modal, Fade, Paper, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import i18next from '../i18n/i18next'

const useStyles = makeStyles(() => ({
    modal: {
        margin: 'auto',
        width: 'auto',
        height: 'fit-content',
        textAlign: 'center',
    }
}))

export default function ResultModal({ visible, message, onClose }) {
    const classes = useStyles()
    return (
        <Modal className={classes.modal} open={visible} onClose={onClose}>
            <Fade in={visible}>
                <Paper style={{padding: '20px 20px 20px 20px'}}>
                    <Typography variant='h6'>{message}</Typography>
                    <div style={{textAlign: 'right'}}>
                        <Button onClick={onClose}>{i18next.t('contact.modalClose')}</Button>
                    </div>
                </Paper>
            </Fade>
        </Modal>
    )
}