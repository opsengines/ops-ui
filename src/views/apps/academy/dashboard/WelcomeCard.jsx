'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { lighten, darken, useTheme } from '@mui/material/styles'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import { useState } from 'react'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars

const WelcomeCard = () => {
  // Hooks
  const theme = useTheme()
  const belowMdScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className='flex max-md:flex-col md:items-center gap-6 plb-5 ml-10 mt-10'>
      <div>
        <div className='flex items-baseline gap-1 mbe-2'>
          <Typography variant='h4'>Hello There User,</Typography>
        </div>
        <div className='mbe-4'>
          <Typography>To Start Performing Security Scans</Typography>
          <Typography>please connect your github account</Typography>
        </div>
        {/* <div className='flex flex-wrap max-md:flex-col justify-between gap-6'>
          {data.map((item, i) => (
            <div key={i} className='flex gap-4'>
              <CustomAvatar variant='rounded' skin='light' size={54} color={item.color}>
                {item.icon}
              </CustomAvatar>
              <div>
                <Typography className='font-medium'>{item.title}</Typography>
                <Typography variant='h4' color={`${item.color}.main`}>
                  {item.value}
                </Typography>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default WelcomeCard
