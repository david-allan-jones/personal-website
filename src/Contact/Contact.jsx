import React, { useState } from 'react'
import { Button, FormControl, TextField, Typography, useTheme } from '@mui/material'
import ResultModal from './ResultModal'
import i18next from '../i18n/i18next'
import SectionHeader from '../shared/SectionHeader'

export default function Contact() {
    const theme = useTheme()

    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [message, setMessage] = useState('')
    const [validMessage, setValidMessage] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)
    const [openErrorModal, setOpenErrorModal] = useState(false)

    function handleNameChange(event) {
        setName(event.target.value)
        setValidName(event.target.value.length > 0)
    }

    function handleEmailChange(event) {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        setEmail(event.target.value)
        setValidEmail(regex.test(event.target.value))
    }

    function handleMessageChange(event) {
        setMessage(event.target.value)
        setValidMessage(event.target.value.length > 0)
    }

    function handleSubmit() {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('message', message)
        fetch('https://formspree.io/f/mzbknnro', {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).then(() => {
            setOpenSuccessModal(true)
        }).catch(() => {
            setOpenErrorModal(true)
        })
    }

    const disableButton = !(validName && validEmail && validMessage)
    return (
        <React.Fragment>    
            <FormControl fullWidth>
                <SectionHeader>{i18next.t('contact.header')}</SectionHeader>
                <Typography variant='p' style={{ marginBottom: '20px' }}>{i18next.t('contact.info')}</Typography>
                <TextField
                    id='name'
                    onChange={handleNameChange}
                    label={i18next.t('contact.name')}
                    variant='outlined'
                    style={{ marginBottom: '10px' }}
                    fullWidth
                />
                <TextField
                    id='email'
                    onChange={handleEmailChange}
                    label={i18next.t('contact.email')}
                    variant='outlined'
                    style={{ marginBottom: '10px' }}
                    fullWidth
                />
                <TextField
                    id='message'
                    onChange={handleMessageChange}
                    label={i18next.t('contact.message')}
                    variant='outlined'
                    style={{ marginBottom: '10px' }}
                    rows={5}
                    multiline
                    fullWidth
                />
                <Button
                    disabled={disableButton}
                    onClick={handleSubmit}
                    style={{
                        color: disableButton ? theme.palette.type : '#FFFFFF',
                        backgroundColor: disableButton ? theme.palette.background.paper : theme.palette.primary.dark
                    }}
                    fullWidth
                >
                    {i18next.t('contact.submit')}
                </Button>
            </FormControl>
            <ResultModal
                visible={openSuccessModal}
                message={i18next.t('contact.success')}
                onClose={() => window.location.href = 'https://david-allan-jones.github.io/personal-website/'}
            />
            <ResultModal
                visible={openErrorModal}
                message={i18next.t('contact.error')}
                onClose={() => setOpenErrorModal(false)}
            />
        </React.Fragment>
    )
}