'use client'

import React, { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { Typography, Grid, Skeleton, Modal } from '@mui/material'

import GithubModal from './GithubConnector'

import ConnectorCard from './ConnectorCard'

import { getConnectorStatus } from '@/api/connectors'

import AwsConnector from './AwsConnector'

import SecurityReport from '@/views/components/AIFix'

const ConnectorsView = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [connectorData, setConnectorData] = useState()
  const [loading, setLoading] = useState(true)
  const [awsModal, setAwsModal] = useState(false)
  const [aiModal, setAiModal] = useState(false)

  const handleOpenModal = () => setModalOpen(true)

  const handleCloseModal = () => setModalOpen(false)

  const openAwsModal = () => {
    setAwsModal(true)
  }

  const closeAwsModal = () => setAwsModal(false)

  const token = localStorage.getItem('authToken')

  const getConnectorInfo = async () => {
    try {
      const data = await getConnectorStatus(token)

      setConnectorData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getConnectorInfo(),
    queryKey: ['movies'] //Array according to Documentation
  })

  // useEffect(() => {
  //   getConnectorInfo()
  // }, [])

  const scmConnectors = [
    {
      id: 1,
      name: 'GitHub',
      image: '/images/apps/connectors/GithubIcon.png',
      connected: connectorData?.isGitHubConnected,
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
    // {
    //   id: 1,
    //   name: 'Fortify On Demand',
    //   image: '/images/apps/connectors/FortifyOD.png',
    //   connected: false
    // },
    // {
    //   id: 2,
    //   name: 'Fortify Security',
    //   image: '/images/apps/connectors/FortifyOD.png',
    //   connected: false
    // },
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
    }

    // {
    //   id: 5,
    //   name: 'Sonar Cloud',
    //   image: '/images/apps/connectors/SonarCloud.png',
    //   connected: false
    // },
    // {
    //   id: 6,
    //   name: 'SonarQube',
    //   image: '/images/apps/connectors/SonarQube.png',
    //   connected: false
    // },
    // {
    //   id: 7,
    //   name: 'VeraCode',
    //   image: '/images/apps/connectors/VeraCode.png',
    //   connected: false
    // }
  ]

  const secretsScans = [
    // {
    //   id: 1,
    //   name: 'Fortify On Demand',
    //   image: '/images/apps/connectors/FortifyOD.png',
    //   connected: false
    // },
    // {
    //   id: 2,
    //   name: 'Fortify Center',
    //   image: '/images/apps/connectors/FortifyOD.png',
    //   connected: false
    // },
    {
      id: 3,
      name: 'Github Detection',
      image: '/images/apps/connectors/GithubIcon.png',
      connected: false
    },
    {
      id: 4,
      name: 'Gitlab Detection',
      image: '/images/apps/connectors/Gitlab.png',
      connected: false
    }
  ]

  const sbomConnector = [
    // {
    //   id: 1,
    //   name: 'FOSSA',
    //   image: '/images/apps/connectors/Fossa.svg',
    //   connected: false
    // }
  ]

  const cicdActions = [
    {
      id: 1,
      name: 'Github Actions',
      image: '/images/apps/connectors/GithubIcon.png',
      connected: false
    },
    {
      id: 2,
      name: 'Gitlab CI/CD',
      image: '/images/apps/connectors/Gitlab.png',
      connected: false
    },
    {
      id: 2,
      name: 'Jenkins',
      image: '/images/apps/connectors/Jenkins.png',
      connected: false
    },
    {
      id: 3,
      name: 'Teamcity',
      image: '/images/apps/connectors/Teamcity.png',
      connected: false
    },
    {
      id: 4,
      name: 'Travis CI',
      image: '/images/apps/connectors/TravisCI.png',
      connected: false
    }

    // {
    //   id: 5,
    //   name: 'Drone CI',
    //   image: '/images/apps/connectors/Fossa.svg',
    //   connected: false
    // }
  ]

  const registryConnectors = [
    {
      id: 1,
      name: 'Amazon ECR',
      image: '/images/apps/connectors/AmazonEcr.png',
      connected: false
    },
    {
      id: 2,
      name: 'Azure Container',
      image: '/images/apps/connectors/AzureContainer.png',
      connected: false
    },
    {
      id: 3,
      name: 'Docker',
      image: '/images/apps/connectors/Docker.png',
      connected: false
    },
    {
      id: 4,
      name: 'Gitlab Container',
      image: '/images/apps/connectors/Gitlab.png',
      connected: false
    },
    {
      id: 5,
      name: 'Google Artifactory',
      image: '/images/apps/connectors/GoogleArtifact.png',
      connected: false
    },
    {
      id: 6,
      name: 'Google Container',
      image: '/images/apps/connectors/GoogleArtifact.png',
      connected: false
    },
    {
      id: 7,
      name: 'Harbor',
      image: '/images/apps/connectors/Harbor.png',
      connected: false
    },
    {
      id: 7,
      name: 'JFrog Artifactory',
      image: '/images/apps/connectors/Jfrog.png',
      connected: false
    },
    {
      id: 7,
      name: 'Nexus Container',
      image: '/images/apps/connectors/Nexus.png',
      connected: false
    }
  ]

  const cloudConnectors = [
    {
      id: 1,
      name: 'AWS',
      image: '/images/apps/connectors/Aws.png',
      connected: connectorData?.isAWSConnected,
      handleClick: openAwsModal
    },
    {
      id: 2,
      name: 'Azure',
      image: '/images/apps/connectors/Azure.png',
      connected: false
    },
    {
      id: 3,
      name: 'GCP',
      image: '/images/apps/connectors/GCP.png',
      connected: false
    }
  ]

  const kubernetesConnectors = [
    {
      id: 1,
      name: 'AKS',
      image: '/images/apps/connectors/AKS.png',
      connected: false,
      handleClick: openAwsModal
    },
    {
      id: 2,
      name: 'EKS',
      image: '/images/apps/connectors/EKS.png',
      connected: false
    },
    {
      id: 3,
      name: 'GKE',
      image: '/images/apps/connectors/GKE.png',
      connected: false
    }
  ]

  return (
    <>
      {loading ? (
        <Skeleton variant='rounded' width={'100vw'} height={'90vh'} />
      ) : (
        <div>
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
          <Typography variant='h6' className='ml-2 mt-7'>
            Secret/PII Scan
          </Typography>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {secretsScans.map(connector => (
              <Grid item xs={12} sm={6} md={2} key={connector.id}>
                <ConnectorCard name={connector.name} image={connector.image} connected={connector.connected} />
              </Grid>
            ))}
          </Grid>

          {/* <Typography variant='h6' className='ml-2 mt-7'>
            SBOM
          </Typography>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {sbomConnector.map(connector => (
              <Grid item xs={12} sm={6} md={2} key={connector.id}>
                <ConnectorCard name={connector.name} image={connector.image} connected={connector.connected} />
              </Grid>
            ))}
          </Grid> */}

          <Typography variant='h6' className='ml-2 mt-7'>
            CI/CD
          </Typography>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {cicdActions.map(connector => (
              <Grid item xs={12} sm={6} md={2} key={connector.id}>
                <ConnectorCard name={connector.name} image={connector.image} connected={connector.connected} />
              </Grid>
            ))}
          </Grid>
          <Typography variant='h6' className='ml-2 mt-7'>
            Artifact
          </Typography>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {registryConnectors.map(connector => (
              <Grid item xs={12} sm={6} md={2} key={connector.id}>
                <ConnectorCard name={connector.name} image={connector.image} connected={connector.connected} />
              </Grid>
            ))}
          </Grid>
          <Typography variant='h6' className='ml-2 mt-7'>
            Cloud Deployment
          </Typography>
          <AwsConnector open={awsModal} onClose={closeAwsModal} />
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {cloudConnectors.map(connector => (
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
            Kubernetes
          </Typography>
          <AwsConnector open={awsModal} onClose={closeAwsModal} />
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {kubernetesConnectors.map(connector => (
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
        </div>
      )}
    </>
  )
}

export default ConnectorsView
