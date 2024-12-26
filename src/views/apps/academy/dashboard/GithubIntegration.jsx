'use client'

// External Imports
import React, { useState } from 'react'

import { TextField, Button, Grid, Typography, Box, CircularProgress, Paper } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'

// Internal Imports
import CourseTable from './CourseTable'
import avatar from '@/@core/theme/overrides/avatar'
import WelcomeCard from './WelcomeCard'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'

const GithubIntegration = () => {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState('SCM')
  const [error, setError] = useState('')
  const [showTable, setShowTable] = useState(false)

  const handleSelect = option => {
    setSelectedOption(option)
  }

  const handleFetchRepos = async () => {
    setError('')
    setRepos([])

    // GitHub API URL to get user repositories
    const url = `https://api.github.com/users/${username}/repos`
    const githubToken = token

    try {
      // Optionally, add Authorization header with your GitHub token if necessary
      const headers = {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Bearer ${githubToken}`
      }

      const response = await fetch(url, { headers })

      if (!response.ok) {
        const data = await response.json()

        throw new Error(data.message || 'Failed to fetch repositories')
      }

      const data = await response.json()

      const formattedRepos = data.map(repo => ({
        name: repo.name,
        type: repo.visibility,
        url: repo.url,
        updatedAt: repo.updated_at,
        defaultBranch: repo.default_branch,
        language: repo.language,
        owner: repo.owner.login,
        avatar: repo.owner.avatar_url
      }))

      setRepos(formattedRepos)
    } catch (err) {
      setError(err.message || 'Error fetching data')
    } finally {
      setLoading(false)
      setShowTable(true)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    handleFetchRepos()
  }

  return (
    <div>
      <div style={{ display: 'flex', marginLeft: '7%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className='flex max-md:flex-col md:items-center gap-6 plb-5 ml-10 mt-10'>
            <div>
              <div className='flex items-baseline gap-1 mbe-2'>
                <Typography variant='h4'>Hello There User,</Typography>
              </div>
              <div className='mbe-4'>
                <Typography>To Start Performing Security Scans</Typography>
                <Typography>please connect your github account</Typography>
              </div>
            </div>
          </div>
          {/* <WelcomeCard /> */}
          <Grid container spacing={2} justifyContent='center' className='ml-6'>
            {/* SCM Block */}
            <Grid item xs={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: selectedOption === 'SCM' ? '#1976d2' : 'transparent',
                  color: selectedOption === 'SCM' ? 'white' : 'black',
                  border: selectedOption === 'SCM' ? '2px solid #1976d2' : 'none',
                  borderRadius: 2
                }}
                onClick={() => handleSelect('SCM')}
              >
                <Typography variant='h6'>SCM</Typography>
              </Paper>
            </Grid>

            {/* Cloud Block */}
            <Grid item xs={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: selectedOption === 'Cloud' ? '#1976d2' : 'transparent',
                  color: selectedOption === 'Cloud' ? 'white' : 'black',
                  border: selectedOption === 'Cloud' ? '2px solid #1976d2' : 'none',
                  borderRadius: 2
                }}
                onClick={() => handleSelect('Cloud')}
              >
                <Typography variant='h6'>Cloud</Typography>
              </Paper>
            </Grid>

            {/* IAC Block */}
            <Grid item xs={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: selectedOption === 'IAC' ? '#1976d2' : 'transparent',
                  color: selectedOption === 'IAC' ? 'white' : 'black',
                  border: selectedOption === 'IAC' ? '2px solid #1976d2' : 'none',
                  borderRadius: 2
                }}
                onClick={() => handleSelect('IAC')}
              >
                <Typography variant='h6'>IAC</Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: 400,
            mx: 'auto',
            bgcolor: 'background.paper'
          }}
        >
          {selectedOption === 'SCM' ? (
            <>
              <Typography variant='h6' sx={{ mb: 2 }}>
                GitHub Authentication
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: 80,
                  height: 80,
                  mb: 2
                }}
              >
                <GitHubIcon fontSize='large' sx={{ color: '#333', fontSize: 40 }} />
              </Box>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='GitHub Username'
                      variant='outlined'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='GitHub Token'
                      type='password'
                      variant='outlined'
                      value={token}
                      onChange={e => setToken(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </>
          ) : (
            <Typography className='mt-16'>Integration Coming Soon</Typography>
          )}
        </Box>
      </div>
      {showTable && (
        <div style={{ width: '80%', marginLeft: '6%' }}>
          {loading ? <CircularProgress /> : <CourseTable courseData={repos} />}
        </div>
      )}
    </div>
  )
}

export default GithubIntegration
