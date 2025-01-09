'use client'

// MUI Imports
import React from 'react'

import { Card, Typography, Box, Button, CircularProgress, Link } from '@mui/material'

const SecurityPlansHeader = ({ data }) => {
  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: '#322d4b',
        color: 'white',
        borderRadius: 2,
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        gap: 2
      }}
    >
      {/* Header Section */}
      <Box display={'flex'} flexDirection={'column'}>
        <Box>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            {data?.title}
          </Typography>
          {/* <Box display='flex' gap={1} mt={3}>
            <Typography
              sx={{
                backgroundColor: '#2E2E3E',
                color: '#81A8FF',
                borderRadius: 1,
                border: '1px solid #81A8FF',
                px: 1,
                py: 0.5,
                fontSize: 12
              }}
            >
              AppSec
            </Typography>
            <Typography
              sx={{
                backgroundColor: '#2E2E3E',
                color: '#B580FF',
                borderRadius: 1,
                border: '1px solid #B580FF',
                px: 1,
                py: 0.5,
                fontSize: 12
              }}
            >
              Beginner
            </Typography>
          </Box> */}
          <Typography
            sx={{
              color: '#B0B0C3',
              fontSize: 14,
              marginTop: 1
            }}
          >
            Version: <strong>0.1</strong>
          </Typography>
        </Box>
        <Typography variant='body2' className='mt-5 mb-5' sx={{ color: '#B0B0C3' }}>
          The Application Security Plan is designed as a foundational security guide for beginners, encompassing
          essential tools like Static Application Security Testing (SAST), Software Composition Analysis (SCA), and
          Secret Detection to establish a strong initial defense against common security vulnerabilities.{' '}
          <Link href='#' underline='hover' sx={{ color: '#81A8FF', fontWeight: 'bold' }}>
            Learn More
          </Link>
        </Typography>
      </Box>

      {/* Statistics Section */}
      <Box display='flex' justifyContent='space-between' alignItems='center' mt={2} gap={2}>
        {/* Score Metric */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100px'
          }}
        >
          <Box position='relative' display='inline-flex'>
            <CircularProgress variant='determinate' value={0} sx={{ color: '#4B4BFF', width: 50, height: 50 }} />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Typography variant='caption' component='div' fontWeight='bold'>
                0%
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              color: '#B0B0C3',
              fontSize: 12,
              marginTop: 1
            }}
          >
            Score
          </Typography>
        </Box>

        {/* Other Metrics */}
        {[
          { label: 'Controls', value: 4 },
          { label: 'Activated', value: 1 },
          { label: 'Passed', value: 0, color: '#81FF81' },
          { label: 'Failed', value: 0, color: '#FF8181' }
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '10px 0',
              width: '100px',
              backgroundColor: '#2E2E3E',
              borderRadius: 2
            }}
          >
            <Typography variant='h6' fontWeight='bold' sx={{ color: item.color || 'white' }}>
              {item.value}
            </Typography>
            <Typography sx={{ color: '#B0B0C3', fontSize: 12 }}>{item.label}</Typography>
          </Box>
        ))}

        {/* Logo */}
      </Box>
    </Card>
  )
}

export default SecurityPlansHeader
