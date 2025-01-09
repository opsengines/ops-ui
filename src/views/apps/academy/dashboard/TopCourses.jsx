// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Vars
const data = [
  { title: 'Videography Basic Design Course', views: '1.2k', icon: 'ri-video-download-line', color: 'primary' },
  { title: 'Basic Front-end Development Course', views: '834', icon: 'ri-code-view', color: 'info' },
  { title: 'Basic Fundamentals of Photography', views: '3.7k', icon: 'ri-image-2-line', color: 'success' },
  { title: 'Advance Dribble Base Visual Design', views: '2.5k', icon: 'ri-palette-line', color: 'warning' },
  { title: 'Your First Singing Lesson', views: '948', icon: 'ri-music-2-line', color: 'error' }
]

const TopCourses = () => {
  return (
    <Card className='bs-full'>
      <CardHeader
        title='CVE Context'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent className='flex flex-col gap-[1.625rem]'>
        <div className='flex justify-around gap-4'>
          <Typography variant='overline'>Vulnerability Id</Typography>
          <Typography variant='overline' className='ml-12'>
            Description
          </Typography>
          <Typography variant='overline'>Severity</Typography>
        </div>
        {data.map((item, i) => (
          <div key={i} className='flex justify-between items-center gap-4'>
            <div className='flex items-center w-[33%] justify-around'>
              <CustomAvatar variant='rounded' skin='light' color={item.color}>
                <i className={item.icon} />
              </CustomAvatar>
              <Typography className='font-medium flex-1 ml-4' color='text.primary'>
                {item.title}
              </Typography>
            </div>
            <div className='flex justify-evenly'>
              <Typography>Description</Typography>
            </div>
            <Chip label={`${item.views} Views`} variant='tonal' size='small' />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TopCourses
