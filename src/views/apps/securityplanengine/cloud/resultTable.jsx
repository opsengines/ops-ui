'use client'

// React Imports
import { useEffect, useMemo, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import TablePagination from '@mui/material/TablePagination'
import { Chip, Typography, Drawer, Box, Button, Divider, Skeleton } from '@mui/material'

import IconButton from '@mui/material/IconButton'

import CloseIcon from '@mui/icons-material/Close'

// Third-party Imports
import classnames from 'classnames'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import { rankItem } from '@tanstack/match-sorter-utils'

// Icon Imports
import ChevronRight from '@menu/svg/ChevronRight'

// Style Imports
import styles from '@core/styles/table.module.css'

import { resultData } from './data'
import { getCspmScanResult } from '@/api/cloud'

// Column Definitions
const columnHelper = createColumnHelper()

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

// A debounced input react component
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

  return <TextField {...props} size='small' value={value} onChange={e => setValue(e.target.value)} />
}

const Filter = ({ column, table }) => {
  // Vars
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)
  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className='flex gap-x-2'>
      <TextField
        fullWidth
        type='number'
        size='small'
        sx={{ minInlineSize: 100, maxInlineSize: 125 }}
        value={columnFilterValue?.[0] ?? ''}
        onChange={e => column.setFilterValue(old => [e.target.value, old?.[1]])}
        placeholder={`Min ${column.getFacetedMinMaxValues()?.[0] ? `(${column.getFacetedMinMaxValues()?.[0]})` : ''}`}
      />
      <TextField
        fullWidth
        type='number'
        size='small'
        sx={{ minInlineSize: 100, maxInlineSize: 125 }}
        value={columnFilterValue?.[1] ?? ''}
        onChange={e => column.setFilterValue(old => [old?.[0], e.target.value])}
        placeholder={`Max ${column.getFacetedMinMaxValues()?.[1] ? `(${column.getFacetedMinMaxValues()?.[1]})` : ''}`}
      />
    </div>
  ) : (
    <TextField
      fullWidth
      size='small'
      sx={{ minInlineSize: 100 }}
      value={columnFilterValue ?? ''}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder='Search...'
    />
  )
}

const ResultTable = () => {
  // States
  const [columnFilters, setColumnFilters] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState()
  const [loading, setLoading] = useState(true)

  const closeDrawer = () => setDrawerOpen(false)

  const [data, setData] = useState([])

  const token = localStorage.getItem('authToken')

  const handleRowSelection = data => {
    console.log(data)
    setDrawerOpen(true)
    setSelectedRow(data)
  }

  const fetchCloudScanResults = async () => {
    const reqData = {
      scan_category: 'Cloud'
    }

    try {
      const response = await getCspmScanResult(reqData, token)
      const responseArray = []

      response?.scans?.forEach(item => {
        if (item.status === 'completed') {
          responseArray.push(item.results)
        } else {
          responseArray.push({
            message: item.error, // Renamed 'error' to 'message'
            status: item.status, // Keeping 'status' as it is
            time_dt: item.scan_date // Renamed 'scan_date' to 'time_dt'
          })
        }
      })
      setData(responseArray)
      setLoading(false)

      console.log(response, responseArray)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCloudScanResults()
  }, [])

  // Hooks
  const columns = useMemo(
    () => [
      columnHelper.accessor('message', {
        cell: ({ row }) => (
          <Typography className='font-medium w-[200px] text-wrap' color='text.primary'>
            {row.original.message}
          </Typography>
        ),
        header: 'Vulnerability'
      }),
      columnHelper.accessor('scanID', {
        cell: ({ row }) => (
          <Typography className='font-medium w-[200px] text-wrap' color='text.primary'>
            AWS
          </Typography>
        ),
        header: 'Cloud'
      }),
      columnHelper.accessor('status', {
        cell: ({ row }) => (
          <p>
            {row.original.status === 'completed' ? (
              <Chip label={row.original.status} sx={{ backgroundColor: 'green' }} />
            ) : null}
            {row.original.status === 'failed' ? (
              <Chip label={row.original.status} sx={{ backgroundColor: 'red' }} />
            ) : null}
          </p>
        ),
        header: 'Status'
      }),
      columnHelper.accessor('time_dt', {
        cell: ({ row }) => (
          <Typography className='font-medium w-[200px] text-wrap' color='text.primary'>
            {row.original.time_dt?.split('T')[0]}
          </Typography>
        ),
        header: 'Scan Date'
      }),
      columnHelper.accessor('severity', {
        cell: ({ row }) => (
          <p className='ml-[43%]'>
            {row.original.severity === 'Low' ? (
              <Chip
                className=' w-[100px]'
                label={row.original.severity}
                sx={{ backgroundColor: 'green', textAlign: 'center' }}
              />
            ) : row.original.severity === 'Medium' ? (
              <Chip
                className='w-[100px]'
                label={row.original.severity}
                sx={{ backgroundColor: '#fec76f', textAlign: 'center' }}
              />
            ) : row.original.severity === 'Medium' ? (
              <Chip
                className='w-[100px]'
                label={row.original.severity}
                sx={{ backgroundColor: 'red', textAlign: 'center' }}
              />
            ) : null}
          </p>
        ),
        header: 'Severity'
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      columnFilters,
      globalFilter
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.getState().columnFilters[0]?.id])

  return (
    <Card>
      <CardHeader
        className='flex flex-wrap gap-y-2'
        title=''
        action={
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search all columns...'
          />
        }
      />
      {loading ? (
        <Skeleton variant='rounded' width={'100vw'} height={'90vh'} />
      ) : (
        <div className='overflow-x-auto'>
          <table className={styles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
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
                                asc: <ChevronRight fontSize='1.25rem' className='-rotate-90' />,
                                desc: <ChevronRight fontSize='1.25rem' className='rotate-90' />
                              }[header.column.getIsSorted()] ?? null}
                            </div>
                            {/* {header.column.getCanFilter() && <Filter column={header.column} table={table} />} */}
                          </>
                        )}
                      </th>
                    )
                  })}
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
                {table.getRowModel().rows.map(row => {
                  return (
                    <tr key={row.id} onClick={() => handleRowSelection(row.original)} style={{ cursor: 'pointer' }}>
                      {row.getVisibleCells().map(cell => {
                        return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            )}
          </table>
        </div>
      )}
      <TablePagination
        rowsPerPageOptions={[7, 10, 25, { label: 'All', value: data.length }]}
        component='div'
        className='border-bs'
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' }
        }}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
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
              <Chip label={selectedRow?.status} sx={{ backgroundColor: '#1976d2' }} />
              <Chip label={selectedRow?.severity} sx={{ backgroundColor: 'red' }} />
            </div>
          </div>
          <Typography variant='h6' className='mt-7'>
            {selectedRow?.message}
          </Typography>
          <Typography variant='body1' className='mt-4'>
            {selectedRow?.finding_info?.desc}
          </Typography>
          <div className='flex flex-row gap-2'>
            <Button variant='outlined' className='mt-10 p-2' style={{ borderColor: 'gray' }}>
              Create ticket
            </Button>
            <Button variant='outlined' className='mt-10 p-2' style={{ borderColor: '#959bee' }}>
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
            padding: '16px',
            borderRadius: '8px'
          }}
        >
          <div className='flex items-center justify-between'>
            <Typography variant='body1' fontWeight='bold'>
              General Info
            </Typography>
          </div>

          <div className='mt-8 flex justify-between w-[70%]'>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Cloud</Typography>
              <Typography variant='body1' className='mt-2'>
                {selectedRow?.cloud?.provider}
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Region</Typography>
              <Typography variant='body1' className='mt-2'>
                {selectedRow?.cloud?.region}
              </Typography>
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>User Id</Typography>
              <Typography variant='body1' className='mt-2'>
                {selectedRow?.cloud?.account?.uid}
              </Typography>
            </div>
          </div>

          <div className='mt-8 flex justify-between w-[70%]'>
            <div className='flex flex-col items-center'>
              <Typography variant='body2'>Resource</Typography>
              <Typography variant='body1' className='mt-2'>
                {selectedRow?.finding_info?.types[0]}
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

        <Divider className='mt-2 mb-2' />

        <Box
          sx={{
            padding: '16px',
            borderRadius: '8px',
            marginTop: '10px'
          }}
        >
          <div>
            <Typography variant='body1' fontWeight='bold'>
              Remediation
            </Typography>
            <br />
            <Typography variant='body2' fontWeight='bold'>
              Suggestion : {selectedRow?.remediation?.desc}
            </Typography>
          </div>

          {/* <div className='flex flex-row mt-5 gap-5'>
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
          </div> */}

          {/* <div className='flex flex-row mt-5 gap-5'>
            <Typography variant='body1'>Line : </Typography>
            <p style={{ color: '#1976d2' }}>
              {selectedRow?.start?.line}:{selectedRow?.start?.col}
            </p>
          </div> */}
        </Box>
      </Drawer>
    </Card>
  )
}

export default ResultTable
