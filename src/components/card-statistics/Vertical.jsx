'use client'

import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Components Imports
import { PolicyOutlined } from '@mui/icons-material'

import { Box } from '@mui/material'

const CardStatVertical = props => {
  // Props
  const { title, stats, multiple, values } = props

  const [text, setText] = useState(title)
  const [val, setVal] = useState(stats)

  return (
    <Card className='bs-full'>
      <CardContent>
        <div className='flex justify-between is-full mbe-5'>
          <div className='flex flex-col gap-1'>
            <Typography color='text.primary' className='font-medium'>
              {text}
            </Typography>
            <div className='flex gap-x-2 gap-y-0.5 items-center flex-wrap'>
              <Typography variant='h4'>{val}</Typography>
            </div>
          </div>
          {/* <CustomAvatar color={avatarColor} skin={avatarSkin} size={40} className='shadow-xs'> */}
          <PolicyOutlined color='primary' />
          {/* </CustomAvatar> */}
        </div>
        {multiple ? (
          <Box display='flex' sx={{ width: '100%' }} gap={2} alignItems='center'>
            {/* Dot 1 */}
            <Box
              onMouseEnter={() => {
                setText(values[0].label)
                setVal(values[0].value)
              }}
              onMouseLeave={() => {
                setText(title)
                setVal(stats)
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#8657e1',
                cursor: 'pointer'
              }}
            />
            <Typography variant='body2'>Active</Typography>

            {/* Dot 2 */}
            <Box
              onMouseEnter={() => {
                setText(values[1].label)
                setVal(values[1].value)
              }}
              onMouseLeave={() => {
                setText(title)
                setVal(stats)
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#737371',
                cursor: 'pointer'
              }}
            />
            <Typography variant='body2'>Inactive</Typography>
          </Box>
        ) : null}
      </CardContent>
    </Card>
  )
}

export default CardStatVertical
