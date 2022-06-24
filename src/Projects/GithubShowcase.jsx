import React, { useEffect, useState } from "react"
import i18next from '../i18n/i18next'
import SectionHeader from '../shared/SectionHeader'
import MediaCard from '../shared/MediaCard'
import { Grid, Paper, Typography, Link } from '@material-ui/core'

const WHITELIST = [
    'boosted-reformat',
    'rakuten-price-checker'
]

const mapToDataModel = async (rawProjectData) => {
    const data = []
    for (let i = 0; i < rawProjectData.length; i++) {
        const datum = rawProjectData[i]
        if (WHITELIST.includes(datum.name)) {
            const languages = 
            data.push({
                description: datum.description,
                languages: await fetch(datum.languages_url)
                    .then(resp => resp.json())
                    .then(langs => Object.keys(langs)),
                name: datum.name,
                url: datum.html_url,
            })
        }
    }
    return data
}

function GithubShowcase() {
    const [data, setData] = useState([])

    console.log(data)
    useEffect(async () => {
        const resp = await fetch('https://api.github.com/users/david-allan-jones/repos')
        const raw = await resp.json()
        const data = await mapToDataModel(raw)
        setData(data)
    }, [])

    return <React.Fragment>
        <SectionHeader>{i18next.t('projects.github.header')}</SectionHeader>
        <br />
        {(data.length ===0) && <Typography variant='p'>There was a problem loading the Github project list.</Typography>}

        <Grid container alignItems="center" spacing={4}>
        {data.map((projectData) => (
            <Grid key={projectData.name} item md={4} sm={6} xs={12}>
            <Paper>
                <div style={{ color: 'white', backgroundColor: '#798897', padding: '5px 5px 5px 5px', borderRadius: '5px'}}>
                    <Typography variant='h5'>{projectData.name}</Typography>
                </div>
                <br />
                <Typography variant='p'>{projectData.description}</Typography>
                <br /><br />
                <Typography bold={true} variant='p'>{i18next.t('projects.github.langs')}: {projectData.languages.join(', ')}</Typography>
                <br />
                <Link variant='p' href={projectData.url}>{i18next.t('projects.github.link')}</Link>
                <br />
            </Paper>
            </Grid>
        ))}
        </Grid>        
    </React.Fragment>
}

export default GithubShowcase