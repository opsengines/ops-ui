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
      id: 'FTR-001',
      title: 'Confirm your hosting model',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: 'Success'
    },
    {
      id: 'FTR-002',
      title: 'Enable AWS Business Support (or greater) on all production AWS accounts',
      tools: 'Gitleaks',
      active: false,
      findings: '0'
    },
    {
      id: 'FTR-003',
      title: 'Conduct periodic architecture reviews (minimum once every year)',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0'
    },
    {
      id: 'FTR-004',
      title: 'Review the AWS Shared Responsibility Models for Security and Resiliency',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'FTR-005',
      title: 'Use root user only by exception',
      tools: 'Syft',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'FTR Security Plan'
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
