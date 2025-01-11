'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'
import LinearProgress from '@mui/material/LinearProgress'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'

import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import axios from 'axios'

import { Box, Button, Chip, Drawer } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

// Column Definitions
const columnHelper = createColumnHelper()

const ComplianceTable = ({ courseData, onClick = f => f }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[courseData])
  const [globalFilter, setGlobalFilter] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    github_username: '',
    github_token: '',
    github_url: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [response, setResponse] = useState('')

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const toggleDrawer = open => () => {
    console.log('table drawer triggered')
    setIsOpen(open)
  }

  const handleSubmit = () => {
    console.log('Submitted')
  }

  // Hooks
  const { lang: locale } = useParams()

  const columns = useMemo(
    () => [
      columnHelper.accessor('complianceId', {
        header: 'ID',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.complianceId}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('courseTitle', {
        header: 'Category',
        cell: ({ row }) => (
          <div className='flex items-center gap-4 text-wrap w-[300px]'>
            <CustomAvatar variant='rounded' skin='light' color={row.original.color}>
              <i className={classnames('text-[28px]', row.original.logo)} />
            </CustomAvatar>
            <div className='flex flex-col gap-0.5'>
              <Typography
                component={Link}
                href={getLocalizedUrl('/apps/academy/course-details', locale)}
                className='font-medium hover:text-primary'
                color='text.primary'
              >
                {row.original.courseTitle}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('description', {
        header: 'Description',
        cell: ({ row }) => (
          <Typography className='font-small text-wrap w-[300px]' color='text.primary'>
            {row.original.description}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('control', {
        header: 'Control',
        cell: ({ row }) => (
          <Chip
            label={row.original.control}
            sx={{
              backgroundColor: 'blue',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 12,
              width: '80px'
            }}
          />
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <Card>
      <CardHeader
        title='Compliance'
        action={
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search'
          />
        }
        className='flex-wrap gap-4'
      />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className={classnames({
                            'flex items-center': header.column.getIsSorted(),
                            'cursor-pointer select-none': header.column.getCanSort()
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <i className='ri-arrow-up-s-line text-xl' />,
                            desc: <i className='ri-arrow-down-s-line text-xl' />
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  No data available
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => {
                  return (
                    <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  )
                })}
            </tbody>
          )}
        </table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        className='border-bs'
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />

      <Drawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            height: '100%',
            width: '50%',
            backgroundColor: '#1C1C2B',
            color: 'white',
            borderRadius: '12px 12px 0 0'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #333',
            padding: '16px'
          }}
        >
          <Typography variant='h6' fontWeight='bold'>
            Scan your code for vulnerabilities (SAST)
          </Typography>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Grid Content Section */}
        <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  backgroundColor: '#2E2E3E',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
                <Typography variant='body1' fontWeight='bold'>
                  What will we do ?
                </Typography>
                <Typography variant='body2' className='mt-3' sx={{ color: '#B0B0C3' }}>
                  Upon activation, We will launch an initial scan on all your code files. We will then continuously scan
                  changes, anytime a Pull Request is created or updated.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: '#2E2E3E',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
                {/* First Box with GitHub Icon */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C1C2B',
                    borderRadius: '50%',
                    width: 90,
                    height: 60
                  }}
                >
                  <GitHubIcon sx={{ color: 'white', fontSize: 30 }} />
                </Box>

                {/* Second Box with Input Fields */}
                <Box width={'60%'}>
                  <TextField
                    fullWidth
                    size='small'
                    label='Username'
                    name='github_username'
                    variant='outlined'
                    value={formData.github_username}
                    onChange={handleInputChange}
                    sx={{
                      mb: 1,
                      '& .MuiInputBase-root': {
                        backgroundColor: '#1C1C2B',
                        color: 'white'
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0B0C3'
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    label='Token'
                    name='github_token'
                    variant='outlined'
                    type='password'
                    value={formData.github_token}
                    onChange={handleInputChange}
                    sx={{
                      mb: 1,
                      '& .MuiInputBase-root': {
                        backgroundColor: '#1C1C2B',
                        color: 'white'
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0B0C3'
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    label='Repository URL'
                    name='github_url'
                    variant='outlined'
                    value={formData.github_url}
                    onChange={handleInputChange}
                    sx={{
                      mb: 1,
                      '& .MuiInputBase-root': {
                        backgroundColor: '#1C1C2B',
                        color: 'white'
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0B0C3'
                      }
                    }}
                  />
                  <Button
                    fullWidth
                    variant='contained'
                    onClick={handleSubmit}
                    sx={{
                      backgroundColor: '#4B4BFF',
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      mt: 1
                    }}
                  >
                    {loading ? 'Scanning In Progress..' : 'Scan'}
                  </Button>
                </Box>
              </Box>
            </Grid>
            {success && (
              <Grid item xs={12} sm={12}>
                <Box
                  sx={{
                    backgroundColor: '#2E2E3E',
                    padding: '16px',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircleIcon sx={{ color: 'green', fontSize: 30 }} />
                    <Typography variant='body1' fontWeight='bold' className='ml-5'>
                      Repository Scan Successfull
                    </Typography>
                  </div>
                  <Typography variant='body2' sx={{ color: '#B0B0C3' }}>
                    {response}
                  </Typography>
                </Box>
              </Grid>
            )}
            {error && (
              <Grid item xs={12} sm={12}>
                <Box
                  sx={{
                    backgroundColor: '#2E2E3E',
                    padding: '16px',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant='body1' fontWeight='bold'>
                    Grid Item 4
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#B0B0C3' }}>
                    Content for the fourth grid item.
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Drawer>
    </Card>
  )
}

export default ComplianceTable
