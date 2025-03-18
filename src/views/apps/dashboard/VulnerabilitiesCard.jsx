// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'
import OptionMenu from '@core/components/option-menu'

// Vars
const data = [
  { title: 'Critical', tasks: 120, progress: 72, color: '#A31D1D' },
  { title: 'High', tasks: 32, progress: 48, color: '#F93827' },
  { title: 'Medium', tasks: 182, progress: 15, color: '#FFD65A' },
  { title: 'Low', tasks: 56, progress: 24, color: '#077d06' }
]

const VulnerabilitiesCard = () => {
  return (
    <Card className='bs-full'>
      <CardHeader
        title='Trending Exploits'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Update', 'Share']} />}
      />
      <CardContent className='flex flex-col gap-6 pbs-1'>
        {data.map((item, i) => (
          <div key={i} className='flex items-center gap-4'>
            <div className='relative flex items-center justify-center'>
              <CircularProgress
                variant='determinate'
                size={54}
                value={100}
                thickness={3}
                className='absolute text-[var(--mui-palette-customColors-trackBg)]'
              />
              <CircularProgress
                variant='determinate'
                size={54}
                value={item.progress}
                thickness={3}
                sx={{ '& .MuiCircularProgress-circle': { strokeLinecap: 'round' }, color: `${item.color}` }}
              />
              <Typography className='absolute font-medium' color='text.primary'>
                {`${item.progress}%`}
              </Typography>
            </div>
            <div className='flex justify-between items-center is-full gap-4'>
              <div>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{`${item.tasks} Vulnerabilities`}</Typography>
              </div>
              <CustomIconButton variant='outlined' color='secondary' className='min-is-fit'>
                <i className='ri-arrow-right-s-line' />
              </CustomIconButton>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default VulnerabilitiesCard
