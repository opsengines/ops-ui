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
    totalTasks: 135,
    color: 'error',
    project: 'Critical',
    name: 'CVE-2025-30143',
    completedTasks: 87,
    post: 'IOS developer',
    src: '/images/avatars/1.png'
  },
  {
    value: 80,
    totalTasks: 420,
    color: 'error',
    project: 'High',
    name: 'CVE-2025-30132',
    completedTasks: 340,
    post: 'Laravel developer',
    src: '/images/avatars/8.png'
  },
  {
    value: 50,
    totalTasks: 82,
    color: 'success',
    project: 'Low',
    completedTasks: 50,
    name: 'CVE-2025-30123',
    post: 'React developer',
    src: '/images/avatars/5.png'
  },
  {
    value: 70,
    totalTasks: 260,
    color: 'warning',
    project: 'Medium',
    completedTasks: 98,
    name: 'CVE-2025-30117',
    post: 'Angular developer',
    src: '/images/avatars/2.png'
  },
  {
    value: 60,
    totalTasks: 25,
    project: 'Low',
    color: 'primary',
    completedTasks: 12,
    name: 'CVE-2022:109',
    post: 'VueJs developer',
    src: '/images/avatars/3.png'
  }
]

const columns = [
  columnHelper.accessor('name', {
    header: 'Vulnerability',
    cell: ({ row }) => (
      <div className='flex gap-3 items-center'>
        <CustomAvatar src={row.original.src} size={38} />
        <div className='flex flex-col gap-0.5'>
          <Typography color='text.primary' className='font-medium'>
            {row.original.name}
          </Typography>
        </div>
      </div>
    )
  }),
  columnHelper.accessor('project', {
    header: 'Security',
    cell: ({ row }) => <Chip variant='tonal' size='small' label={row.original.project} color={row.original.color} />
  }),
  columnHelper.accessor('totalTasks', {
    header: 'Impact',
    cell: ({ row }) => (
      <Typography className='font-medium'>
        <span>Public API</span>
      </Typography>
    )
  }),
  columnHelper.accessor('totalTasks', {
    header: 'AI Fix Available',
    cell: ({ row }) => (
      <Typography className='font-medium text-center'>
        <span>Yes</span>
      </Typography>
    )
  }),
  columnHelper.accessor('value', {
    header: 'Action',
    cell: ({ row }) => <Chip label={'Fix Now'} color='primary' onClick={() => console.log('click')} />
  })
]

const AiFixPanel = () => {
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
        title='AI Fix Panel'
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

export default AiFixPanel
