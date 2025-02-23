// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Components Imports
import { PolicyOutlined } from '@mui/icons-material'

const CardStatVertical = props => {
  // Props
  const { title, stats, avatarIcon, avatarColor, trendNumber, trend, subtitle, avatarSkin, avatarSize, moreOptions } =
    props

  return (
    <Card className='bs-full'>
      <CardContent>
        <div className='flex justify-between is-full mbe-5'>
          <div className='flex flex-col gap-1'>
            <Typography color='text.primary' className='font-medium'>
              {title}
            </Typography>
            <div className='flex gap-x-2 gap-y-0.5 items-center flex-wrap'>
              <Typography variant='h4'>{stats}</Typography>
            </div>
          </div>
          {/* <CustomAvatar color={avatarColor} skin={avatarSkin} size={40} className='shadow-xs'> */}
          <PolicyOutlined color='primary' />
          {/* </CustomAvatar> */}
        </div>
        <div className='flex'>
          {/* {title === 'New Project' ? (
            <div className='flex flex-col gap-1'>
              <Typography color='text.primary' className='font-medium'>
                {title}
              </Typography>
              <div className='flex gap-x-2 gap-y-0.5 items-center flex-wrap'>
                <Typography variant='h4'>{stats}</Typography>
              </div>
            </div>
          ) : null} */}
        </div>
      </CardContent>
    </Card>
  )
}

export default CardStatVertical
