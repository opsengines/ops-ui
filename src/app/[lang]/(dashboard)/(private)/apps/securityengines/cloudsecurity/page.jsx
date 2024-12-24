import Grid from '@mui/material/Grid'

// MUI Imports
import SecurityPlansHeader from '@/views/apps/securityplans/Header'
import ScanList from '@/views/apps/securityplans/Scan'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import ComingSoon from '@/views/pages/misc/ComingSoon'

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

const CloudSecurity = async () => {
  const headerData = {
    title: 'Cloud Security'
  }

  const scans = [
    {
      id: 'CS-001',
      title: 'Scan Infrastructure-as-Code (IaC) files for misconfigurations ',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: 'Success'
    },
    {
      id: 'CS-002',
      title: 'Detect runtime misconfigurations across environments ',
      tools: 'Gitleaks',
      active: false,
      findings: '0'
    },
    {
      id: 'CS-003',
      title: 'Analyze Dockerfiles for vulnerabilities and hardening recommendations.',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0'
    },
    {
      id: 'CS-004',
      title: 'Verify IAM configurations for MFA and least privilege.',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'CS-005',
      title: 'Audit Kubernetes YAML files for insecure configurations.',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'CS-006',
      title: 'Import findings from AWS Security Hub, Azure Security Center, or GCP Security Command Center.',
      tools: 'Syft',
      active: false,
      findings: '0'
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} className='self-end'>
        <SecurityPlansHeader data={headerData} />
      </Grid>
      <Grid item xs={12} md={12}>
        <ScanList data={scans} />
      </Grid>
    </Grid>
  )
}

export default CloudSecurity
