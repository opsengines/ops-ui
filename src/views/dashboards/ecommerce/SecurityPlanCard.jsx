'use client'

import { useParams } from 'next/navigation'

//MUI Imports
import { Card, CardContent, Typography, Box, Button, CircularProgress } from '@mui/material'

import RadialBarChart from './RadialBarChart'

const SecurityCard = ({ cardInfo }) => {
  const params = useParams()
  const { lang: locale } = params

  return (
    <Card
      sx={{
        width: '100%',
        height: '300px',
        backgroundColor: '#1C1C2B',
        color: 'white',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        p: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '30%'
        }}
      >
        <RadialBarChart />
      </Box>
      <CardContent sx={{ p: 0 }} style={{ width: '60%', marginLeft: '10%' }}>
        <Typography variant='h6' sx={{ mt: 2 }} color={'white'}>
          {cardInfo.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <Typography
            sx={{
              backgroundColor: `${cardInfo.colors[0]}`,
              color: 'white',
              borderRadius: 1,
              px: 1,
              py: 0.5,
              fontSize: 12
            }}
          >
            {cardInfo.tags[0]}
          </Typography>
          <Typography
            sx={{
              backgroundColor: `${cardInfo.colors[1]}`,
              color: 'white',
              borderRadius: 1,
              px: 1,
              py: 0.5,
              fontSize: 12
            }}
          >
            {cardInfo.tags[1]}
          </Typography>
        </Box>
        <Typography variant='body2' sx={{ mt: 2, color: '#B0B0C3' }}>
          {cardInfo.description}
        </Typography>
        <Typography sx={{ mt: 2, color: '#B0B0C3', fontSize: 14 }}>Controls Activated: {cardInfo.controls}</Typography>
        <Button
          variant='contained'
          href={`/${locale}/${cardInfo.page}`}
          sx={{
            mt: 2,
            backgroundColor: '#4B4BFF',
            textTransform: 'none',
            width: '100%',
            fontWeight: 'bold'
          }}
        >
          View Plan
        </Button>
      </CardContent>
    </Card>
  )
}

export default SecurityCard
