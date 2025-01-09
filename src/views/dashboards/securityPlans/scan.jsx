'use client'

// MUI Imports
import React, { useState } from 'react'

import { Box, Typography, Chip, Divider, Drawer, Button, IconButton, Grid, TextField } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import axios from 'axios'

import { semgrepscan } from '@/api/ApiConstanst'

const VulnerabilityScanCard = ({ scan }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    github_username: '',
    github_token: '',
    github_url: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [response, setResponse] = useState('')

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const toggleDrawer = open => () => {
    setIsOpen(open)
  }

  const scanSemgrep = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post(`${semgrepscan}`, formData)

      setResponse(response.data.results)
      setSuccess(true)
    } catch (err) {
      console.error('Error:', err)
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData)
    scanSemgrep()
  }

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#1C1C2B',
        color: 'white',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '5px',
        marginBottom: '5px'
      }}
    >
      {/* Left Section */}
      <Box display='flex' alignItems='center' gap={2} flex='1'>
        {/* Badge */}
        <Chip
          label={`${scan.id}`}
          sx={{
            backgroundColor: '#2E2E3E',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 12
          }}
        />

        {/* Title and Description */}
        <Box>
          <Typography variant='body1' fontWeight='bold'>
            {scan.title}
          </Typography>
          {/* <Typography variant='body2' sx={{ color: '#B0B0C3', mt: 0.5 }}>
            Security Tools: <strong>{scan.tools}</strong> | Last Evaluated <strong>33m ago</strong>
          </Typography> */}
        </Box>
      </Box>

      {/* Right Section */}
      <Box display='flex' alignItems='center' gap={2}>
        {/* Findings */}
        <Box display='flex' alignItems='center' gap={0.5}>
          <Typography variant='body2' fontWeight='bold' sx={{ color: '#B0B0C3' }}>
            {scan.findings} findings
          </Typography>
        </Box>

        {/* Activation Status */}
        {scan?.active && (
          <Typography variant='body2' fontWeight='bold' sx={{ color: '#81FF81' }}>
            Activated
          </Typography>
        )}
        <Button onClick={toggleDrawer(true)}>Scan</Button>
      </Box>

      <Drawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            height: '100%',
            width: '50%',
            backgroundColor: '#1C1C2B',
            color: 'white',
            borderRadius: '12px 12px 0 0'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #333',
            padding: '16px'
          }}
        >
          <Typography variant='h6' fontWeight='bold'>
            Scan your code for vulnerabilities (SAST)
          </Typography>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Grid Content Section */}
        <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  backgroundColor: '#2E2E3E',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
                <Typography variant='body1' fontWeight='bold'>
                  What will we do ?
                </Typography>
                <Typography variant='body2' className='mt-3' sx={{ color: '#B0B0C3' }}>
                  Upon activation, We will launch an initial scan on all your code files. We will then continuously scan
                  changes, anytime a Pull Request is created or updated.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: '#2E2E3E',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
                {/* First Box with GitHub Icon */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C1C2B',
                    borderRadius: '50%',
                    width: 90,
                    height: 60
                  }}
                >
                  <GitHubIcon sx={{ color: 'white', fontSize: 30 }} />
                </Box>

                {/* Second Box with Input Fields */}
                <Box width={'60%'}>
                  <TextField
                    fullWidth
                    size='small'
                    label='Username'
                    name='github_username'
                    variant='outlined'
                    value={formData.github_username}
                    onChange={handleInputChange}
                    sx={{
                      mb: 1,
                      '& .MuiInputBase-root': {
                        backgroundColor: '#1C1C2B',
                        color: 'white'
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0B0C3'
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    label='Token'
                    name='github_token'
                    variant='outlined'
                    type='password'
                    value={formData.github_token}
                    onChange={handleInputChange}
                    sx={{
                      mb: 1,
                      '& .MuiInputBase-root': {
                        backgroundColor: '#1C1C2B',
                        color: 'white'
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0B0C3'
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    label='Repository URL'
                    name='github_url'
                    variant='outlined'
                    value={formData.github_url}
                    onChange={handleInputChange}
                    sx={{
                      mb: 1,
                      '& .MuiInputBase-root': {
                        backgroundColor: '#1C1C2B',
                        color: 'white'
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0B0C3'
                      }
                    }}
                  />
                  <Button
                    fullWidth
                    variant='contained'
                    onClick={handleSubmit}
                    sx={{
                      backgroundColor: '#4B4BFF',
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      mt: 1
                    }}
                  >
                    {loading ? 'Scanning In Progress..' : 'Scan'}
                  </Button>
                </Box>
              </Box>
            </Grid>
            {success && (
              <Grid item xs={12} sm={12}>
                <Box
                  sx={{
                    backgroundColor: '#2E2E3E',
                    padding: '16px',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircleIcon sx={{ color: 'green', fontSize: 30 }} />
                    <Typography variant='body1' fontWeight='bold' className='ml-5'>
                      Repository Scan Successfull
                    </Typography>
                  </div>
                  <Typography variant='body2' sx={{ color: '#B0B0C3' }}>
                    {response}
                  </Typography>
                </Box>
              </Grid>
            )}
            {error && (
              <Grid item xs={12} sm={12}>
                <Box
                  sx={{
                    backgroundColor: '#2E2E3E',
                    padding: '16px',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant='body1' fontWeight='bold'>
                    Grid Item 4
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#B0B0C3' }}>
                    Content for the fourth grid item.
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Drawer>
    </Box>
  )
}

export default VulnerabilityScanCard
