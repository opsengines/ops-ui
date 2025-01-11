import Grid from '@mui/material/Grid'

// MUI Imports
import SecurityPlansHeader from '@/views/apps/securityplans/Header'
import ScanList from '@/views/apps/securityplans/Scan'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import DASTPage from '@/views/apps/securityplanengine/DAST'

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

const SAST = async () => {
  //Start

  const scans = [
    {
      scanId: 'DAST-001',
      courseTitle: 'Perform web application security tests ',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: true,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error'
    },
    {
      scanId: 'DAST-002',
      courseTitle: 'Scan APIs for vulnerabilities',
      tools: 'Gitleaks',
      active: false,
      findings: '0',
      status: false,
      time: '',
      logo: 'ri-angularjs-line',
      color: 'error'
    },
    {
      scanId: 'DAST-003',
      courseTitle: 'Detect misconfigurations in web servers or frameworks',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0',
      status: false,
      time: '',
      logo: 'ri-angularjs-line',
      color: 'error'
    },
    {
      scanId: 'DAST-004',
      courseTitle: 'Validate application endpoints for unauthorized access',
      tools: 'Syft',
      active: false,
      findings: '0',
      status: false,
      time: '',
      logo: 'ri-angularjs-line',
      color: 'error'
    }
  ]

  return <DASTPage scans={scans} />
}

export default SAST
