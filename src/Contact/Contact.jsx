import React, { useState } from 'react'
import { Button, FormControl, TextField, Typography, useTheme } from '@material-ui/core'
import ResultModal from './ResultModal'
import i18next from '../i18n/i18next'

const validateName = (string) => {
    return /^[a-zA-Z]+$/.test(string)
}

const validateEmail = (string) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(string)
}

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
        setValidFirstName(validateName(event.target.value))
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
        setValidLastName(validateName(event.target.value))
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
        setValidEmail(validateEmail(event.target.value))
    }

    function handleMessageChange(event) {
        setMessage(event.target.value)
        setValidMessage(event.target.value.length > 0)
    }

    function handleSubmit() {
        fetch('https://contact.davidjonesdev.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                message
            })
        }).then((response) => {
            if (response.ok) {
                setOpenSuccessModal(true)
            } else {
                setOpenErrorModal(true)
            }
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
                    id='first-name'
                    onChange={handleFirstNameChange}
                    label={i18next.t('contact.firstName')}
                    variant='outlined'
                    style={{marginBottom: '10px'}}
                />
                <TextField
                    id='last-name'
                    onChange={handleLastNameChange}
                    label={i18next.t('contact.lastName')}
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