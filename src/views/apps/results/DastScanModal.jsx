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
  CircularProgress,
  Grid,
  TextField
} from '@mui/material'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import { Close, HourglassBottom } from '@mui/icons-material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { dastScanner } from '@/api/dast'

const DastScanModal = ({ open, handleClose }) => {
  const [apiUrl, setApiUrl] = useState('')
  const [apiType, setApiType] = useState('openapi')
  const [complete, setComplete] = useState(false)
  const token = localStorage.getItem('authToken')

  const handleDastScan = () => {
    let data = {
      target_url: apiUrl,
      format_i: apiType
    }

    dastScanner(data, token).then(res => res?.message === 'Scan started' && setComplete(true))

    setApiType('openapi')

    setApiUrl('')
  }

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose(false)
        setComplete(false)
      }}
      style={{ top: '15%', left: '15%', width: '70vw' }}
    >
      <Card
        style={{
          width: '70%',
          margin: '20px auto',
          borderRadius: 8,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        {!complete ? (
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant='h6' fontWeight='bold'>
                Scan your API for vulnerabilities (DAST)
              </Typography>
              <IconButton onClick={() => handleClose(false)} sx={{ color: 'white' }}>
                <Close />
              </IconButton>
            </Box>
            <Grid container spacing={3} className='mt-2'>
              <Grid item xs={12} md={12} className='flex gap-2'>
                <TextField
                  id='outlined-reviews-required'
                  label={'API URL'}
                  value={apiUrl}
                  variant='outlined'
                  fullWidth
                  onChange={e => setApiUrl(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12} className='flex gap-2 mt-2'>
                <FormControl>
                  <FormLabel id='demo-row-radio-buttons-group-label'>API Type</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                    onChange={e => setApiType(e.target.value)}
                    value={apiType}
                  >
                    <FormControlLabel value='openapi' control={<Radio />} label='OpenApi' />
                    <FormControlLabel value='soap ' control={<Radio />} label='SOAP' />
                    <FormControlLabel value='graphql' control={<Radio />} label='GraphQL' />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} className='flex gap-2'>
                <Button
                  disabled={apiType === '' || apiUrl === ''}
                  variant='contained'
                  color='primary'
                  onClick={() => handleDastScan()}
                >
                  Scan
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        ) : (
          <CardContent sx={{ height: '300px' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant='h6' fontWeight='bold'>
                Scan your API for vulnerabilities (DAST)
              </Typography>
              <IconButton onClick={() => handleClose(false)} sx={{ color: 'white' }}>
                <Close />
              </IconButton>
            </Box>
            <div className='mt-[80px] ml-[45%] flex flex-col'>
              <HourglassBottom color='info' fontSize='large' />
              <p style={{ marginLeft: '-30px', marginTop: '5px' }}>Scan Is Running..</p>
            </div>
          </CardContent>
        )}
      </Card>
    </Modal>
  )
}

export default DastScanModal
