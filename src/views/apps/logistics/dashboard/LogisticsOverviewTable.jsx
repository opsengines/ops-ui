'use client'

// React Imports
import { useState, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'
import LinearProgress from '@mui/material/LinearProgress'
import TablePagination from '@mui/material/TablePagination'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

import { Badge, Button } from '@mui/material'

// Components Imports

import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports

import tableStyles from '@core/styles/table.module.css'

export const chipColor = {
  'No Warnings': { color: 'success' },
  'Fuel Problems': { color: 'primary' },
  'Temperature Not Optimal': { color: 'warning' },
  'Ecu Not Responding': { color: 'error' },
  'Oil Leakage': { color: 'info' }
}

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

// Column Definitions
const columnHelper = createColumnHelper()

const LogisticsOverviewTable = ({ vehicleData }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[vehicleData])

  const customcolors = ['#A31D1D', '#F93827', '#FFD65A', '#077d06']

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
      columnHelper.accessor('location', {
        header: 'CVE ID',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <Typography
              component={Link}
              href={getLocalizedUrl('/apps/logistics/fleet', locale)}
              className='font-medium hover:text-primary'
              color='text.primary'
            >
              {row.original.location}
            </Typography>
          </div>
        )
      }),
      columnHelper.accessor('severity', {
        header: 'Severity',
        cell: ({ row }) =>
          row?.original?.severity === 'Critical' ? (
            <Chip label={'Critical'} style={{ backgroundColor: customcolors[0], color: 'white' }} />
          ) : row?.original?.severity === 'High' ? (
            <Chip label={'High'} style={{ backgroundColor: customcolors[1], color: 'white' }} />
          ) : row?.original?.severity === 'Medium' ? (
            <Chip label={'Medium'} style={{ backgroundColor: customcolors[2], color: 'white' }} />
          ) : row?.original?.severity === 'Low' ? (
            <Chip label={'Low'} style={{ backgroundColor: customcolors[3], color: 'white' }} />
          ) : null
      }),
      columnHelper.accessor('affectedTech', {
        header: 'Affected Tech',
        cell: ({ row }) => <Typography>{row?.original?.affectedTech}</Typography>
      }),
      columnHelper.accessor('warnings', {
        header: 'Exploitability',
        cell: ({ row }) => (
          <Chip
            variant='tonal'
            label={row.original.warnings}
            size='small'
            color={row?.original?.warnings === 'No Active Exploit' ? 'success' : 'error'}
          />
        )
      }),
      columnHelper.accessor('aiFix', {
        header: 'AI Fix Status',
        cell: ({ row }) => <Typography>{row?.original?.aiFix}</Typography>
      }),
      columnHelper.accessor('startCity', {
        header: 'Action',
        cell: ({ row }) => (
          <Button variant='outlined' color='primary'>
            Apply Fix
          </Button>
        )
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
      rowSelection
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <Card>
      <CardHeader
        title='ReaperCVE Hub Overview'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Update', 'Share']} />}
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
        count={table.getExpandedRowModel().rows.length}
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

export default LogisticsOverviewTable
