import React, { useState } from 'react'
import { Button, FormControl, TextField, Typography, useTheme } from '@material-ui/core'
import ResultModal from './ResultModal'
import i18next from '../i18n/i18next'

export default function Contact() {
    const theme = useTheme()

    const [firstName, setFirstName] = useState('')
    const [validFirstName, setValidFirstName] = useState(false)
    const [lastName, setLastName] = useState('')
    const [validLastName, setValidLastName] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [message, setMessage] = useState('')
    const [validMessage, setValidMessage] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)
    const [openErrorModal, setOpenErrorModal] = useState(false)

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
        setValidFirstName(event.target.value.length > 0)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
        setValidLastName(event.target.value.length > 0)
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
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
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
    
    const disableButton = !(validFirstName && validLastName && validEmail && validMessage)
    return (
        <React.Fragment>
            <FormControl>
                <Typography variant='h5' style={{marginBottom: '20px'}}>{i18next.t('contact.header')}</Typography>
                <TextField
                    id='name'
                    onChange={handleFirstNameChange}
                    label={i18next.t('contact.name')}
                    variant='outlined'
                    style={{marginBottom: '10px'}}
                />
                <TextField
                    id='email'
                    onChange={handleEmailChange}
                    label={i18next.t('contact.email')}
                    variant='outlined'
                    style={{marginBottom: '10px'}}
                />
                <TextField
                    id='message'
                    onChange={handleMessageChange}
                    label={i18next.t('contact.message')}
                    variant='outlined'
                    style={{marginBottom: '10px'}}
                    rows={5}
                    multiline
                />
                <Button
                    disabled={disableButton}
                    onClick={handleSubmit}
                    style={{
                        color: disableButton ? theme.palette.type : '#FFFFFF',
                        backgroundColor: disableButton ? theme.palette.background.paper : theme.palette.primary.dark
                    }}
                >
                    {i18next.t('contact.submit')}
                </Button>
            </FormControl>
            <ResultModal
                visible={openSuccessModal}
                message={i18next.t('contact.success')}
                onClose={() => window.location.reload()}
            />
            <ResultModal
                visible={openErrorModal}
                message={i18next.t('contact.error')}
                onClose={() => setOpenErrorModal(false)}
            />
        </React.Fragment>
    )
}