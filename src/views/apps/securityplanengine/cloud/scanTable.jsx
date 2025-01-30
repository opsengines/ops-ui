'use client'

// React Imports
import { useMemo, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'
import { Button, CardMedia, Chip, Typography } from '@mui/material'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import classnames from 'classnames'

import { useSelector } from 'react-redux'

import AWSValidationModal from './awsScanModal'

import styles from '@core/styles/table.module.css'

// Column Definitions
const columnHelper = createColumnHelper()

const RowSelection = ({ dataset }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})
  const [awsModalOpen, setAwsModalOpen] = useState(false)

  const handleClose = () => setAwsModalOpen(false)
  const [data, setData] = useState(dataset)

  // Hooks
  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <div className='flex items-center'>
            <Checkbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler()
              }}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className='flex items-center'>
            <Checkbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler()
              }}
            />
          </div>
        )
      },
      columnHelper.accessor('id', {
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.id}
          </Typography>
        ),
        header: 'Id'
      }),
      columnHelper.accessor('title', {
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <CardMedia
              component='img'
              image={row.original.logo}
              alt={row.original.title}
              sx={{
                width: 40,
                height: 40,
                borderRadius: '8px'
              }}
            />
            <Typography className='font-medium hover:text-primary' color='text.primary'>
              {row.original.title}
            </Typography>
          </div>
        ),
        header: 'Scan Description'
      }),
      columnHelper.accessor('lastRun', {
        cell: ({ row }) => row.original.trigger && <p>{row.original.lastRun}</p>,
        header: 'Last Run'
      }),
      columnHelper.accessor('lastScanStatus', {
        cell: ({ row }) =>
          row.original.lastScanStatus && row.original.trigger ? (
            <Chip label='Passed' sx={{ backgroundColor: 'green', marginLeft: '20px' }} />
          ) : null,
        header: 'Last Scan Status'
      }),
      columnHelper.accessor('title', {
        cell: ({ row }) =>
          row.original.trigger ? (
            <Button onClick={() => setAwsModalOpen(true)}>Scan</Button>
          ) : (
            <Button>Activate</Button>
          ),
        header: 'Triggger'
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card>
      <CardHeader
        title='Scans'
        action={
          <a href='/en/apps/securityengines/cloudsecurity/results'>
            <Button type='primary' variant='outlined'>
              View Results
            </Button>
          </a>
        }
      />
      <div className='overflow-x-auto'>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map(row => {
                return (
                  <tr key={row.id} {...(row.getIsSelected() && { className: 'selected' })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <AWSValidationModal open={awsModalOpen} handleClose={handleClose} />
    </Card>
  )
}

export default RowSelection
