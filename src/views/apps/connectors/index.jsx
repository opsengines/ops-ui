'use client'

import React, { useState } from 'react'

import { Typography, Grid } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

import GithubModal from './GithubConnector'
import ConnectorCard from './ConnectorCard'

const ConnectorsView = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  const scmConnectors = [
    {
      id: 1,
      name: 'GitHub',
      image: '/images/apps/connectors/GithubIcon.png',
      connected: true,
      handleClick: handleOpenModal
    },
    {
      id: 2,
      name: 'GitLab',
      image: '/images/apps/connectors/GitLab.png',
      connected: false
    },
    {
      id: 3,
      name: 'BitBucket Cloud',
      image: '/images/apps/connectors/BitBucket.png',
      connected: false
    },
    {
      id: 4,
      name: 'Bitbucket Center',
      image: '/images/apps/connectors/BitBucket.png',
      connected: false
    },
    {
      id: 5,
      name: 'Azure Repos',
      image: '/images/apps/connectors/AzureRepos.png',
      connected: false
    },
    {
      id: 6,
      name: 'Azure TFS',
      image: '/images/apps/connectors/AzureTFS.png',
      connected: false
    },
    {
      id: 7,
      name: 'Gerrit Code',
      image: '/images/apps/connectors/GerritCode.png',
      connected: false
    },
    {
      id: 8,
      name: 'AWS Code Commit',
      image: '/images/apps/connectors/AwsCodeCommit.png',
      connected: false
    }
  ]

  const codeSecConnectors = [
    {
      id: 1,
      name: 'Fortify On Demand',
      image: '/images/apps/connectors/FortifyOD.png',
      connected: false
    },
    {
      id: 2,
      name: 'Fortify Security',
      image: '/images/apps/connectors/FortifyOD.png',
      connected: false
    },
    {
      id: 3,
      name: 'Github SAST',
      image: '/images/apps/connectors/GithubIcon.png',
      connected: false
    },
    {
      id: 4,
      name: 'GitLab SAST',
      image: '/images/apps/connectors/GitLab.png',
      connected: false
    },
    {
      id: 5,
      name: 'Sonar Cloud',
      image: '/images/apps/connectors/SonarCloud.png',
      connected: false
    },
    {
      id: 6,
      name: 'SonarQube',
      image: '/images/apps/connectors/SonarQube.png',
      connected: false
    },
    {
      id: 7,
      name: 'VeraCode',
      image: '/images/apps/connectors/VeraCode.png',
      connected: false
    }
  ]

  return (
    <>
      <div>
        <Typography variant='h4' className='ml-2'>
          Connectors
        </Typography>
      </div>
      <Typography variant='h6' className='ml-2 mt-7'>
        Source Control
      </Typography>
      <GithubModal open={modalOpen} onClose={handleCloseModal} />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {scmConnectors.map(connector => (
          <Grid item xs={12} sm={6} md={2} key={connector.id}>
            <ConnectorCard
              name={connector.name}
              image={connector.image}
              connected={connector.connected}
              handleClick={connector.handleClick}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant='h6' className='ml-2 mt-7'>
        Code Security (Static Analysis)
      </Typography>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {codeSecConnectors.map(connector => (
          <Grid item xs={12} sm={6} md={2} key={connector.id}>
            <ConnectorCard name={connector.name} image={connector.image} connected={connector.connected} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ConnectorsView
