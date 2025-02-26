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
      <Grid item xs={12} sm={6} md={2} className='self-end'>
        <CardStatWithImage
          stats='59'
          trend='positive'
          title='Total Scans'
          trendNumber='20%'
          chipText='Feb 25'
          chipColor='primary'
          src='/images/illustrations/characters/10.png'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2} className='self-end'>
        <CardStatWithImage
          stats='27'
          trend='negative'
          title='Total Findings'
          trendNumber='20%'
          chipText='Feb 25'
          chipColor='primary'
          src='/images/illustrations/characters/10.png'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2} className='self-end'>
        <CardStatWithImage
          stats='15'
          trend='positive'
          title='Total AI Fix'
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
        <CardWidgetsSalesOverview
          customColors={true}
          title={'Vulnerabilities Overview'}
          labels={['Critical', 'High', 'Medium', 'Low']}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWidgetsSalesOverview
          title='Governance, Risk & Compliance Overview'
          labels={['PCI-DSS', 'ISO 27001', 'NIST SP 800-53', 'HIPAA', 'GDPR']}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Performance
          title='Scan Module Coverage'
          labels={['SAST', 'DAST', 'SCA', 'SBOM', 'CSPM', 'AI/ML', 'Secrets', 'IAC', 'CI/CD']}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Performance title='Vulnerabilities Summary' labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexBarChart title='Top 10 Vulnerabilities' />
      </Grid>
      <Grid item xs={12} md={12}>
        <Vertical data={data.statsVertical} />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
