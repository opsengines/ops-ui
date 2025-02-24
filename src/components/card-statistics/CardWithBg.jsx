'use client'

// MUI Imports
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { Button, CardMedia } from '@mui/material'

//Component Imports
import { Add, IntegrationInstructionsOutlined, PlusOneOutlined } from '@mui/icons-material'

import { useTheme } from '@emotion/react'

const Card = styled(MuiCard)(({ color }) => ({
  transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out, margin 0.3s ease-in-out',
  borderBottomWidth: '2px',
  borderBottomColor: `var(--mui-palette-${color}-darkerOpacity)`,
  '[data-skin="bordered"] &:hover': {
    boxShadow: 'none'
  },
  '&:hover': {
    borderBottomWidth: '3px',
    borderBottomColor: `var(--mui-palette-${color}-main) !important`,
    boxShadow: 'var(--mui-customShadows-xl)',
    marginBlockEnd: '-1px'
  }
}))

const CardWithBG = props => {
  // Props
  const { title, stats, trendNumber, avatarIcon, color, icons } = props

  const theme = useTheme()

  return (
    <Card color={color || 'primary'}>
      <CardContent className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <Typography color='text.primary'>{title}</Typography>
          <IntegrationInstructionsOutlined color='primary' />
        </div>
        <div className='flex gap-3'>
          {icons?.length ? (
            icons?.map((icon, index) => (
              <>
                <div
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    borderBottom: '5px solid green',
                    borderRadius: '10px',
                    width: 35,
                    height: 35,
                    padding: '5px'
                  }}
                >
                  <CardMedia
                    component='img'
                    image={icon}
                    alt={title}
                    sx={{
                      width: 25,
                      height: 25
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: `${theme?.palette?.primary?.main}`,
                    borderRadius: '10px',
                    width: 35,
                    height: 35,
                    padding: '5px'
                  }}
                >
                  <Add sx={{ color: 'white' }} />
                </div>
              </>
            ))
          ) : (
            <div
              style={{
                backgroundColor: `${theme?.palette?.primary?.main}`,
                borderRadius: '10px',
                width: 35,
                height: 35,
                padding: '5px'
              }}
            >
              <Add sx={{ color: 'white' }} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default CardWithBG
