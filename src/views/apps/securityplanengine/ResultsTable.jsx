'use client'

import React, { useEffect, useState } from 'react'

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
  Divider,
  Skeleton,
  Tooltip
} from '@mui/material'

import IconButton from '@mui/material/IconButton'

import CloseIcon from '@mui/icons-material/Close'

import { semgrepScanInfo } from '@/api/sast'

const ResultsTable = ({ type }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [data, setData] = useState([])
  const [pageLoading, setPageLaoding] = useState(true)
  const [drawerLoading, setDrawerLoading] = useState(true)

  const closeDrawer = () => {
    setDrawerLoading(true)
    setDrawerOpen(false)
    setSelectedRow(null)
  }

  const authToken = localStorage.getItem('authToken')

  function combineResultsWithMetadata(data) {
    let combinedResults = []

    data.forEach(item => {
      item.results.forEach(result => {
        const enrichedResult = {
          ...result,
          scan_category: item.scan_category,
          scan_subcategory: item.scan_subcategory,
          scan_date: item.scan_date,
          repository: item.repository,
          status: item.status
        }

        combinedResults.push(enrichedResult)
      })
    })

    return combinedResults
  }

  function generateGitHubLineLink(repoUrl, filename, lineNumber) {
    if (!repoUrl || !filename || !lineNumber) {
      return
    }

    // Ensure the repo URL ends with a trailing slash
    const formattedRepoUrl = repoUrl.endsWith('/') ? repoUrl : `${repoUrl}/`

    const filePath = `blob/main/${filename}#L${lineNumber}`

    return `${formattedRepoUrl}${filePath}`
  }

  const getScanResults = async () => {
    let params = { scan_category: type }

    try {
      const res = await semgrepScanInfo(params, authToken)
      const combData = combineResultsWithMetadata(res?.data?.scans)

      setPageLaoding(false)
      setData(combData)
    } catch (error) {
      console.log(error)
    }
  }

  const getScanDetails = async params => {
    try {
      const res = await semgrepScanInfo(params, authToken)

      setDrawerLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRowClick = row => {
    setSelectedRow(row)
    setDrawerOpen(true)
  }

  useEffect(() => {
    getScanResults()
  }, [])

  return (
    <>
      {pageLoading ? (
        <Skeleton variant='rounded' width={'79vw'} height={'90vh'} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='subtitle1' fontWeight='bold'>
                    Repo Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='subtitle1' fontWeight='bold'>
                    Vulnerability
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='subtitle1' fontWeight='bold'>
                    Scan Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='subtitle1' fontWeight='bold'>
                    Status
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='subtitle1' fontWeight='bold'>
                    Scan Date
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
                  <TableCell>{row.repository.split('github.com')[1]}</TableCell>
                  <Tooltip title={row.extra.message}>
                    <TableCell>
                      {row.extra.message.split(' ').slice(0, 10).join(' ') +
                        (row.extra.message.split(' ').length > 10 ? '...' : '')}
                    </TableCell>
                  </Tooltip>
                  <TableCell>{row.scan_subcategory}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status === 'completed' ? 'Completed' : 'Ongoing'}
                      color={row.status === 'completed' ? 'success' : 'error'}
                      variant='outlined'
                      style={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  <TableCell>{row.scan_date.split('T')[0]}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.extra.metadata.confidence}
                      color={
                        row.extra.metadata.confidence === 'MEDIUM'
                          ? 'warning'
                          : row.extra.metadata.confidence === 'LOW'
                            ? 'info'
                            : 'secondary'
                      }
                      style={{
                        fontWeight: 'bold',
                        backgroundColor: `${
                          row.extra.metadata.confidence === 'MEDIUM'
                            ? '#ffc300'
                            : row.extra.metadata.confidence === 'LOW'
                              ? 'green'
                              : 'red'
                        }`,
                        color: 'white'
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {data?.length < 1 && <Typography variant='h6'>No Data Available</Typography>}

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
            {/* <img src='/images/apps/connectors/GithubIcon.png' alt='GitHub Icon' w/>{' '} */}
            <Typography variant='body1' fontWeight='bold' color={'white'}>
              Finding Info
            </Typography>
            <div className='flex flex-row gap-3'>
              <Chip label={selectedRow?.scan_category} sx={{ backgroundColor: '#1976d2' }} />
              <Chip label={selectedRow?.extra?.metadata.confidence} sx={{ backgroundColor: 'red' }} />
            </div>
          </div>
          <Typography variant='h6' className='mt-7' sx={{ color: 'white' }}>
            <span className='border p-1 bg-gray-800' style={{ borderRadius: '10px' }}>
              {selectedRow?.extra?.metadata?.cwe[0]?.split(':')[0]}
            </span>{' '}
            {selectedRow?.extra?.message}
          </Typography>
          <Typography variant='body1' className='mt-4'>
            {selectedRow?.check_id}
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
            <Typography variant='body1'>File Path : </Typography>
            <a
              href={generateGitHubLineLink(
                selectedRow?.repository,
                selectedRow?.path.split('/').slice(8).join('/'),
                selectedRow?.start?.line
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p style={{ color: '#1976d2', textDecoration: 'underline' }}>
                {selectedRow?.path.split('/').slice(7).join('/')}
              </p>
            </a>
          </div>

          <div className='flex flex-row mt-5 gap-5'>
            <Typography variant='body1'>Line : </Typography>
            <p style={{ color: '#1976d2' }}>
              {selectedRow?.start?.line}:{selectedRow?.start?.col}
            </p>
          </div>
        </Box>
      </Drawer>
    </>
  )
}

export default ResultsTable
