'use client'

import React, { useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  Drawer,
  Box,
  Button,
  Divider
} from '@mui/material'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const data = [
  {
    location: 'RahilGandhi/blog-app-client',
    name: 'Insecure HTTP Requests in React',
    firstDetected: 'Dec 22, 2024',
    status: 'Open',
    type: 'Code',
    severity: 'H',
    details: {
      issue: 'Unencrypted request over HTTP detected.',
      securityTool: 'Semgrep',
      organization: 'RahilGandhi',
      repository: 'blog-app-client',
      branch: 'main',
      assetType: 'Repository',
      learnMore: 'Link 1',
      location: 'src/services.js'
    }
  },
  {
    location: 'RahilGandhi/blog-app-client',
    name: 'Insecure HTTP Requests in React',
    firstDetected: 'Dec 22, 2024',
    status: 'Open',
    type: 'Code',
    severity: 'H',
    details: {
      issue: 'Unencrypted request over HTTP detected.',
      securityTool: 'Semgrep',
      organization: 'RahilGandhi',
      repository: 'blog-app-client',
      branch: 'main',
      assetType: 'Repository',
      learnMore: 'Link 1',
      location: 'src/services.js'
    }
  }
]

const ResultsTable = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const handleRowClick = row => {
    setSelectedRow(row)
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
    setSelectedRow(null)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Location
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  First Detected
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Type
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Severity
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                onClick={() => handleRowClick(row)}
                sx={{
                  '&:hover': {
                    border: '2px solid #1976d2',
                    cursor: 'pointer'
                  },
                  transition: 'border 0.2s ease-in-out'
                }}
              >
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.firstDetected}</TableCell>
                <TableCell>
                  <Chip label={row.status} color='error' variant='outlined' style={{ fontWeight: 'bold' }} />
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  <Chip
                    label={row.severity}
                    color='error'
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: '#f44336',
                      color: 'white'
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Drawer anchor='right' open={drawerOpen} onClose={closeDrawer} PaperProps={{ sx: { width: '50vw', padding: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid gray',
            padding: '16px'
          }}
        >
          <Typography variant='h6' fontWeight='bold'>
            Findings Details
          </Typography>
          <IconButton onClick={closeDrawer} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            backgroundColor: '#2E2E3E',
            padding: '16px',
            borderRadius: '8px',
            marginTop: '10px'
          }}
        >
          <div className='flex items-center justify-between'>
            <Typography variant='body1' fontWeight='bold' color={'white'}>
              Finding Info
            </Typography>
            <div className='flex flex-row gap-3'>
              <Chip label='Open' sx={{ backgroundColor: '#1976d2' }} />
              <Chip label='High' sx={{ backgroundColor: 'red' }} />
            </div>
          </div>
          <Typography variant='h6' className='mt-7' sx={{ color: 'white' }}>
            <span className='border p-1 bg-gray-800' style={{ borderRadius: '10px' }}>
              CVE-2098:300
            </span>{' '}
            Insecure HTTP Requests In React With Axios
          </Typography>
          <Typography variant='body1' className='mt-4'>
            Unencrypted request over HTTP detected.
          </Typography>
          <div className='flex flex-row gap-2'>
            <Button variant='outlined' className='mt-10 p-2' style={{ color: 'gray', borderColor: 'gray' }}>
              Create ticket
            </Button>
            <Button variant='outlined' className='mt-10 p-2' style={{ color: '#959bee', borderColor: '#959bee' }}>
              Mark As Ignored
            </Button>
            <Button variant='outlined' className='mt-10 p-2'>
              AI Fix
            </Button>
          </div>
        </Box>

        <Divider className='mt-2 mb-2' />
        <Box
          sx={{
            backgroundColor: '#2E2E3E',
            padding: '16px',
            borderRadius: '8px'
          }}
        >
          <div className='flex items-center justify-between'>
            <Typography variant='body1' fontWeight='bold' color={'white'}>
              General Info
            </Typography>
          </div>

          <div className='mt-8 flex justify-between w-[100%]'>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Developers</Typography>
              <Typography variant='body1' className='mt-2' style={{ color: 'white' }}>
                2
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>File Count</Typography>
              <Typography variant='body1' className='mt-2' style={{ color: 'white' }}>
                60
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Repository Size</Typography>
              <Typography variant='body1' className='mt-2' style={{ color: 'white' }}>
                600.33Kb
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Branch</Typography>
              <Typography variant='body1' className='mt-2' style={{ color: 'white' }}>
                Main
              </Typography>
            </div>
          </div>

          <div className='mt-8 flex justify-between w-[70%]'>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Last Code Changes</Typography>
              <Typography variant='body1' className='mt-2' style={{ color: 'white' }}>
                12 Months Ago
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Creation Date</Typography>
              <Typography variant='body1' className='mt-2' style={{ color: 'white' }}>
                12 Months Ago
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Access Level</Typography>
              <Typography variant='body1' className='mt-2' style={{ color: 'white' }}>
                Public
              </Typography>
            </div>
          </div>
        </Box>

        <Box
          sx={{
            backgroundColor: '#2E2E3E',
            padding: '16px',
            borderRadius: '8px',
            marginTop: '10px'
          }}
        >
          <div className='flex items-center justify-between'>
            <Typography variant='body1' fontWeight='bold' color={'white'}>
              About This Issue
            </Typography>
          </div>

          <div className='flex flex-row mt-5 gap-5'>
            <Typography variant='body1'>File Name : </Typography>
            <p style={{ color: '#1976d2' }}>./index.js</p>
          </div>
        </Box>
      </Drawer>
    </>
  )
}

export default ResultsTable
