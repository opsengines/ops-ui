import Grid from '@mui/material/Grid'

// MUI Imports
import SecurityPlansHeader from '@/views/apps/securityplans/Header'
import ScanList from '@/views/apps/securityplans/Scan'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import SecurityPlanEngine from '@/views/apps/securityplanengine/SecurityPlanEngine'
import Sast from '@/views/apps/securityplanengine/SAST'

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
  // Vars
  const headerData = {
    title: 'SAST'
  }

  const scans = [
    {
      id: 'SAST-001',
      title: 'Scan for code vulnerabilities ',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: 'Success'
    },
    {
      id: 'SAST-002',
      title: 'Detect hard-coded secrets',
      tools: 'Gitleaks',
      active: false,
      findings: '0'
    },
    {
      id: 'SAST-003',
      title: 'Identify insecure coding patterns.',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0'
    },
    {
      id: 'SAST-004',
      title: 'Validate secure configurations for sensitive files ',
      tools: 'Syft',
      active: false,
      findings: '0'
    }
  ]

  return <Sast />
}

export default SAST
