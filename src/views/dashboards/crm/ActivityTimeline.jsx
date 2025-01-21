'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = () => {
  return (
    <Card>
      <CardHeader title='Activities' />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  12 Vulnerabilities have been resolved
                </Typography>
                <Typography variant='caption' color='text.disabled'>
                  12 min ago
                </Typography>
              </div>
              <Typography className='mbe-2.5'>Vulnerabilities have been resolved</Typography>
              <div className='flex items-center gap-2.5 is-fit plb-[5px] pli-2.5 rounded bg-actionHover'>
                <img height={20} alt='invoice.pdf' src='/images/icons/pdf-document.png' />
                <Typography className='font-medium'>findings.pdf</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  Repo Scan
                </Typography>
                <Typography variant='caption' color='text.disabled'>
                  45 min ago
                </Typography>
              </div>
              <Typography className='mbe-2.5'>frontEnd-prod branch scanned</Typography>
              <div className='flex items-center gap-2.5'>
                <Avatar src='/images/avatars/1.png' className='bs-8 is-8' />
                <div className='flex flex-col flex-wrap gap-0.5'>
                  <Typography variant='body2' className='font-medium'>
                    Ravi Sharma
                  </Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  Create a new report for resolved findings
                </Typography>
                <Typography variant='caption' color='text.disabled'>
                  2 Day Ago
                </Typography>
              </div>
              <Typography>Findings for Last Week (15/01 - 21/01)</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
