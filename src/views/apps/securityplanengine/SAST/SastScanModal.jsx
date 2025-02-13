'use client'

import { useEffect, useState } from 'react'

import {
  CardContent,
  RadioGroup,
  Radio,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Box,
  Button,
  Chip,
  Card,
  Typography,
  Drawer,
  Modal,
  IconButton,
  CircularProgress
} from '@mui/material'

import { Close } from '@mui/icons-material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const SastScanModal = ({ open, handleClose, type, scan, gitRepos }) => {
  const [selectedOption, setSelectedOption] = useState('All')
  const [selectedRepos, setSelectedRepos] = useState()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [allSelected, setAllSelected] = useState(false)

  const scanData = [
    { name: 'Dependencies scan', completed: `${selectedRepos?.length}/${selectedRepos?.length} repos complete` },
    { name: 'Exposed secrets scan', completed: `${selectedRepos?.length}/${selectedRepos?.length} repos complete` },
    { name: 'SAST', completed: `${selectedRepos?.length}/${selectedRepos?.length} repos complete` },
    {
      name: 'Infrastructure as code scan',
      completed: `${selectedRepos?.length}/${selectedRepos?.length} repos complete`
    },
    { name: 'Surface monitoring', completed: `${selectedRepos?.length}/${selectedRepos?.length} repos complete` },
    { name: 'License scan', completed: `${selectedRepos?.length}/${selectedRepos?.length} repos complete` }
  ]

  const handleCheckboxChange = (event, repoId) => {
    setSelectedRepos(prevSelectedRepos => {
      if (prevSelectedRepos.includes(repoId)) {
        return prevSelectedRepos.filter(id => id !== repoId)
      } else {
        return [...prevSelectedRepos, repoId]
      }
    })
  }

  const handleSelectall = value => {
    setAllSelected(value)

    if (value === true) {
      setSelectedRepos(gitRepos?.map(repo => repo.url)) // Select all repositories when 'All' is clicked
    } else {
      setSelectedRepos([])
    }
  }

  useEffect(() => {
    setSelectedRepos([])

    return () => {
      setPage(1)
      setLoading(true)
    }
  }, [open])

  return (
    <Modal open={open} onClose={() => handleClose(false)} style={{ top: '15%', left: '15%', width: '70vw' }}>
      <Card
        style={{
          width: '70%',
          margin: '20px auto',
          borderRadius: 8,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant='h6' fontWeight='bold'>
              Scan your code for vulnerabilities (SAST)
            </Typography>
            <IconButton onClick={() => handleClose(false)} sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>

          {page === 1 ? (
            <>
              <Typography variant='h6' style={{ marginTop: '20px', marginBottom: '20px' }}>
                This Action Will Run This Scan On All Selected Repositories. Please select the repositories from the
                table below.
              </Typography>
              <Box style={{ marginTop: '20px' }}>
                <TableContainer style={{ height: '250px', overflowY: 'auto' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell padding='checkbox'>
                          <Checkbox checked={allSelected} onChange={event => handleSelectall(event.target.checked)} />
                        </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>URL</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {gitRepos.map(repo => (
                        <TableRow key={repo.id}>
                          <TableCell padding='checkbox'>
                            <Checkbox
                              checked={selectedRepos?.includes(repo.url)}
                              onChange={event => handleCheckboxChange(event, repo.url)}
                            />
                          </TableCell>
                          <TableCell>{repo.name}</TableCell>
                          <TableCell>
                            <a href={repo.url} target='_blank' rel='noopener noreferrer'>
                              {repo.url}
                            </a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  scan(selectedRepos)
                  setPage(2)
                  setTimeout(() => {
                    setLoading(false)
                  }, 10000)
                }}
                style={{ marginTop: '20px' }}
                disabled={selectedOption !== 'All' && selectedRepos.length < 1}
              >
                Start Scan
              </Button>
            </>
          ) : (
            <Box>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Scanning..
              </Typography>
              {scanData.map((scan, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 1.5
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div className='flex gap-2'>
                      {loading ? <CircularProgress size={20} /> : <CheckCircleIcon color='success' />}
                      <Typography variant='body1'>{scan.name}</Typography>
                    </div>
                    <Typography variant='body2' color='text.secondary'>
                      {scan.completed}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Modal>
  )
}

export default SastScanModal
