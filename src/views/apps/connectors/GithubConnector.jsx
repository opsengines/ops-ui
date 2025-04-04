import React, { useEffect, useState } from 'react'

import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Tab,
  Tabs,
  IconButton,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Skeleton,
  Chip,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import GitHubIcon from '@mui/icons-material/GitHub'
import SettingsIcon from '@mui/icons-material/Settings'
import DeleteIcon from '@mui/icons-material/Delete'

import { useQuery } from '@tanstack/react-query'

import { getGitInfo, storeGithubInfo } from '@/api/github'

import RoboLoader from '@/views/RoboLoader'

const GithubModal = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0)
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')
  const [allSelected, setAllSelected] = useState(false)
  const [selectedRepos, setSelectedRepos] = useState([])
  const [gitRepos, setGitRepos] = useState([])
  const [githubUserName, setGithubUserName] = useState('')
  const [githubToken, setGithubtoken] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const authtoken = localStorage.getItem('authToken')

  // API Call

  const getGithubInformation = async () => {
    try {
      const data = await getGitInfo(authtoken)

      const links = data[0]?.GitHubLink

      const transformedUrls = links.map((url, index) => {
        const path = url.split('github.com')[1]

        return {
          id: index + 1,
          name: path,
          url: url
        }
      })

      setUsername(data[0].GitHubUsername)
      setToken(data[0].GitHubToken)
      setSelectedRepos(data[0]?.GitHubLink)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFetchRepos = async () => {
    setError(false)
    setGitRepos([])

    const url = `https://api.github.com/users/${username}/repos`

    try {
      const headers = {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Bearer ${'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'}`
      }

      const response = await fetch(url, { headers })

      if (!response.ok) {
        const data = await response.json()

        throw new Error(data.message || 'Failed to fetch repositories')
      }

      const data = await response.json()

      const formattedRepos = data.map(repo => ({
        name: repo.name,
        url: `https://github.com/${repo.full_name}`
      }))

      setGitRepos(formattedRepos)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleCheckboxChange = (event, repoId) => {
    setSelectedRepos(prevSelectedRepos => {
      if (prevSelectedRepos.includes(repoId)) {
        return prevSelectedRepos.filter(id => id !== repoId)
      } else {
        return [...prevSelectedRepos, repoId]
      }
    })
  }

  const handleSelectall = value => {
    setAllSelected(value)

    if (value === true) {
      setSelectedRepos(gitRepos?.map(repo => repo.url)) // Select all repositories when 'All' is clicked
    } else {
      setSelectedRepos([])
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getGithubInformation(authtoken),
    queryKey: ['github'],
    enabled: open
  })

  const storeGithubata = async () => {
    const githubData = {
      github_username: username,
      github_token: token,
      github_links: selectedRepos
    }

    try {
      await storeGithubInfo(githubData, authtoken)
    } catch (error) {
      console.error(error)
    }
  }

  const gitProfiles = [
    {
      id: 1,
      githubUsername: 'RahilGandhi',
      githubToken: 'feufeufdowowwodwf',
      repository: [
        'https://github.com/threatreaper/sec-ui',
        'https://github.com/threatreaper/sec-backend',
        'https://github.com/threatreaper/sec-analysis'
      ]
    },
    {
      id: 2,
      githubUsername: 'NirajMehta',
      githubToken: 'feufeufdowowwodwf',
      repository: [
        'https://github.com/opsengines/sec-ui',
        'https://github.com/wdwdwdwd/sec-backend',
        'https://github.com/testing/sec-dba'
      ]
    }
  ]

  useEffect(() => {
    tabValue === 2 && handleFetchRepos()
  }, [tabValue])

  return (
    <Modal open={open} onClose={onClose} style={{ minHeight: '500px' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '500px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        {isLoading ? (
          <RoboLoader />
        ) : (
          <>
            <Box
              sx={{
                bgcolor: '#4d4abc',
                color: 'white',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant='h6' color={'white'}>
                Configure your GitHub credentials <Chip label={'Connected'} color='success' />
              </Typography>
              <IconButton onClick={onClose} sx={{ color: 'white' }}>
                ✖
              </IconButton>
            </Box>

            {/* Tabs */}
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor='primary'
              textColor='primary'
              variant='fullWidth'
              sx={{ borderBottom: '1px solid #ddd' }}
            >
              <Tab label='GITHUB' value={0} />
              <Tab label='Connect' value={2} />
              <Tab label='Repositories' value={1} />
            </Tabs>

            {/* Tab Content */}
            <Box sx={{ p: 3 }}>
              {tabValue === 0 && (
                <Box>
                  <Box className='flex flex-col' alignItems='center' mb={2}>
                    <div className='flex'>
                      <GitHubIcon sx={{ fontSize: 40, mr: 2, color: 'black' }} />
                      <Typography>
                        GitHub, Inc. is a provider of Internet hosting for software development and version control
                        using Git. It offers the distributed version control and source code management functionality of
                        Git, plus its own features.
                      </Typography>
                    </div>
                    <div className='mt-3'>
                      Steps to be followed: Go to https://docs.github.com/en . Login to your account. Create a personal
                      access token with the following permissions Enter your github username and the personal access
                      token Choose the projects that you would like to synchronize Permissions: repo Full control of
                      private repositories repo: status Access commit status repo_deployment Access deployment status
                      public_repo Access public repositories repo: invite Access repository invitations security_events
                      Read and write security events read: org Read org and team membership, read org projects admin:
                      org read: org user read: user Read ALL user profile data
                    </div>
                  </Box>
                  {/* <Typography variant='body2' color='green' mb={2}>
                    GitHub connector is configured. You can press Verify Connectivity below to check your credentials.
                  </Typography> */}
                </Box>
              )}
              {tabValue === 1 && (
                <>
                  {gitProfiles?.map((profile, index) => {
                    return (
                      <Accordion
                        key={index}
                        className='mb-2'
                        style={{ borderLeft: '4px solid green', borderRadius: '0px', padding: '4px' }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls='panel1-content'
                          id='panel1-header'
                          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} // Align items center
                        >
                          <Typography component='span'>Accordion 1</Typography>
                          {/* Box to hold the delete icon and push it to the right */}
                          <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                            <IconButton edge='end' aria-label='delete' className='mr-3'>
                              <DeleteIcon color='#fc4e49' sx={{ color: 'red' }} />
                            </IconButton>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <TableContainer style={{ maxHeight: '250px', overflowY: 'auto' }}>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell padding='checkbox'>
                                    <Checkbox
                                      checked={allSelected}
                                      onChange={event => handleSelectall(event.target.checked)}
                                    />
                                  </TableCell>
                                  <TableCell>Name</TableCell>
                                  <TableCell>URL</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {profile.repository.map((repo, index) => (
                                  <TableRow key={index}>
                                    <TableCell padding='checkbox'>
                                      <Checkbox
                                        checked={selectedRepos?.includes(repo)}
                                        onChange={event => handleCheckboxChange(event, repo)}
                                      />
                                    </TableCell>
                                    <TableCell>{profile.githubUsername}</TableCell>
                                    <TableCell>
                                      <a href={repo} target='_blank' rel='noopener noreferrer'>
                                        {repo}
                                      </a>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </AccordionDetails>
                      </Accordion>
                    )
                  })}
                </>
              )}
              {tabValue === 2 && (
                <Box>
                  <TextField
                    fullWidth
                    label='GitHub Username'
                    variant='outlined'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label='Personal Access Token'
                    variant='outlined'
                    type='password'
                    value={token}
                    onChange={e => setToken(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <TableContainer style={{ height: '200px', overflowY: 'auto' }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell padding='checkbox'>
                            <Checkbox checked={allSelected} onChange={event => handleSelectall(event.target.checked)} />
                          </TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>URL</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {gitRepos.map(repo => (
                          <TableRow key={repo.id}>
                            <TableCell padding='checkbox'>
                              <Checkbox
                                checked={selectedRepos?.includes(repo.url)}
                                onChange={event => handleCheckboxChange(event, repo.url)}
                              />
                            </TableCell>
                            <TableCell>{repo.name}</TableCell>
                            <TableCell>
                              <a href={repo.url} target='_blank' rel='noopener noreferrer'>
                                {repo.url}
                              </a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Box>

            {/* Footer Actions */}
            <Divider />
            {tabValue === 2 && (
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Button variant='contained' color='primary' onClick={() => storeGithubata()}>
                  Save
                </Button>
                <Box>
                  <Button variant='outlined' color='error' startIcon={<DeleteIcon />} sx={{ mr: 1 }}>
                    Delete
                  </Button>
                  <IconButton color='default'>
                    <SettingsIcon />
                  </IconButton>
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
    </Modal>
  )
}

export default GithubModal
