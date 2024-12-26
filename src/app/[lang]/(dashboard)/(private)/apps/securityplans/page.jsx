// MUI Imports
import Grid from '@mui/material/Grid'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import Header from '@/views/dashboards/securityPlans/Header'
import VulnerabilityScanCard from '@/views/dashboards/securityPlans/scan'
import ScanList from '@/views/dashboards/securityPlans/scanList'

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

const SecurityPlans = async () => {
  // Vars
  const data = await getInvoiceData()

  const cards = [
    {
      title: 'Basic Security Plan',
      description:
        'The Application Security Plan is designed as a foundational security guide for beginners, encompassing essential tools like Static Application Security Testing (SAST), Software Composition Analysis (SCA).',
      tags: ['AppSec', 'Beginner'],
      colors: ['#4c5e83', '#343453'],
      controls: '0 / 4',
      score: '10',
      page: '/apps/ecommerce/applicationSecurity'
    },
    {
      title: 'FTR',
      description:
        'Jit will help your company on your journey of becoming an AWS partner. Jit accelerates AWS Foundational Technical Reviews by automating and guiding you through the process. By achieving an approved FTR.',
      tags: ['Cloud Security', 'Cloud'],
      colors: ['#94a2eb', '#343453'],
      controls: '0 / 51',
      score: '20',
      page: '/apps/ecommerce/cloudSecurity'
    },
    {
      title: ' Intermediate Security Plan',
      description:
        'The Jit Max Security Plan offers the highest level of security across the entire SDLC, integrating all available controls to safeguard software development, deployment, and maintenance comprehensively.',
      tags: ['AppSec', 'Advanced'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 18',
      score: '10%',
      page: '/apps/ecommerce/maxSecurity'
    },
    {
      title: 'Max Security Plan',
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
      <Header />
      {cards.map((card, index) => {
        return (
          <Grid item xs={12} md={6} key={index}>
            <SecurityCard cardInfo={card} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default SecurityPlans
