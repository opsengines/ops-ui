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
import GitHubIcon from '@mui/icons-material/GitHub'

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

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

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

const CourseTable = ({ courseData, selectedRows, setSelectedRows }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[courseData])
  const [globalFilter, setGlobalFilter] = useState('')

  useEffect(() => {
    setData(courseData)
  }, [courseData])

  useEffect(() => {
    const selectedData = Object.keys(rowSelection)
      .filter(key => rowSelection[key]) // Ensure it's a selected row
      .map(key => courseData[parseInt(key)].url) // Access the courseData using the key

    setSelectedRows(selectedData)
  }, [rowSelection])

  // Hooks
  const { lang: locale } = useParams()

  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      columnHelper.accessor('name', {
        header: 'Course Name',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <CustomAvatar variant='rounded' color={'white'}>
              <GitHubIcon
                fontSize='large'
                sx={{ color: '#333', fontSize: 40, backgroundColor: 'white', borderRadius: '50%' }}
              />
            </CustomAvatar>
            <div className='flex flex-col gap-0.5'>
              <Typography
                component={Link}
                href={getLocalizedUrl('/apps/academy/course-details', locale)}
                className='font-medium hover:text-primary'
                color='text.primary'
              >
                {row.original.name}
              </Typography>
              <div className='flex items-center gap-2'>
                <CustomAvatar src={row.original.avatar} size={22} />
                <Typography variant='body2'>{row.original.owner}</Typography>
              </div>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('defaultBranch', {
        header: 'Branch',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.defaultBranch}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('language', {
        header: 'Language',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.language}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('type', {
        header: 'Repository Type',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.type}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('updatedAt', {
        header: 'Updated At',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.updatedAt}
          </Typography>
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
    <Card className='mt-16'>
      <CardHeader
        title='Select Repositories To Scan'
        action={
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Repository'
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
    </Card>
  )
}

export default CourseTable
