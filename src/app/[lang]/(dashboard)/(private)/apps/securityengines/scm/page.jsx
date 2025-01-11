import Grid from '@mui/material/Grid'

// MUI Imports
import SecurityPlansHeader from '@/views/apps/securityplans/Header'
import ScanList from '@/views/apps/securityplans/Scan'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import Scm from '@/views/apps/securityplanengine/SCM'

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

const SCM = async () => {
  // Vars
  const headerData = {
    title: 'SCM'
  }

  const scans = [
    {
      scanId: 'SCM-001',
      courseTitle: 'Scan code dependencies for known vulnerabilities',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: true,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error'
    },
    {
      scanId: 'SCM-002',
      courseTitle: 'Identify license compliance issues',
      tools: 'Gitleaks',
      active: false,
      findings: '0',
      status: false,
      time: '',
      logo: 'ri-angularjs-line',
      color: 'error'
    },
    {
      scanId: 'SCM-003',
      courseTitle: 'Detect outdated or deprecated libraries.',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0',
      status: false,
      time: '',
      logo: 'ri-angularjs-line',
      color: 'error'
    },
    {
      scanId: 'SCM-004',
      courseTitle: 'Map dependency trees to identify risky transitive dependencies.',
      tools: 'Syft',
      active: false,
      findings: '0',
      status: false,
      time: '',
      logo: 'ri-angularjs-line',
      color: 'error'
    }
  ]

  return <Scm scans={scans} />
}

export default SCM
