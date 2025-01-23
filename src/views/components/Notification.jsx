'use client'

import { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'

const Notification = ({ message, open }) => {
  const [notification, setShowNotification] = useState(false)

  useEffect(() => {
    if (open) {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }, [open])

  return (
    <>
      {notification && (
        <Box
          sx={{
            position: 'fixed',
            top: 5,
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
          <Typography variant='body2'>{message}</Typography>
        </Box>
      )}
    </>
  )
}

export default Notification
