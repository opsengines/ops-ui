// MUI Imports
import Grid from '@mui/material/Grid'

import { CloudCircle } from '@mui/icons-material'

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
      title: 'Developer Blueprint',
      description: 'Secure code and APIs during the development phase for developers',
      tags: ['SAST', 'SCA', 'API'],
      colors: ['#4c5e83', '#343453'],
      controls: '0 / 4',
      score: '10',
      page: '/apps/securityplans/developerScanPlan'
    },
    {
      title: 'DevOps Blueprint',
      description: 'OE will help your company on your journey for cloud security.',
      tags: ['CI/CD', 'IAC', 'Container'],
      colors: ['#94a2eb', '#343453'],
      controls: '0 / 51',
      score: '20',
      page: '/apps/securityplans/devopsScanPlan'
    },
    {
      title: 'Enterprise Comprehensive Blueprint',
      description: 'Full visibility and protection across the SDLC and infrastructure',
      tags: ['SCA', 'SCM', 'SBOM', '+ 6'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/enterpriseScanPlan'
    },
    {
      title: 'Cloud Engineer Security Blueprint',
      description: 'Secure cloud-native applications, environments, and APIs',
      tags: ['Container', 'CSPM', 'API'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/cloudNativeScanPlan'
    },
    {
      title: 'Security Lead Blueprint',
      description: 'Provide insights into vulnerabilities and risk management across teams',
      tags: ['Threat', 'CSPM', 'API'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/securityLeadPlan'
    },
    {
      title: 'CISO Blueprint',
      description: 'Secure cloud-native applications, environments, and APIs.',
      tags: ['Compliance', 'CSPM'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/cisoScanPlan'
    },
    {
      title: 'CTO Blueprint',
      description: 'Align security practices with product strategy and innovation',
      tags: ['Compliance', 'CSPM'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/ctoScanPlan'
    },
    {
      title: 'Engineering Manager Blueprint',
      description: 'Improve team productivity and integrate security seamlessly into workflows',
      tags: ['Compliance', 'CSPM'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/emScanPlan'
    },
    {
      title: 'Healthcare Blueprint',
      description: 'Patient Data Protection, HIPAA Compliance, Secure Medical Devices',
      tags: ['Threat', 'CSPM', 'API'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/securityLeadPlan'
    },
    {
      title: 'Finance Blueprint',
      description: 'Data Encryption, Fraud Detection, PCI DSS Compliance',
      tags: ['Compliance', 'CSPM'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/cisoScanPlan'
    },
    {
      title: 'Energy Blueprint',
      description: ' SCADA Security, Infrastructure Resilience, Threat Detection',
      tags: ['Compliance', 'CSPM'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/ctoScanPlan'
    },
    {
      title: 'Government Blueprint',
      description: 'Data Sovereignty, Secure Communication, Regulatory Compliance',
      tags: ['Compliance', 'CSPM'],
      colors: ['#4c5e83', '#b76e79'],
      controls: '0 / 2',
      score: '27',
      page: '/apps/securityplans/emScanPlan'
    }
  ]

  return (
    <Grid container spacing={6}>
      <Header />
      {cards.map((card, index) => {
        return (
          <Grid item xs={12} md={3} key={index}>
            <SecurityCard cardInfo={card} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default SecurityPlans
