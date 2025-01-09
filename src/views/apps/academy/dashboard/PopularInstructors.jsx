// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Vars
const data = [
  {
    name: 'ISO27001:2022',
    profession: '',
    totalCourses: 33,
    avatar: '/images/avatars/1.png'
  },
  {
    name: 'Identify insecure coding patterns',
    profession: '',
    totalCourses: 52,
    avatar: '/images/avatars/2.png'
  },
  {
    name: 'Scan for code vulnerabilities',
    profession: '',
    totalCourses: 12,
    avatar: '/images/avatars/3.png'
  },
  {
    name: 'Validate secure configurations for sensitive files',
    profession: '',
    totalCourses: 8,
    avatar: '/images/avatars/4.png'
  }
]

const PopularInstructors = () => {
  return (
    <Card className='bs-full'>
      <CardHeader
        title='Compliance'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Update', 'Share']} />}
      />
      <Divider />
      <div className='flex justify-between plb-4 pli-5'>
        <Typography variant='overline'>Standard</Typography>
        <Typography variant='overline'>Category</Typography>
        <Typography variant='overline'>Control</Typography>
        <Typography variant='overline'>Description</Typography>
      </div>
      <Divider />
      <CardContent className='flex flex-col gap-4'>
        {data.map((item, i) => (
          <div key={i} className='flex justify-between items-center gap-4'>
            <div className='flex items-center justify-between'>
              <CustomAvatar size={34} src={item.avatar} />
              <Typography variant='overline'>{item.name}</Typography>
            </div>
            <Typography variant='overline'>Category</Typography>
            <Typography variant='overline'>Control</Typography>
            <Typography variant='overline'>Description</Typography>
            {/* <div className='flex justify-between items-center is-full gap-4'>
              <div className='flex gap-1'>
                <Typography className='font-medium' color='text.primary'>
                  {item.name}
                </Typography>
                <Typography className='font-medium' color='text.primary'>
                  Control
                </Typography>
                <Typography variant='caption' color='text.secondary' className='font-normal'>
                  {item.profession}
                </Typography>
              </div>
              <Typography color='text.primary'>{item.totalCourses}</Typography>
            </div> */}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default PopularInstructors
