'use client'

import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Box, Button, Chip, Grid, TextField, Select, MenuItem, Tooltip } from '@mui/material'

// import ProductCard from '../ecommerce/products/list/ProductCard'

import Switch from '@mui/material/Switch'

import FormControlLabel from '@mui/material/FormControlLabel'

import { Info } from '@mui/icons-material'

import { layout } from './data'

const PoliciesViewPage = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = event => {
    event.stopPropagation()
    setIsChecked(event.target.checked)
  }

  return (
    <>
      <Grid container spacing={6}>
        {/* <Grid item xs={12}>
          <ProductCard />
        </Grid>
        <Grid item xs={12}>
          {layout?.map((category, index) => {
            return (
              <Accordion className='p-2 mb-2' style={{ borderLeft: '2px solid purple' }} key={index}>
                <AccordionSummary>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Typography sx={{ flexGrow: 1 }}>{category?.policyCategory}</Typography>
                    <div style={{ marginLeft: '15px', padding: '5px' }}>
                      <p>{category?.totalEnabled} Policies Enabled</p>
                    </div>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  {category?.policies?.map((policy, index) => {
                    return (
                      <Accordion
                        key={index}
                        className='p-1 mb-2'
                        style={{
                          borderLeft:
                            policy?.severity === 4
                              ? '4px solid green'
                              : policy?.severity === 3
                                ? '4px solid yellow'
                                : policy?.severity === 2
                                  ? '4px solid red'
                                  : '4px solid blue'
                        }}
                        sx={{
                          '&:hover': {
                            backgroundColor: '#312d4d', // Set a background color on hover
                            cursor: 'pointer' // Make the cursor a pointer to indicate interactiveness
                          }
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls='panel1a-content'
                          id='panel1a-header'
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <Typography sx={{ flexGrow: 1 }}>{policy?.policyName}</Typography>
                            <div style={{ marginLeft: '15px' }}>
                              <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={policy?.severity}
                                label='Severity'
                                size='small'
                                style={{ width: '80px' }}
                                onChange={() => console.log('hello')}
                                sx={{ minWidth: '120px' }}
                                onClick={e => e.stopPropagation()}
                              >
                                <MenuItem value={4}>Low</MenuItem>
                                <MenuItem value={3}>Medium</MenuItem>
                                <MenuItem value={2}>High</MenuItem>
                                <MenuItem value={1}>Critical</MenuItem>
                              </Select>
                              <Switch checked={policy?.enabled} onChange={handleChange} disabled={false} />
                            </div>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box sx={{ margin: 'auto' }}>
                            <form>
                              <Grid container spacing={3} className='mt-2'>
                                {policy?.configurations?.map((config, index) => {
                                  return (
                                    <Grid item xs={12} md={3} className='flex gap-2'>
                                      <Tooltip title={config?.tooltip}>
                                        <Info />
                                      </Tooltip>
                                      <TextField
                                        id='outlined-reviews-required'
                                        label={config?.label}
                                        value={config?.value}
                                        variant='outlined'
                                        fullWidth
                                      />
                                    </Grid>
                                  )
                                })}
                              </Grid>
                            </form>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    )
                  })}
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Grid> */}
      </Grid>
    </>
  )
}

export default PoliciesViewPage
