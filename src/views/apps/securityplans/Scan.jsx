'use client'

// MUI Imports
import React from 'react'

import { Box, Typography, Chip, Divider } from '@mui/material'

import VulnerabilityScanCard from './scanCard'

const ScanList = ({ data }) => {
  return (
    <div>
      {data?.map((scan, index) => {
        return <VulnerabilityScanCard scan={scan} key={index} />
      })}
    </div>
  )
}

export default ScanList
