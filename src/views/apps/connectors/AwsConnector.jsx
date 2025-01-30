'use client'

import React, { useEffect, useState } from 'react'

import { Box, Modal, Typography, TextField, Button, Tab, Tabs, IconButton, Divider, CardMedia } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import SettingsIcon from '@mui/icons-material/Settings'
import DeleteIcon from '@mui/icons-material/Delete'

import { Save } from '@mui/icons-material'

import { configureAwsCredentials } from '@/api/connectors'

import Notification from '@/views/components/Notification'
import { userInfo } from '@/api/auth'

const AwsConnector = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0)
  const [username, setUsername] = useState('')
  const [accessKeyId, setaccessKeyId] = useState('')
  const [secret, setSecret] = useState('')
  const [region, setRegion] = useState('')
  const [token, setToken] = useState('')
  const [openNotification, setOpenNotification] = useState(false)
  const [userInformation, setUserInformation] = useState()

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const authToken = localStorage.getItem('authToken')

  const storeAwsCredentials = async data => {
    try {
      const res = await configureAwsCredentials(authToken, data)

      res?.ok && setOpenNotification(true)

      setTimeout(() => {
        setOpenNotification(false)
        res?.ok && onClose()
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSave = () => {
    const reqData = {
      aws_access_key_id: accessKeyId,
      aws_secret_access_key: secret,
      region: region
    }

    storeAwsCredentials(reqData)
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
          <Typography variant='h6'>Configure your AWS Credentials</Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            ✖
          </IconButton>
        </Box>

        <Notification open={openNotification} message={'AWS Credentials Configured Successfully'} />
        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          sx={{ borderBottom: '1px solid #ddd' }}
        >
          <Tab label='Credentials' />
          <Tab label='How To' />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Box>
              <Box display='flex' alignItems='center' justifyContent={'space-around'} mb={2}>
                <CardMedia
                  component='img'
                  image={'/images/apps/connectors/Aws.png'}
                  alt={'Aws Icon'}
                  sx={{
                    width: 60,
                    height: 30,
                    borderRadius: '8px',
                    marginTop: '15px'
                  }}
                />
                <Typography className='w-[75%]'>
                  Amazon Web Services (AWS) is a cloud computing service that provides a range of products and services
                  to help businesses innovate and scale. AWS offers services for storage, compute, databases, analytics,
                  networking, and more
                </Typography>
              </Box>
            </Box>
          )}
          <Box>
            <TextField
              fullWidth
              label='AWS Access Key Id'
              variant='outlined'
              type='password'
              value={accessKeyId}
              onChange={e => setaccessKeyId(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label='Secret Access Key'
              variant='outlined'
              type='password'
              value={secret}
              onChange={e => setSecret(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label='Region'
              variant='outlined'
              type='password'
              value={region}
              onChange={e => setRegion(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Box>
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
            <Button variant='outlined' onClick={() => handleSave()} color='primary' startIcon={<Save />} sx={{ mr: 1 }}>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default AwsConnector
