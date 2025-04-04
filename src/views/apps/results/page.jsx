'use client'

// React Imports
import { useEffect, useMemo, useState, forwardRef } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import TablePagination from '@mui/material/TablePagination'
import { Chip, Typography, Drawer, Box, Button, Divider, Skeleton, Tooltip, Grid, CardContent } from '@mui/material'

import { Popover, MenuList, MenuItem, FormControl, Select, MenuItem as DropdownItem } from '@mui/material'

import {
  FlashOn,
  Alarm,
  ReportProblem,
  AddCircle,
  VisibilityOff,
  Code,
  Storage,
  AdminPanelSettingsOutlined,
  ApiOutlined,
  BubbleChartOutlined,
  CloudCircleOutlined
} from '@mui/icons-material'

import { motion } from 'framer-motion'

import { Home, Work, Settings, Info } from '@mui/icons-material'

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

import { format, addDays, subDays } from 'date-fns'

// Icon Imports
import ChevronRight from '@menu/svg/ChevronRight'

// Style Imports
import styles from '@core/styles/table.module.css'

import { getCspmScanResult } from '@/api/cloud'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

import './index.css'
import { scanEngine } from '@/api/results'
import TotalSales from '@/views/pages/widget-examples/statistics/TotalSales'
import SecurityReport from '@/views/components/AIFix'
import SastScanModal from '../securityplanengine/SAST/SastScanModal'
import { semgrepScanner } from '@/api/sast'
import AWSValidationModal from '../securityplanengine/cloud/awsScanModal'
import DastScanModal from './DastScanModal'

// Column Definitions
const columnHelper = createColumnHelper()

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

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

const CustomInput = forwardRef((props, ref) => {
  const { label, start, end, ...rest } = props

  const startDate = format(start, 'dd/MM/yyyy')
  const endDate = end !== null ? ` - ${format(end, 'dd/MM/yyyy')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`

  return <TextField fullWidth size='small' inputRef={ref} {...rest} label={label} value={value} />
})

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
  const [sastDrawer, setSastDrawer] = useState(false)
  const [selectedRow, setSelectedRow] = useState()
  const [loading, setLoading] = useState(true)
  const [startDate, setStartDate] = useState(subDays(new Date(), 15))
  const [endDate, setEndDate] = useState(addDays(new Date(), 1))
  const [data, setData] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)
  const [category, setCategory] = useState()
  const [severity, setSeverity] = useState()
  const [status, setStatus] = useState()
  const [dashboardStats, setDashboardStats] = useState({})
  const [aiFixModal, setAiFixModal] = useState(false)
  const [sastModal, setSastModal] = useState(false)
  const [awsScanModal, setAwsScanModal] = useState(false)
  const [dastModal, setDastModal] = useState(false)

  const items = [
    {
      icon: <AdminPanelSettingsOutlined fontSize='large' color='primary' />,
      text: 'SAST Scan',
      onClick: () => setSastModal(true)
    },
    {
      icon: <AdminPanelSettingsOutlined fontSize='large' color='primary' />,
      text: 'SCA Scan',
      onClick: () => setSastModal(true)
    },
    {
      icon: <AdminPanelSettingsOutlined fontSize='large' color='primary' />,
      text: 'SBOM Scan',
      onClick: () => setSastModal(true)
    },
    {
      icon: <BubbleChartOutlined fontSize='large' color='primary' />,
      text: 'DAST Scan',
      onClick: () => setDastModal(true)
    },
    { icon: <ApiOutlined fontSize='large' color='primary' />, text: 'CI/CD Scan', onClick: () => setSastModal(true) },
    {
      icon: <CloudCircleOutlined fontSize='large' color='primary' />,
      text: 'CSPM Scan',
      onClick: () => setAwsScanModal(true)
    },
    { icon: <ApiOutlined fontSize='large' color='primary' />, text: 'IAC Scan', onClick: () => setSastModal(true) },
    {
      icon: <BubbleChartOutlined fontSize='large' color='primary' />,
      text: 'Secrets Scan',
      onClick: () => setSastModal(true)
    },
    {
      icon: <BubbleChartOutlined fontSize='large' color='primary' />,
      text: 'Compliance Check',
      onClick: () => setSastModal(true)
    },
    {
      icon: <BubbleChartOutlined fontSize='large' color='primary' />,
      text: 'AI Scan',
      onClick: () => setSastModal(true)
    },
    {
      icon: <ApiOutlined fontSize='large' color='primary' />,
      text: 'LLM Scan',
      onClick: () => setSastModal(true)
    },
    {
      icon: <BubbleChartOutlined fontSize='large' color='primary' />,
      text: 'Scan All',
      onClick: () => setSastModal(true)
    }
  ]

  const closeDrawer = () => setDrawerOpen(false)

  const token = localStorage.getItem('authToken')

  const handleRowSelection = data => {
    setSelectedRow(data)
    data?.scan_category === 'SAST' ? setSastDrawer(true) : setDrawerOpen(true)
  }

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const popoverOpen = Boolean(anchorEl)
  const id = popoverOpen ? 'filter-popover' : undefined

  function transformScanData(scanData) {
    let transformedResults = []
    let statsCount = {
      severity: {
        Low: 0,
        High: 0,
        Medium: 0,
        Critical: 0
      },
      category: {
        SAST: 0,
        Cloud: 0,
        DAST: 0
      }
    }

    scanData.forEach(scan => {
      const { scan_category, scan_date, scan_id, scan_subcategory, status, results } = scan

      if (scan?.scan_category === 'SAST') {
        let result = results?.length || 0

        statsCount.category.SAST = statsCount.category.SAST + result
      }

      if (scan?.scan_category === 'Cloud') {
        let result = results?.length || 0

        statsCount.category.Cloud = statsCount.category.Cloud + result
      }

      if (scan?.scan_category === 'DAST') {
        // debugger
        const { alerts } = scan?.results[0]?.site[0]
        let res = alerts?.length || 0

        statsCount.category.DAST = statsCount.category.DAST + res

        alerts?.forEach((alert, index) => {
          transformedResults.push({
            ...alerts[index],
            scan_category: scan?.scan_category,
            scan_date: scan?.created_at,
            status: scan?.status,
            severity: 'Low',
            repository: alert?.instances[0]?.uri,
            message: alert?.alert,
            severityStatus: false
          })

          if (alert?.confidence === '1') {
            console.log('Added 1')
            statsCount.severity.Low = statsCount.severity.Low + 1
          }

          if (alert?.confidence === '2') {
            console.log('Added 2')
            statsCount.severity.Medium = statsCount.severity.Medium + 1
          }

          if (alert?.confidence === '3') {
            console.log('Added 3')
            statsCount.severity.High = statsCount.severity.High + 1
          }

          if (alert?.confidence === '4') {
            console.log('Added 4')
            statsCount.severity.Critical = statsCount.severity.Critical + 1
          }
        })
      }

      if (results === 'No findings in Account' || scan?.error) {
        return
      }

      if (scan_category !== 'DAST') {
        results?.forEach(result => {
          if (result?.extra?.metadata?.confidence === 'LOW' || result?.severity === 'Low') {
            statsCount.severity.Low = statsCount.severity.Low + 1
          } else if (result?.extra?.metadata?.confidence === 'MEDIUM' || result?.severity === 'Medium') {
            statsCount.severity.Medium = statsCount.severity.Medium + 1
          } else if (result?.extra?.metadata?.confidence === 'HIGH' || result?.severity === 'High') {
            statsCount.severity.High = statsCount.severity.High + 1
          } else {
            return
          }

          transformedResults.push({
            ...result,
            scan_category,
            scan_date,
            scan_id,
            scan_subcategory,
            status,
            repository: scan?.repository ? scan?.repository : 'AWS',
            severityStatus: false
          })
        })
      }
    })

    setDashboardStats(statsCount)

    setData(transformedResults)

    setLoading(false)

    console.log(statsCount)

    return transformedResults
  }

  // console.log(data)
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
    } catch (error) {
      console.log(error)
    }
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

  const onCategoryFilter = e => {
    setCategory(e.target.value)
  }

  useEffect(() => {
    //fetchCloudScanResults()
    scanEngine(
      {
        scan_fromdate: startDate,
        scan_todate: endDate
      },
      token
    ).then(response => transformScanData(response?.results))
  }, [])

  useEffect(() => {
    console.log('Variable Changed')
  }, [category, severity, status])

  // Hooks
  const columns = useMemo(
    () => [
      columnHelper.accessor('scan_category', {
        cell: ({ row }) => (
          <Typography className='font-medium w-[100px] text-wrap' color='text.primary'>
            {row.original.scan_category}
          </Typography>
        ),
        header: 'Category'
      }),
      columnHelper.accessor('repository', {
        cell: ({ row }) => (
          <Typography className='font-medium w-[170px] text-wrap' color='text.primary'>
            {row?.original?.scan_category === 'SAST'
              ? row?.original.repository?.split('github.com')[1]
              : row?.original?.repository}
          </Typography>
        ),
        header: 'Name'
      }),
      columnHelper.accessor('message', {
        cell: ({ row }) => (
          <Tooltip
            title={row?.original?.scan_category === 'SAST' ? row?.original?.extra?.message : row?.original?.message}
          >
            <Typography className='font-medium w-[250px] text-wrap' color='text.primary'>
              {row?.original?.scan_category === 'SAST'
                ? row?.original?.extra?.message?.split(' ').slice(0, 8).join(' ') +
                  (row?.original?.extra?.message.split(' ').length > 8 ? '...' : '')
                : row?.original?.message?.split(' ').slice(0, 8).join(' ') +
                  (row?.original?.extra?.message.split(' ').length > 8 ? '...' : '')}
            </Typography>
          </Tooltip>
        ),
        header: 'Vulnerability'
      }),
      columnHelper.accessor('status', {
        cell: ({ row }) => (
          <p>
            {row.original.status === 'completed' ? (
              <Chip label={'Completed'} sx={{ backgroundColor: 'green', color: 'white' }} />
            ) : null}
            {row.original.status === 'failed' ? (
              <Chip label={'Failed'} sx={{ backgroundColor: 'red', color: 'white' }} />
            ) : null}
          </p>
        ),
        header: 'Status'
      }),
      columnHelper.accessor('severity', {
        cell: ({ row }) => (
          <p>
            {row.original.severity === 'Low' || row?.original?.extra?.metadata?.confidence === 'LOW' ? (
              <Chip
                className=' w-[100px]'
                label={'Low'}
                sx={{ backgroundColor: 'green', textAlign: 'center', color: 'white' }}
              />
            ) : row.original.severity === 'Medium' || row?.original?.extra?.metadata?.confidence === 'MEDIUM' ? (
              <Chip
                className='w-[100px]'
                label={'Medium'}
                sx={{ backgroundColor: '#fec76f', textAlign: 'center', color: 'white' }}
              />
            ) : row.original.severity === 'High' || row?.original?.extra?.metadata?.confidence === 'HIGH' ? (
              <Chip
                className='w-[100px]'
                label={'High'}
                sx={{ backgroundColor: 'red', textAlign: 'center', color: 'white' }}
              />
            ) : null}
          </p>
        ),
        header: 'Severity'
      }),
      columnHelper.accessor('severityStatus', {
        cell: ({ row }) => (
          <p>
            {row.original.severityStatus === false ? <Chip label={'Open'} sx={{ backgroundColor: 'red' }} /> : null}
            {row.original.severityStatus === true ? (
              <Chip label={row.original.status} sx={{ backgroundColor: 'green' }} />
            ) : null}
          </p>
        ),
        header: 'Severity Status'
      }),
      columnHelper.accessor('scan_date', {
        cell: ({ row }) => (
          <Typography className='font-medium w-[120px] text-wrap' color='text.primary'>
            {row.original.scan_date?.split('T')[0]} {row.original.scan_date?.split('T')[1].split('.')[0]}
          </Typography>
        ),
        header: 'Scan Date'
      })

      //   columnHelper.accessor('scan_date', {
      //     cell: ({ row }) => (
      //       <Typography className='font-medium w-[120px] text-wrap' color='text.primary'>
      //         {row.original.scan_date?.split('T')[1].split('.')[0]}
      //       </Typography>
      //     ),
      //     header: 'Scan Time'
      //   })
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
  }, [table.getState().columnFilters[0]?.id])

  const handleOnChange = dates => {
    const [start, end] = dates

    if (start && end) {
      setLoading(true)
      scanEngine(
        {
          scan_fromdate: start,
          scan_todate: end
        },
        token
      ).then(response => transformScanData(response?.results))
    }

    setStartDate(start)
    setEndDate(end)
  }

  const handleFilterApply = () => {
    setLoading(true)

    const payload = {
      scan_fromdate: startDate,
      scan_todate: endDate,
      ...(category && { scan_category: category }),
      ...(severity && { severity: severity }),
      ...(status && { status: status })
    }

    scanEngine(payload, token).then(response => transformScanData(response?.results))
  }

  const handleClearFilters = () => {
    setCategory()

    setStatus()

    setSeverity()

    const payload = {
      scan_fromdate: startDate,
      scan_todate: endDate
    }

    scanEngine(payload, token).then(response => transformScanData(response?.results))
  }

  const startSempgrepScan = async data => {
    try {
      const response = await semgrepScanner(data, token)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSastScan = data => {
    startSempgrepScan(data)
  }

  function removePTags(inputString) {
    if (!inputString) {
      return ''
    } else {
      return inputString.replace(/<\/?p>/g, '')
    }
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '15px', borderRadius: 2 }}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.2 }}
          >
            <Card
              sx={{
                width: 120, // Increased width for rectangular shape
                height: 60, // Reduced height
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                borderRadius: 2,
                padding: 1,
                cursor: 'pointer',
                backgroundColor: item?.text === 'Scan All' ? 'primary' : null
              }}
              onClick={() => item.onClick()}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  padding: '8px',
                  borderRadius: 2,
                  backgroundColor: item?.text === 'Scan All' ? 'primary' : null
                }}
              >
                {item.icon}
                <Typography variant='body2' fontWeight='bold'>
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {sastModal && (
        <SastScanModal
          open={sastModal}
          gitRepos={[]}
          handleClose={() => setSastModal(false)}
          scan={data => handleSastScan(data)}
        />
      )}
      {awsScanModal && <AWSValidationModal open={awsScanModal} handleClose={() => setAwsScanModal(false)} />}
      {dastModal && <DastScanModal open={dastModal} handleClose={() => setDastModal(false)} />}
      <Grid container spacing={6} className='mb-5'>
        <Grid item xs={12} md={4}>
          <TotalSales
            title={'Severity'}
            data={[
              dashboardStats?.severity?.Critical,
              dashboardStats?.severity?.High,
              dashboardStats?.severity?.Medium,
              dashboardStats?.severity?.Low
            ]}
            labels={['Critical', 'High', 'Medium', 'Low']}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TotalSales
            title={'Category'}
            data={[dashboardStats?.category?.SAST, dashboardStats?.category?.Cloud, 0, dashboardStats?.category?.DAST]}
            labels={['SAST', 'CSPM', 'SCA', 'DAST']}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TotalSales title={'Scan Targets'} data={[2, 0, 0]} labels={['Open', 'Fixed', 'N/A']} loading={loading} />
        </Grid>
      </Grid>
      <Card>
        <CardHeader
          className='flex flex-wrap gap-y-2'
          title=''
          action={
            <div className='flex gap-2'>
              <Button variant='contained' onClick={handleOpen} size='small'>
                Filters
              </Button>
              <Popover
                id={id}
                open={popoverOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
              >
                <MenuList sx={{ width: 300, p: 2 }}>
                  <div className='flex justify-between'>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
                      Quick Filters
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 'bold', mb: 1, color: '#8657e1' }}
                      onClick={() => handleClearFilters()}
                    >
                      Clear Filters
                    </Typography>
                  </div>
                  <MenuItem>
                    <FlashOn fontSize='small' sx={{ mr: 1 }} />
                    Quick Fixes
                  </MenuItem>
                  <MenuItem>
                    <AddCircle fontSize='small' sx={{ mr: 1 }} />
                    AI Fixes
                  </MenuItem>
                  <MenuItem>
                    <VisibilityOff fontSize='small' sx={{ mr: 1 }} />
                    Ignored Issues
                  </MenuItem>
                  <Divider sx={{ my: 2 }} />
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <Typography variant='subtitle2' sx={{ mb: 0.5 }}>
                      Category
                    </Typography>
                    <Select value={category} onChange={e => onCategoryFilter(e)} size='small'>
                      <DropdownItem value='SAST'>SAST</DropdownItem>
                      <DropdownItem value='SCA'>SCA</DropdownItem>
                      <DropdownItem value='SBOM'>SBOM</DropdownItem>
                      <DropdownItem value='DAST'>DAST</DropdownItem>
                      <DropdownItem value='CICD'>CI/CD</DropdownItem>
                      <DropdownItem value='CSPM'>CSPM</DropdownItem>
                      <DropdownItem value='IAC'>IAC</DropdownItem>
                      <DropdownItem value='Secrets'>Secrets</DropdownItem>
                      <DropdownItem value='Compliance'>Compliance</DropdownItem>
                      <DropdownItem value='AIML'>AI/ML</DropdownItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <Typography variant='subtitle2' sx={{ mb: 0.5 }}>
                      Severity
                    </Typography>
                    <Select value={severity} onChange={e => setSeverity(e.target.value)} size='small'>
                      <DropdownItem value='All'>All</DropdownItem>
                      <DropdownItem value='Low'>Low</DropdownItem>
                      <DropdownItem value='Medium'>Medium</DropdownItem>
                      <DropdownItem value='High'>High</DropdownItem>
                      <DropdownItem value='Critical'>Critical</DropdownItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <Typography variant='subtitle2' sx={{ mb: 0.5 }}>
                      Status
                    </Typography>
                    <Select value={status} onChange={e => setStatus(e.target.value)} size='small'>
                      <DropdownItem value='Open'>Open</DropdownItem>
                      <DropdownItem value='Closed'>Fixed</DropdownItem>
                      <DropdownItem value='NA'>N/A</DropdownItem>
                    </Select>
                  </FormControl>
                  <Button fullWidth variant='contained' className='mt-3' onClick={() => handleFilterApply()}>
                    Apply
                  </Button>
                </MenuList>
              </Popover>
              <DebouncedInput
                value={globalFilter ?? ''}
                onChange={value => setGlobalFilter(String(value))}
                placeholder='Search'
              />
              <AppReactDatepicker
                selectsRange
                endDate={endDate}
                selected={startDate}
                startDate={startDate}
                id='date-range-picker'
                onChange={handleOnChange}
                shouldCloseOnSelect={true}
                customInput={<CustomInput label='Date Range' start={startDate} end={endDate} />}
              />
            </div>
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
                      <tr key={row.id} className='table-row' onClick={() => handleRowSelection(row.original)}>
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

        <SecurityReport open={aiFixModal} handleClose={() => setAiFixModal(false)} data={selectedRow} />

        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={closeDrawer}
          PaperProps={{ sx: { width: '50vw', padding: 3 } }}
        >
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
              marginTop: '10px',
              borderBottom: '2px solid gray'
            }}
          >
            <div className='flex items-center justify-between'>
              {/* <img src='/images/apps/connectors/GithubIcon.png' alt='GitHub Icon' w/>{' '} */}
              <Chip label={'Finding Info'} color={'secondary'} size='large' variant='tonal' />
              <div className='flex flex-row gap-3'>
                <Chip label={selectedRow?.status} sx={{ backgroundColor: '#1976d2' }} />
                <Chip label={selectedRow?.severity} sx={{ backgroundColor: 'red' }} />
              </div>
            </div>
            <Typography variant='h6' className='mt-7'>
              {selectedRow?.message}
            </Typography>
            <Typography variant='body1' className='mt-4'>
              {selectedRow?.scan_category === 'DAST'
                ? removePTags(selectedRow?.otherinfo)
                : selectedRow?.finding_info?.desc}
            </Typography>
            <div className='flex flex-row gap-2 mt-5'>
              <Chip label={'Create Ticket'} color={'primary'} size='large' variant='tonal' />
              <Chip label={'Mark As Ignored'} color={'primary'} size='large' variant='tonal' />
              <Chip
                label={'AI Fix'}
                color={'primary'}
                size='large'
                variant='tonal'
                onClick={() => {
                  setAiFixModal(true)
                }}
              />
            </div>
          </Box>

          <Box
            sx={{
              padding: '16px',
              borderBottom: '2px solid gray'
            }}
          >
            <div className='flex items-center justify-between'>
              <Chip label={'General Info'} color={'secondary'} size='large' variant='tonal' />
            </div>

            {selectedRow?.scan_category !== 'DAST' ? (
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
            ) : null}

            {selectedRow?.scan_category === 'DAST' ? (
              <div className='mt-8 flex gap-5 w-[70%]'>
                <Typography variant='body1'>URL :</Typography>
                <Typography variant='body2' className='text-blue-400'>
                  {selectedRow?.instances[0]?.uri}
                </Typography>
              </div>
            ) : null}

            {selectedRow?.scan_category !== 'DAST' ? (
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
            ) : null}
          </Box>

          <Box
            sx={{
              padding: '16px',
              borderRadius: '8px',
              marginTop: '10px'
            }}
          >
            <div>
              <Chip label={'Recommendation'} color={'secondary'} size='large' variant='tonal' />
              <br />
              <Typography variant='body2' fontWeight='bold' className='mt-5'>
                Suggestion : {selectedRow?.remediation?.desc || removePTags(selectedRow?.solution)}
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

        <Drawer
          anchor='right'
          open={sastDrawer}
          onClose={() => setSastDrawer(false)}
          PaperProps={{ sx: { width: '50vw', padding: 3 } }}
        >
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
            <IconButton onClick={() => setSastDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              padding: '16px',
              marginTop: '10px',
              borderBottom: '2px solid gray'
            }}
          >
            <div className='flex items-center justify-between'>
              {/* <img src='/images/apps/connectors/GithubIcon.png' alt='GitHub Icon' w/>{' '} */}
              <Chip label={'Finding Info'} color={'secondary'} size='large' variant='tonal' />
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
            <div className='flex flex-row gap-2 mt-5'>
              <Chip label={'Create Ticket'} color={'primary'} size='large' variant='tonal' />
              <Chip label={'Mark As Ignored'} color={'primary'} size='large' variant='tonal' />
              <Chip
                label={'AI Fix'}
                color={'primary'}
                size='large'
                variant='tonal'
                onClick={() => {
                  setAiFixModal(true)
                }}
              />
              {/* <Button variant='outlined' className='mt-10 p-2' style={{ color: 'white', borderColor: 'gray' }}>
                Create ticket
              </Button> */}
              {/* <Button variant='outlined' className='mt-10 p-2' style={{ color: '#959bee', borderColor: '#959bee' }}>
                Mark As Ignored
              </Button>
              <Button variant='outlined' className='mt-10 p-2' style={{ color: 'purple', borderColor: 'purple' }}>
                Mark As Fixed
              </Button>
              <Button
                variant='outlined'
                className='mt-10 p-2'
                onClick={() => {
                  setAiFixModal(true)
                }}
              >
                AI Fix
              </Button> */}
            </div>
          </Box>

          {/* <Divider className='mt-2 mb-2' /> */}
          <Box
            sx={{
              padding: '16px',
              borderBottom: '2px solid gray'
            }}
          >
            <div className='flex items-center justify-between'>
              <Chip label={'General Info'} color={'secondary'} size='large' variant='tonal' />
            </div>

            <div className='mt-8 flex justify-between w-[100%]'>
              <div className='flex flex-col items-center'>
                <Typography variant='h6'>Developers</Typography>
                <Typography variant='body1' className='mt-2'>
                  2
                </Typography>
              </div>
              <div className='flex flex-col items-center'>
                <Typography variant='h6'>File Count</Typography>
                <Typography variant='body1' className='mt-2'>
                  60
                </Typography>
              </div>
              <div className='flex flex-col items-center'>
                <Typography variant='h6'>Repository Size</Typography>
                <Typography variant='body1' className='mt-2'>
                  600.33Kb
                </Typography>
              </div>
              <div className='flex flex-col items-center'>
                <Typography variant='h6'>Branch</Typography>
                <Typography variant='body1' className='mt-2'>
                  Main
                </Typography>
              </div>
            </div>

            <div className='mt-8 flex justify-between w-[70%]'>
              <div className='flex flex-col items-center'>
                <Typography variant='h6'>Last Code Changes</Typography>
                <Typography variant='body1' className='mt-2'>
                  12 Months Ago
                </Typography>
              </div>
              <div className='flex flex-col items-center'>
                <Typography variant='h6'>Creation Date</Typography>
                <Typography variant='body1' className='mt-2'>
                  12 Months Ago
                </Typography>
              </div>
              <div className='flex flex-col items-center'>
                <Typography variant='h6'>Access Level</Typography>
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
              <Chip label={'About This Issue'} color={'secondary'} size='large' variant='tonal' />
            </div>

            <div className='flex flex-row mt-5 gap-5'>
              <Typography variant='h6'>File Path : </Typography>
              <a
                href={generateGitHubLineLink(
                  selectedRow?.repository,
                  selectedRow?.path?.split('/')?.slice(8)?.join('/'),
                  selectedRow?.start?.line
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                <p style={{ color: '#1976d2', textDecoration: 'underline' }}>
                  {selectedRow?.path?.split('/')?.slice(7)?.join('/')}
                </p>
              </a>
            </div>

            <div className='flex flex-row mt-5 gap-5'>
              <Typography variant='h6'>Line : </Typography>
              <p style={{ color: '#1976d2' }}>
                {selectedRow?.start?.line}:{selectedRow?.start?.col}
              </p>
            </div>
          </Box>
        </Drawer>
      </Card>
    </>
  )
}

export default ResultTable
