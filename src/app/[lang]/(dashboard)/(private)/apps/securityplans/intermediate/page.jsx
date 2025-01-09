// MUI Imports
import Grid from '@mui/material/Grid'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import VulnerabilityScanCard from '@/views/dashboards/securityPlans/scan'
import Header from '@/views/apps/securityplanengine/Header'
import ScanList from '@/views/apps/securityplanengine/ScanList'

const ApplicationSecurity = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'IME-001',
      title: 'Scan your code for vulnerabilities (SAST)',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: 'Success'
    },
    {
      id: 'IME-002',
      title: 'Scan code for hard-coded secrets',
      tools: 'Gitleaks',
      active: false,
      findings: '0'
    },
    {
      id: 'IME-003',
      title: 'Scan your code dependencies for vulnerabilities (SCA)',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0'
    },
    {
      id: 'IME-004',
      title: 'Generate a Software Bill of Materials (SBOM)',
      tools: 'Syft',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'Intermediate Security Plan'
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} className='self-end'>
        <Header data={headerContent} />
      </Grid>
      <Grid item xs={12} md={12}>
        <ScanList scans={scans} />
      </Grid>
    </Grid>
  )
}

export default ApplicationSecurity
