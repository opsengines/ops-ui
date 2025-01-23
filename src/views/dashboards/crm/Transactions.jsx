//MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Vars
const data = [
  {
    stats: '35',
    title: 'Developer',
    color: 'primary',
    icon: 'ri-pie-chart-2-line'
  },
  {
    stats: '22',
    title: 'Security Lead',
    color: 'success',
    icon: 'ri-group-line'
  },
  {
    stats: '9',
    color: 'warning',
    title: 'CISO',
    icon: 'ri-macbook-line'
  }
]

const Transactions = () => {
  return (
    <Card>
      <CardHeader
        title='Custom Dashboard'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Share', 'Update']} />}
        subheader={
          <>
            <span className='font-medium text-textPrimary'>View Custom Dashboard</span>
          </>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color={item.color} className='shadow-xs'>
                  <i className={item.icon}></i>
                </CustomAvatar>
                <div>
                  <Typography>{item.title}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Transactions
