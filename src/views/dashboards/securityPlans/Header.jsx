'use client'

// MUI Imports
import React from 'react'

import { Card, Typography, Box, Button, CircularProgress, Link } from '@mui/material'

const Header = () => {
  return (
    <Card
      sx={{
        width: '98%',
        marginLeft: '2%',
        borderRadius: 2,
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 2
      }}
    >
      {/* Header Section */}
      <Box display={'flex'} flexDirection={'column'}>
        <Box>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            Security Blueprints
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
          {/* <Typography
            sx={{
              color: '#B0B0C3',
              fontSize: 14,
              marginTop: 1
            }}
          >
            Version: <strong>0.1</strong>
          </Typography> */}
        </Box>
        <Typography variant='body2' className='mt-5 mb-5'>
          The Security Bluepints are designed as a foundational security guide, to establish a strong initial defense
          against common security vulnerabilities.{' '}
        </Typography>
      </Box>

      {/* Statistics Section */}
      <Box display='flex' justifyContent='space-between' alignItems='center' mt={2} gap={2}>
        {/* Other Metrics */}

        {[
          { label: 'OE Blueprints', value: 12, color: '#81FF81' },
          { label: 'Custom Blueprints', value: 0, color: '#FF8181' }
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '10px 0',
              width: '150px',
              borderRadius: 2
            }}
          >
            <Typography variant='h6' fontWeight='bold' sx={{ color: item.color || 'white' }}>
              {item.value}
            </Typography>
            <Typography sx={{ fontSize: 12 }}>{item.label}</Typography>
          </Box>
        ))}

        {/* Logo */}
      </Box>
    </Card>
  )
}

export default Header
