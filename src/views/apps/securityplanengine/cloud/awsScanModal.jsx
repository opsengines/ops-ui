import React, { useState, useEffect } from 'react'

import { Box, Modal, Typography, CircularProgress, IconButton, LinearProgress } from '@mui/material'

import { CheckCircle, HourglassBottom, Close, ErrorOutline } from '@mui/icons-material'

import { getConnectorStatus } from '@/api/connectors'

import { prowlerCloudScan } from '@/api/cloud'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 20,
  borderRadius: '8px'
}

const token = localStorage.getItem('authToken')

const AWSValidationModal = ({ open, handleClose }) => {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(0)
  const [validationFailed, setValidationFailed] = useState(false)

  const getConnectorInfo = async () => {
    try {
      const data = await getConnectorStatus(token)

      return data
    } catch (error) {
      console.log(error)
    }
  }

  const scanProwler = async data => {
    try {
      const response = await prowlerCloudScan(token)

      return response
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let progressInterval

    if (open) {
      const processSteps = async () => {
        try {
          const data = await getConnectorInfo()

          if (data?.isAWSConnected) {
            setStep(2)
            const scanResponse = await scanProwler()

            if (scanResponse) {
              progressInterval = setInterval(() => {
                setProgress(oldProgress => {
                  const newProgress = oldProgress + 2

                  return newProgress >= 100 ? 100 : newProgress
                })
              }, 1000)

              await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate scan delay
              setStep(3)
            }
          } else {
            setValidationFailed(true)
            setStep(4)
          }
        } catch (error) {
          setValidationFailed(true)
          setStep(4)
        }
      }

      processSteps()
    } else {
      setStep(1) // Reset steps when modal is closed
      setProgress(0) // Reset progress bar
      setValidationFailed(false)
    }

    return () => clearInterval(progressInterval)
  }, [open])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='aws-validation-modal-title'
      aria-describedby='aws-validation-modal-description'
    >
      <Box sx={style}>
        <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <Close />
        </IconButton>

        {step === 1 && (
          <Box display='flex' flexDirection='column' alignItems='center'>
            <CircularProgress />
            <Typography mt={2} variant='h6'>
              Validating AWS Credentials...
            </Typography>
          </Box>
        )}

        {step === 2 && (
          <Box display='flex' flexDirection='column' alignItems='center'>
            <CheckCircle color='success' fontSize='large' />
            <Typography mt={2} variant='h6'>
              AWS Credentials Validated!
            </Typography>
          </Box>
        )}

        {step === 3 && (
          <Box display='flex' flexDirection='column' alignItems='center'>
            <HourglassBottom color='info' fontSize='large' />
            <Typography mt={2} variant='h6'>
              Scan is running...
            </Typography>
            <Typography mt={2} variant='body1'>
              <a href='/en/apps/securityengines/cloudsecurity/results'>
                <span style={{ color: '#1976d2', textDecoration: 'underline' }}>You can view the scan status here</span>
              </a>
            </Typography>
          </Box>
        )}

        {step === 4 && validationFailed && (
          <Box display='flex' flexDirection='column' alignItems='center'>
            <ErrorOutline color='error' fontSize='large' />
            <Typography mt={2} variant='h6' color='error'>
              AWS Credentials Validation Failed. Please Configure your AWS Credentials
            </Typography>
          </Box>
        )}

        {step > 1 && <LinearProgress className='mt-10' variant='determinate' value={progress} sx={{ mb: 2 }} />}
      </Box>
    </Modal>
  )
}

export default AWSValidationModal
