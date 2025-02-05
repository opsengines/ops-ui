import React, { useEffect, useState } from 'react'

import { Modal, Box, CircularProgress, LinearProgress, Typography, IconButton } from '@mui/material'

import { Close } from '@mui/icons-material'

const LoadingModal = ({ open, handleClose }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (open) {
      setProgress(0)

      const interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 100 : prev + 10))
      }, 500)

      return () => clearInterval(interval)
    }
  }, [open])

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          height: 250,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
          borderRadius: 2,
          border: 'none'
        }}
      >
        <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <Close />
        </IconButton>
        <div className='mt-14'>
          <CircularProgress />
          <Typography variant='h6' sx={{ mt: 5 }}>
            Scan Is Running
          </Typography>
          <LinearProgress variant='determinate' value={progress} sx={{ mt: 5 }} />
        </div>
      </Box>
    </Modal>
  )
}

export default LoadingModal
