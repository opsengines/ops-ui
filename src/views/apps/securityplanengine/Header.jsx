'use client'

// MUI Imports
import React from 'react'

import { Card, Typography, Box, Button, CircularProgress, Link } from '@mui/material'

const Header = ({ data }) => {
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        gap: 2
      }}
    >
      {/* Header Section */}
      <Box display={'flex'} flexDirection={'column'}>
        <Box>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            {data.title}
          </Typography>
        </Box>
        <Typography variant='body2' className='mt-5 mb-5' sx={{ color: '#B0B0C3' }}>
          The Security Plans Engine is designed as a foundational security guide for beginners, encompassing essential
          tools like Static Application Security Testing (SAST), Software Composition Analysis (SCA), and Secret
          Detection to establish a strong initial defense against common security vulnerabilities.{' '}
        </Typography>
      </Box>

      {/* Statistics Section */}
    </Card>
  )
}

export default Header
