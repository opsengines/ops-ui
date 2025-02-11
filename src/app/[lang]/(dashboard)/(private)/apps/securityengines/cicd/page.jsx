import Grid from '@mui/material/Grid'

// MUI Imports
import SecurityPlansHeader from '@/views/apps/securityplans/Header'
import ScanList from '@/views/apps/securityplans/Scan'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import UpgradePlan from '@/views/pages/misc/UpgradePlan'

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

const CICD = async () => {
  const headerData = {
    title: 'CI / CD Security'
  }

  const scans = [
    {
      id: 'CICD-001',
      title: 'Verify MFA is enabled for GitHub/GitLab/Bitbucket organizations.',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: 'Success'
    },
    {
      id: 'CICD-002',
      title: 'Ensure proper GitHub Branch Protection rules are configured.',
      tools: 'Gitleaks',
      active: false,
      findings: '0'
    },
    {
      id: 'CICD-003',
      title: 'Detect misconfigurations in CI/CD pipelines.',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0'
    },
    {
      id: 'CICD-004',
      title: 'Scan container images for vulnerabilities and compliance issues.',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'CICD-005',
      title: 'Validate CI/CD secrets management practices.',
      tools: 'Syft',
      active: false,
      findings: '0'
    }
  ]

  return <UpgradePlan />
}

export default CICD
