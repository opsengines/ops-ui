'use client'

import { useParams } from 'next/navigation'

// MUI Imports
import { Card, CardContent, Typography, Button, Chip } from '@mui/material'

// MUI Icons
import {
  Code as CodeIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
  Cloud as CloudIcon,
  Visibility as VisibilityIcon,
  Gavel as GavelIcon,
  Insights as InsightsIcon,
  Group as GroupIcon
} from '@mui/icons-material'

const SecurityCard = ({ cardInfo }) => {
  const params = useParams()
  const { lang: locale } = params || {} // Ensure params exists

  // Map for icons
  const iconMap = {
    'Developer Scan Plan': <CodeIcon color='primary' sx={{ fontSize: 60, margin: 'auto' }} />,
    'DevOps Scan Plan': <BuildIcon color='primary' sx={{ fontSize: 60, margin: 'auto' }} />,
    'Enterprise Comprehensive Scan Plan': <SecurityIcon color='primary' sx={{ fontSize: 60, margin: 'auto' }} />,
    'Cloud-Native Security Scan Plan': <CloudIcon color='primary' sx={{ fontSize: 60, margin: 'auto' }} />,
    'Security Lead Visibility Scan Plan': <VisibilityIcon color='primary' sx={{ fontSize: 60, margin: 'auto' }} />,
    'CISO Compliance Scan Plan': <GavelIcon color='primary' sx={{ fontSize: 60, margin: 'auto' }} />,
    'CTO Strategic Insights Scan Plan': <InsightsIcon color='primary' sx={{ fontSize: 60, margin: 'auto' }} />,
    'Engineering Manager Scan Plan': <GroupIcon color='primary' sx={{ fontSize: 60, margin: 'auto' }} />
  }

  const renderIcon = title => iconMap[title] || null

  return (
    <Card
      sx={{
        width: '100%',
        height: 320,
        color: 'white',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        p: 2
      }}
    >
      <CardContent sx={{ p: 0, textAlign: 'center' }}>
        {/* Dynamic Icon */}
        <div>{renderIcon(cardInfo?.title)}</div>

        {/* Title */}
        <Typography variant='h6' sx={{ mt: 3, textAlign: 'center' }}>
          {cardInfo?.title || 'No Title'}
        </Typography>

        {/* Description */}
        <Typography variant='body2' sx={{ mt: 2 }}>
          {cardInfo?.description || 'No Description'}
        </Typography>

        {/* Tags */}
        <div style={{ marginTop: '20px' }}>
          {cardInfo?.tags?.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ padding: '1px', marginTop: '5px', marginRight: '3px' }} />
          ))}
        </div>

        {/* Button */}
        <Button
          variant='contained'
          sx={{
            mt: 5,
            backgroundColor: 'pimary',
            textTransform: 'none',
            width: '100%',
            fontWeight: 'bold'
          }}
        >
          Scan Plan
        </Button>
      </CardContent>
    </Card>
  )
}

export default SecurityCard
