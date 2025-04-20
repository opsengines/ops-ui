'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Components Imports
import OptionsMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

// Column Definitions
const columnHelper = createColumnHelper()

// Vars
const teamData = [
  {
    value: 60,
    totalTasks: 130,
    color: 'primary',
    project: 'SAST',
    name: 'SAST',
    completedTasks: 87,
    post: 'IOS developer',
    src: '/images/avatars/1.png'
  },
  {
    value: 80,
    totalTasks: 120,
    color: 'success',
    project: 'SCA',
    name: 'SCA',
    completedTasks: 70,
    post: 'Laravel developer',
    src: '/images/avatars/8.png'
  },
  {
    value: 50,
    totalTasks: 62,
    color: 'warning',
    project: 'SBOM',
    completedTasks: 50,
    name: 'SBOM',
    post: 'React developer',
    src: '/images/avatars/5.png'
  },
  {
    value: 70,
    totalTasks: 90,
    color: 'error',
    project: 'DAST',
    completedTasks: 135,
    name: 'DAST',
    post: 'Angular developer',
    src: '/images/avatars/2.png'
  },
  {
    value: 60,
    totalTasks: 25,
    project: 'CI/CD',
    color: 'secondary',
    completedTasks: 12,
    name: 'CI/CD',
    post: 'VueJs developer',
    src: '/images/avatars/3.png'
  }
]

const columns = [
  columnHelper.accessor('project', {
    header: 'Module',
    cell: ({ row }) => <Chip variant='tonal' size='small' label={row.original.project} color={row.original.color} />
  }),
  columnHelper.accessor('totalTasks', {
    header: 'Score',
    cell: ({ row }) => (
      <Typography className='font-medium'>
        <span className='text-primary'>{`${row.original.completedTasks}/`}</span>
        <span>{row.original.totalTasks}</span>
      </Typography>
    )
  }),
  columnHelper.accessor('value', {
    header: 'Status',
    cell: ({ row }) => (
      <div className='flex relative'>
        <CircularProgress variant='determinate' value={100} className='absolute text-track' size={32} />
        <CircularProgress
          variant='determinate'
          thickness={4}
          value={row.original.value}
          color={row.original.color}
          size={32}
        />
      </div>
    )
  })
]

const HealthScore = () => {
  // States

  const [data, setData] = useState(() => [...teamData])

  // Hooks
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card>
      <CardHeader
        title='Security Health Score'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Refresh', 'Share', 'Update']} />}
        className='pbe-2.5'
      />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='border-be'>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className='!bs-8 bg-backgroundPaper'>
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
              .map(row => (
                <tr key={row.id} className='!border-be-0 [&:first-child_td]:!pbs-5 [&:last-child_td]:!pbe-5'>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} {...(cell.id.includes('value') && { align: 'center' })}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default HealthScore
