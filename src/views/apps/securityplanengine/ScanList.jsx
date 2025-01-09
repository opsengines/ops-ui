'use client'

// MUI Imports
import React from 'react'

import { Box, Typography, Chip, Divider } from '@mui/material'

import VulnerabilityScanCard from '../securityplans/scanCard'

const ScanList = ({ scans }) => {
  return (
    <div>
      {scans?.map((scan, index) => {
        return <VulnerabilityScanCard scan={scan} key={index} />
      })}
    </div>
  )
}

export default ScanList
