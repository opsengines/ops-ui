import React, { useState } from 'react'

import { Box, Modal, Typography, TextField, Button, Tab, Tabs, IconButton, Divider } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import SettingsIcon from '@mui/icons-material/Settings'
import DeleteIcon from '@mui/icons-material/Delete'

const GithubModal = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0)
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
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
          <Typography variant='h6'>Configure your GitHub credentials</Typography>
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
          <Tab label='GitHub App' />
          <Tab label='Identity Provider' />
          <Tab label='Token' />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Box>
              <Box display='flex' alignItems='center' mb={2}>
                <GitHubIcon sx={{ fontSize: 40, mr: 2, color: 'white' }} />
                <Typography>
                  GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.
                  It offers the distributed version control and source code management functionality of Git, plus its
                  own features.
                </Typography>
              </Box>
              <Typography variant='body2' color='green' mb={2}>
                GitHub connector is configured. You can press Verify Connectivity below to check your credentials.
              </Typography>
            </Box>
          )}
          {tabValue === 1 && <Typography>Identity Provider configuration is under development.</Typography>}
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
            </Box>
          )}
        </Box>

        {/* Footer Actions */}
        <Divider />
        <Box
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Button variant='contained' color='primary'>
            Verify Connectivity
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
      </Box>
    </Modal>
  )
}

export default GithubModal
