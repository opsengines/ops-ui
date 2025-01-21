import { Card, CardMedia, IconButton, CardContent, Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

const ConnectorCard = ({ name, image, connected, handleClick = () => {} }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        gap: 2,
        borderRadius: '8px',
        boxShadow: 3,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6
        },
        height: '180px'
      }}
      onClick={() => handleClick()}
    >
      <CardMedia
        component='img'
        image={image}
        alt={name}
        sx={{
          width: 60,
          height: 60,
          borderRadius: '8px',
          marginTop: '15px'
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant='h6' component='div' style={{ textAlign: 'center' }}>
          {name}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color={connected ? 'success' : 'error'}>
            {connected ? <CheckCircleIcon /> : <CancelIcon />}
          </IconButton>
          <Typography variant='body2' color={connected ? 'success.main' : 'error.main'}>
            {connected ? 'Connected' : 'Not Configured'}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default ConnectorCard
