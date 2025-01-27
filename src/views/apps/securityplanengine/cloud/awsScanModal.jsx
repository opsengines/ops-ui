import React, { useState, useEffect } from 'react'

import { Box, Modal, Typography, CircularProgress, IconButton } from '@mui/material'

import { CheckCircle, HourglassBottom, Close } from '@mui/icons-material'

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

const AWSValidationModal = ({ open, handleClose }) => {
  const [step, setStep] = useState(1)

  useEffect(() => {
    if (open) {
      const processSteps = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate validation delay

        setStep(2)

        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate scan delay

        setStep(3)
      }

      processSteps()
    } else {
      setStep(1) // Reset steps when modal is closed
    }
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
            <Typography mt={2} variant='h6'>
              You can view the scan status and result here
            </Typography>
          </Box>
        )}
      </Box>
    </Modal>
  )
}

export default AWSValidationModal
