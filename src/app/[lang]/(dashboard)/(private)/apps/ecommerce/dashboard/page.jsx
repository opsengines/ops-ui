// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Congratulations from '@views/dashboards/ecommerce/Congratulations'
import CardStatVertical from '@components/card-statistics/Vertical'
import TotalProfitStackedBar from '@views/dashboards/ecommerce/TotalProfitStackedBar'
import TotalSales from '@views/dashboards/ecommerce/TotalSales'
import LineChartWithShadow from '@views/dashboards/ecommerce/LineChartWithShadow'
import RadialBarChart from '@views/dashboards/ecommerce/RadialBarChart'
import Transactions from '@views/dashboards/ecommerce/Transactions'
import NewVisitors from '@views/dashboards/ecommerce/NewVisitors'
import WebsiteStatistics from '@views/dashboards/ecommerce/WebsiteStatistics'
import Table from '@views/dashboards/ecommerce/Table'
import MeetingSchedule from '@views/dashboards/ecommerce/MeetingSchedule'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'

/**
 * If you need data using an API call, uncomment the below API code,
 * update the `process.env.API_URL` variable in the `.env` file found at
 * root of your project and also update the API endpoints like `/apps/user-list`
 * in the example. Also, remove the above server action import and the action
 * itself from the `src/app/server/actions.ts` file to clean up unused code
 * because we've used the server action for getting our static data.
 */

// const getData = async () => {
//   // Vars
//   const res = await fetch(`${process.env.API_URL}/apps/invoice`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch invoice data')
//   }

//   return res.json()
// }

const DashboardECommerce = async () => {
  // Vars
  const data = await getInvoiceData()

  const cards = [
    {
      title: 'Application Security Plan',
      description:
        'The Application Security Plan is designed as a foundational security guide for beginners, encompassing essential tools like Static Application Security Testing (SAST), Software Composition Analysis (SCA).',
      tags: ['AppSec', 'Beginner'],
      colors: ['#4c5e83', '#343453'],
      controls: '0 / 4',
      score: '10',
      page: '/apps/ecommerce/applicationSecurity'
    },
    {
      title: 'Cloud Security Plan',
      description:
        'Jit will help your company on your journey of becoming an AWS partner. Jit accelerates AWS Foundational Technical Reviews by automating and guiding you through the process. By achieving an approved FTR.',
      tags: ['Cloud Security', 'Cloud'],
      colors: ['#94a2eb', '#343453'],
      controls: '0 / 51',
      score: '20',
      page: '/apps/ecommerce/cloudSecurity'
    },
    {
      title: ' Max Security Plan',
      description:
        'The Jit Max Security Plan offers the highest level of security across the entire SDLC, integrating all available controls to safeguard software development, deployment, and maintenance comprehensively.',
      tags: ['AppSec', 'Advanced'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 18',
      score: '10%',
      page: '/apps/ecommerce/maxSecurity'
    },
    {
      title: 'Dynamic Application Security Testing',
      description:
        'The Dynamic Application Security Testing Plan leverages a DAST tool to identify and mitigate vulnerabilities in real-time for both web applications and APIs.',
      tags: ['AppSec', 'Advanced'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/ecommerce/applicationSecurity'
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} className='self-end'>
        <Congratulations />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Vulnerabilities'
              stats='13k'
              avatarIcon='ri-money-dollar-circle-line'
              avatarColor='success'
              subtitle='Revenue Increase'
              trendNumber='12%'
              trend='positive'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Resolved'
              stats='12.1k'
              avatarIcon='ri-bank-card-line'
              avatarColor='info'
              subtitle='Daily Transactions'
              trendNumber='38%'
              trend='positive'
            />
          </Grid>
        </Grid>
      </Grid>
      {cards.map((card, index) => {
        return (
          <Grid item xs={12} md={6} key={index}>
            <SecurityCard cardInfo={card} />
          </Grid>
        )
      })}
      {/* <Grid item xs={12} md={6}>
        <SecurityCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <TotalSales />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LineChartWithShadow />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RadialBarChart />
        </Grid>
        <SecurityCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <SecurityCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <SecurityCard />
      </Grid> */}
      {/* <Grid item xs={12} md={6} lg={4}>
        <Transactions />
      </Grid> */}
      {/* <Grid item xs={12} md={6} lg={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Logistics'
              stats='$44k'
              avatarIcon='ri-car-line'
              avatarColor='error'
              subtitle='Revenue Increase'
              trendNumber='42%'
              trend='positive'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Reports'
              stats='268'
              avatarIcon='ri-file-chart-line'
              avatarColor='warning'
              subtitle='System Bugs'
              trendNumber='28%'
              trend='negative'
            />
          </Grid>
          <Grid item xs={12}>
            <NewVisitors />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WebsiteStatistics />
      </Grid>
      <Grid item xs={12} lg={8} className='order-last lg:order-[unset]'>
        <Table invoiceData={data.slice(0, 8)} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MeetingSchedule />
      </Grid> */}
    </Grid>
  )
}

export default DashboardECommerce
