'useClient'

'use client'

// MUI Imports
import React from 'react'

import { Box, Typography, Chip, Divider } from '@mui/material'

import VulnerabilityScanCard from './scan'

const ScanList = () => {
  const scans = [
    {
      id: 'OE-001',
      title: 'Scan your code for vulnerabilities (SAST)',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: 'Scan code for hard-coded secrets',
      tools: 'Gitleaks',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: 'Scan your code dependencies for vulnerabilities (SCA)',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: 'Generate a Software Bill of Materials (SBOM)',
      tools: 'Syft',
      active: false,
      findings: '0'
    }
  ]

  return (
    <div>
      {scans?.map((scan, index) => {
        return <VulnerabilityScanCard scan={scan} key={index} />
      })}
    </div>
  )
}

export default ScanList
