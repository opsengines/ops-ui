'use client'

import { useParams } from 'next/navigation'

//MUI Imports
import { Card, CardContent, Typography, Box, Button, CircularProgress, Chip } from '@mui/material'

import RadialBarChart from './RadialBarChart'

const SecurityCard = ({ cardInfo }) => {
  const params = useParams()
  const { lang: locale } = params

  return (
    <Card
      sx={{
        width: '100%',
        height: '270px',
        color: 'white',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        p: 2
      }}
    >
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '30%'
        }}
      >
        <RadialBarChart />
      </Box> */}
      <CardContent sx={{ p: 0 }} style={{ width: '90%', marginLeft: '5%' }}>
        <Typography variant='h6' sx={{ mt: 5, textAlign: 'center' }}>
          {cardInfo.title}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          {cardInfo.description}
        </Typography>
        <Button
          variant='contained'
          href={`/${locale}/${cardInfo.page}`}
          sx={{
            mt: 10,
            backgroundColor: '#4B4BFF',
            textTransform: 'none',
            width: '100%',
            fontWeight: 'bold'
          }}
        >
          View Plan
        </Button>
        <div style={{ marginTop: '10px' }}>
          {cardInfo?.tags.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ padding: '1px', marginTop: '5px', marginRight: '3px' }} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SecurityCard
