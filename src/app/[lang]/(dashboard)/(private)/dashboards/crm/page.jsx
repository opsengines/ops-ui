// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CardStatWithImage from '@components/card-statistics/Character'
import Transactions from '@views/dashboards/crm/Transactions'
import CardWidgetsSalesOverview from '@views/dashboards/crm/SalesOverview'
import { getStatisticsData } from '@/app/server/actions'
import Performance from '@/views/pages/widget-examples/charts/Performance'
import CustomCard from '@/views/apps/logistics/dashboard/CustomCard'
import Vertical from '@/views/pages/widget-examples/statistics/Vertical'
import ApexBarChart from '@/views/charts/apex/ApexBarChart'

const DashboardCRM = async () => {
  const data = await getStatisticsData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={3} className='self-end'>
        <CardStatWithImage
          stats='1K'
          title='Total Scans'
          trendNumber='11.23%'
          chipColor='primary'
          src='/images/illustrations/characters/9.png'
          chipText={`Feb 25`}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className='self-end'>
        <CardStatWithImage
          stats='2.5k'
          trend='negative'
          title='Total Findings'
          trendNumber='20%'
          chipText='Feb 25'
          chipColor='primary'
          src='/images/illustrations/characters/10.png'
        />
      </Grid>
      <Grid item xs={12} md={6} className='self-end'>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={12} className='self-end'>
        <CustomCard data={data?.dashboardCardData} />
      </Grid>
      {/* <Grid item xs={12} sm={6} md={3}>
        <TotalSales />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RevenueReport />
      </Grid> */}
      <Grid item xs={12} md={6}>
        <CardWidgetsSalesOverview customColors={true} title={'Vulnerabilities Overview'} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWidgetsSalesOverview title='Governance, Risk & Compliance Overview' />
      </Grid>
      <Grid item xs={12} md={3}>
        <Performance title='Scan Coverage' />
      </Grid>
      <Grid item xs={12} md={3}>
        <Performance title='Vulnerabilities Summary' />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexBarChart title='Top Vulnerabilities' subtitle='Month To Date' />
      </Grid>

      {/* <Grid item xs={12} sm={6} lg={4}>
        <UpgradePlan />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <MeetingSchedule />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <DeveloperMeetup />
      </Grid> */}
      <Grid item xs={12} md={12}>
        <Vertical data={data.statsVertical} />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
