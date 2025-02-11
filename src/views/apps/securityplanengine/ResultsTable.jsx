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
  Tooltip,
  Grid,
  Select,
  TextField,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material'

import IconButton from '@mui/material/IconButton'

import CloseIcon from '@mui/icons-material/Close'

import { semgrepScanInfo } from '@/api/sast'
import SecurityReport from '@/views/components/AIFix'

const ResultsTable = ({ type }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [data, setData] = useState([])
  const [pageLoading, setPageLaoding] = useState(true)
  const [drawerLoading, setDrawerLoading] = useState(true)
  const [aiFixModal, setAiFixModal] = useState(false)

  const [filters, setFilters] = useState({
    repoName: '',
    scanId: '',
    status: '',
    severity: ''
  })

  const closeDrawer = () => {
    setDrawerLoading(true)
    setDrawerOpen(false)
    setSelectedRow(null)
  }

  const authToken = localStorage.getItem('authToken')

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    const matchedItems = data.filter(item => item.repository.includes(filters.repoName))
  }

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

  const handleRowClick = row => {
    console.log(row)
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
        <div>
          <Grid container spacing={2} style={{ marginBottom: '16px' }}>
            <Grid item xs={12} sm={3} md={3}>
              <TextField
                fullWidth
                label='Repository Name'
                variant='outlined'
                value={filters.repoName}
                onChange={e => handleFilterChange('repoName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
              <FormControl fullWidth>
                <InputLabel id='scan-id-label'>Scan ID</InputLabel>
                <Select
                  labelId='scan-id-label'
                  value={filters.scanId}
                  onChange={e => handleFilterChange('scanId', e.target.value)}
                  label='Scan ID'
                >
                  <MenuItem value=''>None</MenuItem>
                  <MenuItem value='SAST-001'>SAST-001</MenuItem>
                  <MenuItem value='SAST-002'>SAST-002</MenuItem>
                  <MenuItem value='SAST-003'>SAST-003</MenuItem>
                  <MenuItem value='SAST-004'>SAST-004</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
              <FormControl fullWidth>
                <InputLabel id='status-label'>Status</InputLabel>
                <Select
                  labelId='status-label'
                  value={filters.status}
                  onChange={e => handleFilterChange('status', e.target.value)}
                  label='Status'
                >
                  <MenuItem value=''>None</MenuItem>
                  <MenuItem value='Completed'>Completed</MenuItem>
                  <MenuItem value='In Progress'>In Progress</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
              <FormControl fullWidth>
                <InputLabel id='severity-label'>Severity</InputLabel>
                <Select
                  labelId='severity-label'
                  value={filters.severity}
                  onChange={e => handleFilterChange('severity', e.target.value)}
                  label='Severity'
                >
                  <MenuItem value=''>None</MenuItem>
                  <MenuItem value='LOW'>Low</MenuItem>
                  <MenuItem value='MEDIUM'>Medium</MenuItem>
                  <MenuItem value='HIGH'>High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant='subtitle1' fontWeight='bold'>
                      Scan Id
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='subtitle1' fontWeight='bold'>
                      Repo Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='subtitle1' fontWeight='bold'>
                      Description
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='subtitle1' fontWeight='bold' className='text-center'>
                      Severity
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='subtitle1' fontWeight='bold'>
                      Scan Date
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='subtitle1' fontWeight='bold'>
                      Scan Time
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='subtitle1' fontWeight='bold' className='text-center'>
                      Status
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
                    <TableCell>{row.scan_subcategory}</TableCell>
                    <TableCell>{row.repository.split('github.com')[1]}</TableCell>
                    <Tooltip title={row.extra.message}>
                      <TableCell>
                        {row.extra.message.split(' ').slice(0, 10).join(' ') +
                          (row.extra.message.split(' ').length > 10 ? '...' : '')}
                      </TableCell>
                    </Tooltip>
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
                          width: '100px',
                          color: 'white'
                        }}
                      />
                    </TableCell>

                    <TableCell>{row.scan_date.split('T')[0]}</TableCell>
                    <TableCell className='text-center'>{row.scan_date.split('T')[1].split('.')[0]}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status === 'completed' ? 'Completed' : 'Ongoing'}
                        color={row.status === 'completed' ? 'success' : 'error'}
                        variant='outlined'
                        style={{ fontWeight: 'bold' }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      {data?.length < 1 && <Typography variant='h6'>No Data Available</Typography>}
      <SecurityReport open={aiFixModal} handleClose={() => setAiFixModal(false)} data={selectedRow} />
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
            Vulnerability Details
          </Typography>
          <IconButton onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            padding: '16px',
            borderRadius: '8px',
            marginTop: '10px'
          }}
        >
          <div className='flex items-center justify-between'>
            {/* <img src='/images/apps/connectors/GithubIcon.png' alt='GitHub Icon' w/>{' '} */}
            <Typography variant='body1' fontWeight='bold'>
              Finding Info
            </Typography>
            <div className='flex flex-row gap-3'>
              <Chip label={selectedRow?.extra?.metadata.confidence} sx={{ backgroundColor: 'red' }} />
            </div>
          </div>
          <Typography variant='h6' className='mt-7'>
            <span className='border p-1' style={{ borderRadius: '10px' }}>
              {selectedRow?.extra?.metadata?.cwe[0]?.split(':')[0]}
            </span>{' '}
            {selectedRow?.extra?.message}
          </Typography>
          <Typography variant='body1' className='mt-4'>
            {selectedRow?.check_id}
          </Typography>
          <div className='flex flex-row gap-2'>
            <Button
              variant='outlined'
              className='mt-10 p-2'
              style={{ color: 'white', borderColor: 'gray', backgroundColor: 'gray' }}
            >
              Create ticket
            </Button>
            <Button variant='outlined' className='mt-10 p-2' style={{ color: '#959bee', borderColor: '#959bee' }}>
              Mark As Ignored
            </Button>
            <Button variant='contained' className='mt-10 p-2' style={{ color: 'white', backgroundColor: 'purple' }}>
              Mark As Ignored
            </Button>
            <Button
              variant='outlined'
              className='mt-10 p-2'
              onClick={() => {
                setAiFixModal(true)
              }}
            >
              AI Fix
            </Button>
          </div>
        </Box>

        <Divider className='mt-2 mb-2' />
        <Box
          sx={{
            padding: '16px',
            borderRadius: '8px'
          }}
        >
          <div className='flex items-center justify-between'>
            <Typography variant='body1' fontWeight='bold'>
              General Info
            </Typography>
          </div>

          <div className='mt-8 flex justify-between w-[100%]'>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Developers</Typography>
              <Typography variant='body1' className='mt-2'>
                2
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>File Count</Typography>
              <Typography variant='body1' className='mt-2'>
                60
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Repository Size</Typography>
              <Typography variant='body1' className='mt-2'>
                600.33Kb
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Branch</Typography>
              <Typography variant='body1' className='mt-2'>
                Main
              </Typography>
            </div>
          </div>

          <div className='mt-8 flex justify-between w-[70%]'>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Last Code Changes</Typography>
              <Typography variant='body1' className='mt-2'>
                12 Months Ago
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Creation Date</Typography>
              <Typography variant='body1' className='mt-2'>
                12 Months Ago
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Access Level</Typography>
              <Typography variant='body1' className='mt-2'>
                Public
              </Typography>
            </div>
          </div>
        </Box>

        <Box
          sx={{
            padding: '16px',
            borderRadius: '8px',
            marginTop: '10px'
          }}
        >
          <div className='flex items-center justify-between'>
            <Typography variant='body1' fontWeight='bold'>
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
