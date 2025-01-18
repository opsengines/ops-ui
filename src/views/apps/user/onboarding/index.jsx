'use client'

import React, { useEffect, useState } from 'react'
import { Modal, Box, Typography, Button, TextField, Stepper, Step, StepLabel, Card, CardContent } from '@mui/material'
import { Cloud, GitHub, Security } from '@mui/icons-material'
import CourseTable from '../../academy/dashboard/CourseTable'
import { storeGithubInfo } from '@/api/github'
import { getGitInfo } from '@/api/github'

const OnboardingModal = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [scmDetails, setScmDetails] = useState({ username: '', token: '' })
  const [cloudDetails, setCloudDetails] = useState({ clusterUrl: '', apiKey: '' })
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showTable, setShowTable] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [complete, setComplete] = useState(false)
  const [open, setOpen] = useState(false)

  const steps = ['Choose Integration', 'Configuration', 'Repositories', 'Start']
  const authToken = localStorage.getItem('authToken')

  const handleBack = () => {
    setActiveStep(prev => prev - 1)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleShowNotification = () => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const handleFetchRepos = async () => {
    setError(false)
    setRepos([])

    const url = `https://api.github.com/users/${scmDetails.username}/repos`
    const githubToken = scmDetails.token

    try {
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
        url: `https://github.com/${repo.full_name}`,
        updatedAt: repo.updated_at,
        defaultBranch: repo.default_branch,
        language: repo.language,
        owner: repo.owner.login,
        avatar: repo.owner.avatar_url
      }))
      setRepos(formattedRepos)
      setShowTable(true)
    } catch (err) {
      setError(true)
      setShowTable(true)
      console.log('setting error')
    } finally {
      setLoading(false)
    }
  }

  const getGithubInformation = async () => {
    try {
      const data = await getGitInfo(authToken)
      if (data[0]?.GitHubLink?.length <= 0 || data?.length === 0) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const storeGithubata = async () => {
    const githubData = {
      github_username: scmDetails?.username,
      github_token: scmDetails?.token,
      github_links: selectedRows
    }
    try {
      await storeGithubInfo(githubData, authToken)
      setComplete(true)
      handleShowNotification()
    } catch (error) {
      console.error(error)
    }
  }

  const handleNext = async () => {
    if (activeStep === 1 && selectedOption === 'SCM') {
      await handleFetchRepos()
    }
    if (activeStep === 2 && selectedOption === 'SCM' && selectedRows.length > 0) {
      storeGithubata()
    }
    if (activeStep === 3 && complete) {
      setOpen(false)
    }
    setActiveStep(prev => prev + 1)
  }

  useEffect(() => {
    getGithubInformation()
  }, [])

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '70vh',
          bgcolor: 'background.paper',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box mb={4}>
          <Typography variant='h4' textAlign='center' mb={2}>
            Welcome to OpsEngines!
          </Typography>
          <Typography variant='subtitle1' textAlign='center'>
            Configure your application to get started with ease.
          </Typography>
        </Box>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            px: 2
          }}
        >
          {/* Step 1: Choose Integration */}
          {activeStep === 0 && (
            <Box display='flex' gap={4} justifyContent='center'>
              <Card
                sx={{
                  width: selectedOption === 'SCM' ? '45%' : '50%',
                  cursor: 'pointer',
                  height: '250px',
                  border: selectedOption === 'SCM' ? '2px solid #3f51b5' : 'none'
                }}
                onClick={() => setSelectedOption('SCM')}
              >
                <CardContent>
                  <GitHub fontSize='large' />
                  <Typography variant='h6' textAlign='center'>
                    SCM
                  </Typography>
                  <Typography variant='body1' textAlign='center'>
                    Setup your repositories to start performing security scans
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: selectedOption === 'Cloud' ? '45%' : '50%',
                  cursor: 'pointer',
                  border: selectedOption === 'Cloud' ? '2px solid #3f51b5' : 'none'
                }}
                onClick={() => setSelectedOption('Cloud')}
              >
                <CardContent>
                  <Cloud fontSize='large' />
                  <Typography variant='h6' textAlign='center'>
                    Cloud
                  </Typography>
                  <Typography variant='body1' textAlign='center'>
                    Setup your cloud clusters to perform security operations
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}

          {/* Step 2: Configuration */}
          {activeStep === 1 && selectedOption === 'SCM' && (
            <Box mt={4}>
              <Typography variant='h6'>Enter Github Credentials</Typography>
              <TextField
                fullWidth
                label='GitHub Username'
                value={scmDetails.username}
                onChange={e =>
                  setScmDetails({
                    ...scmDetails,
                    username: e.target.value
                  })
                }
                margin='normal'
              />
              <TextField
                fullWidth
                label='GitHub Token'
                type='password'
                value={scmDetails.token}
                onChange={e =>
                  setScmDetails({
                    ...scmDetails,
                    token: e.target.value
                  })
                }
                margin='normal'
              />
            </Box>
          )}
          {activeStep === 1 && selectedOption === 'Cloud' && (
            <Box mt={4}>
              <TextField
                fullWidth
                label='Cloud Cluster URL'
                value={cloudDetails.clusterUrl}
                onChange={e =>
                  setCloudDetails({
                    ...cloudDetails,
                    clusterUrl: e.target.value
                  })
                }
                margin='normal'
              />
              <TextField
                fullWidth
                label='API Key'
                type='password'
                value={cloudDetails.apiKey}
                onChange={e =>
                  setCloudDetails({
                    ...cloudDetails,
                    apiKey: e.target.value
                  })
                }
                margin='normal'
              />
            </Box>
          )}

          {/* Step 3: Repositories */}
          {activeStep === 2 && selectedOption === 'SCM' && (
            <Box textAlign='center'>
              {loading ? (
                <p>Loading...</p>
              ) : showTable ? (
                !error ? (
                  <CourseTable courseData={repos} selectedRows={selectedRows} setSelectedRows={setSelectedRows} />
                ) : (
                  <p>Error fetching repositories. Please try again.</p>
                )
              ) : null}
            </Box>
          )}

          {/* Step 4: Start */}
          {showNotification && (
            <Box
              sx={{
                position: 'fixed',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#4caf50',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 4,
                boxShadow: 2,
                display: 'flex',
                alignItems: 'center',
                zIndex: 9999
              }}
            >
              <Typography variant='body2'>Success! Your Setup Has Been Completed.</Typography>
            </Box>
          )}
          {activeStep === 3 && (
            // <Box display='flex' flexWrap={'nowrap'} gap={4} justifyContent='center'>
            <div>
              <Card sx={{ width: '100%', cursor: 'pointer' }}>
                <CardContent>
                  <Security fontSize='large' />
                  <Typography variant='h6' textAlign='center'>
                    <a href='/en/apps/securityengines/sast'>SAST Scan Engines</a>
                  </Typography>
                </CardContent>
              </Card>
              <div style={{ display: 'flex', gap: '4', justifyContent: 'space-between', marginTop: '15px' }}>
                <Card sx={{ cursor: 'pointer', width: '80%', marginRight: '10px' }}>
                  <CardContent>
                    <Security fontSize='large' />
                    <Typography variant='h6' textAlign='center'>
                      <a href='/en/apps/securityplans'>Security Plans Engines</a>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ cursor: 'pointer', width: '80%' }}>
                  <CardContent>
                    <Security fontSize='large' />
                    <Typography variant='h6' textAlign='center'>
                      <a href='/en/apps/securityplans'>Security Plans</a>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </Box>

        <Box mt={4} display='flex' justifyContent='space-between'>
          {activeStep > 0 && activeStep !== 3 && (
            <Button onClick={handleBack} variant='outlined'>
              Back
            </Button>
          )}
          {!complete ? (
            <Button
              onClick={handleNext}
              variant='contained'
              disabled={
                (activeStep === 0 && !selectedOption) ||
                (activeStep === 1 &&
                  ((selectedOption === 'SCM' && (!scmDetails.username || !scmDetails.token)) ||
                    (selectedOption === 'Cloud' && (!cloudDetails.clusterUrl || !cloudDetails.apiKey))))
              }
            >
              Next
            </Button>
          ) : null}
          {complete && (
            <Button
              onClick={() => {
                handleNext()
                handleClose()
              }}
              className='w-[100%]'
            >
              Close
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  )
}

export default OnboardingModal
