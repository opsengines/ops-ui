'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import LinearProgress from '@mui/material/LinearProgress'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
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
  Drawer
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import axios from 'axios'

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

import { getGitInfo } from '@/api/github'

import { semgrepScanner } from '@/api/sast'
import LoadingModal from '@/views/components/ScanningModal'

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

const CustomTable = ({ courseData, onClick = f => f, refetch }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[courseData])
  const [globalFilter, setGlobalFilter] = useState('')
  const [gitRepos, setGitRepos] = useState([])

  const token = localStorage.getItem('authToken')

  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [response, setResponse] = useState('')
  const [selectedOption, setSelectedOption] = useState('All')
  const [selectedRepos, setSelectedRepos] = useState(gitRepos.map(repo => repo.url))
  const [githubUserName, setGithubUserName] = useState('')
  const [githubToken, setGithubtoken] = useState('')
  const [scanModal, setScanModal] = useState(false)

  const handleRadioChange = event => {
    setSelectedOption(event.target.value)
  }

  const handleCheckboxChange = (event, repoId) => {
    setSelectedRepos(prevSelectedRepos => {
      if (prevSelectedRepos.includes(repoId)) {
        return prevSelectedRepos.filter(id => id !== repoId)
      } else {
        return [...prevSelectedRepos, repoId]
      }
    })
  }

  const getGithubInformation = async () => {
    try {
      const data = await getGitInfo(token)

      const links = data[0]?.GitHubLink

      const transformedUrls = links.map((url, index) => {
        const path = url.split('github.com')[1]

        return {
          id: index + 1,
          name: path,
          url: url
        }
      })

      setGitRepos(transformedUrls)
      setGithubUserName(data[0].GitHubUsername)
      setGithubtoken(data[0].GitHubToken)
    } catch (error) {
      console.log(error)
    }
  }

  const startSempgrepScan = async data => {
    try {
      const response = await semgrepScanner(data, token)

      setScanModal(true)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleDrawer = open => () => {
    console.log('table drawer triggered')
    setSelectedRepos(gitRepos.map(repo => repo.url))
    setIsOpen(open)
  }

  const handleCustomRepos = () => {
    const data = {
      github_url: selectedRepos,
      github_username: githubUserName,
      github_token: githubToken
    }

    startSempgrepScan(data)
  }

  const handleSelectAll = () => {
    const repoList = gitRepos.map(repo => repo.url)

    const data = {
      github_url: repoList,
      github_username: githubUserName,
      github_token: githubToken
    }

    startSempgrepScan(data)
    setSelectedRepos(gitRepos.map(repo => repo.url)) // Select all repositories when 'All' is clicked
  }

  useEffect(() => {
    getGithubInformation()
  }, [])
  const { lang: locale } = useParams()

  const columns = useMemo(
    () => [
      columnHelper.accessor('scanId', {
        header: 'ID',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.scanId}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('courseTitle', {
        header: 'Scan Name',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
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
      columnHelper.accessor('time', {
        header: 'Last Run',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.time} {row.original.time ? 'ago' : null}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('progressValue', {
        header: 'Last Scan Status',
        cell: ({ row }) =>
          row.original.status ? <Chip label='Passed' sx={{ backgroundColor: 'green', marginLeft: '20px' }} /> : null
      }),
      columnHelper.accessor('userCount', {
        header: 'Trigger',
        cell: ({ row }) => <Button onClick={() => setIsOpen(true)}>{row.original.active ? 'Scan' : 'Activate'}</Button>,
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
        title='Scans'
        action={
          <div className='flex gap-6'>
            <DebouncedInput
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              placeholder='Search'
            />
            <Button variant='outlined'>
              <a href='/en/apps/securityengines/sast/results'>View Results</a>
            </Button>
          </div>
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

      <LoadingModal
        open={scanModal}
        handleClose={() => {
          setScanModal(false)
          setIsOpen(false)
          setSelectedOption('All')
          setSelectedRepos([])
          refetch()
        }}
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

            <Card
              style={{
                width: '98%',
                margin: '20px auto',
                borderRadius: 8,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Select Repositories
                </Typography>

                <div className='flex justify-between'>
                  <RadioGroup value={selectedOption} onChange={handleRadioChange} row>
                    <FormControlLabel value='All' control={<Radio />} label='All' />
                    <FormControlLabel value='Custom' control={<Radio />} label='Custom' />
                  </RadioGroup>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={selectedOption === 'All' ? handleSelectAll : handleCustomRepos}
                    style={{ marginTop: '10px' }}
                    disabled={selectedOption !== 'All' && selectedRepos.length < 1}
                  >
                    {selectedOption === 'All' ? 'Scan All Repositories' : 'Scan Selected Repositories'}
                  </Button>
                </div>

                {selectedOption === 'All' ? (
                  <>
                    <Typography variant='h6' style={{ marginTop: '20px', marginBottom: '20px' }}>
                      This Action Will Run This Scan On All Configured Repositories. To change this you can select the
                      custom repositories option
                    </Typography>
                  </>
                ) : (
                  <Typography variant='h6' style={{ marginTop: '20px', marginBottom: '20px' }}>
                    This Action Will Run This Scan On All Selected Repositories. Please select the repositories from the
                    table below.
                  </Typography>
                )}
                <Box style={{ marginTop: '20px' }}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell padding='checkbox'></TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>URL</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {gitRepos.map(repo => (
                          <TableRow key={repo.id}>
                            <TableCell padding='checkbox'>
                              <Checkbox
                                checked={selectedRepos.includes(repo.url)}
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
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => handleCustomRepos()}
                    style={{ marginTop: '10px' }}
                  >
                    Scan Repositories
                  </Button>
                </Box>
              </CardContent>
            </Card>

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
                  <Typography variant='body2' sx={{ color: '#B0B0C3' }}>
                    Repository Scan Failed, Please Try Again Later
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

export default CustomTable
