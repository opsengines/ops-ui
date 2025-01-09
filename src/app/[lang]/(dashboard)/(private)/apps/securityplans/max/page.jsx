// MUI Imports
import Grid from '@mui/material/Grid'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import VulnerabilityScanCard from '@/views/dashboards/securityPlans/scan'
import Header from '@/views/apps/securityplanengine/Header'
import ScanList from '@/views/apps/securityplanengine/ScanList'

const maxSecurityPlan = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'Max-001',
      title: 'Scan your code for vulnerabilities (SAST)',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: 'Success'
    },
    {
      id: 'Max-002',
      title: 'Scan code for hard-coded secrets',
      tools: 'Gitleaks',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-003',
      title: 'Scan your code dependencies for vulnerabilities (SCA)',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-004',
      title: 'Generate a Software Bill of Materials (SBOM)',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-005',
      title: 'Scan your code for license violations',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-006',
      title: 'Generate a Software Bill of Materials (SBOM)',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-007',
      title: 'Scan your infrastructure-as-code (IaC) for misconfigurations',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-008',
      title: 'Scan infrastructure for runtime misconfigurations',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-009',
      title: 'Scan infrastructure for runtime misconfigurations (Azure)',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-010',
      title: 'Scan your Dockerfiles for vulnerabilities',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-011',
      title: 'Verify that the users of your AWS accounts have enabled MFA',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-012',
      title: 'Scan Kubernetes configuration files',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-013',
      title: 'Import AWS Security Hub Findings',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-014',
      title: 'Scan your API for vulnerabilities',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-015',
      title: 'Scan your web application for vulnerabilities',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-016',
      title: 'Verify that MFA for your GitHub organization is enabled',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-017',
      title: 'Verify that Github Branch Protection is properly configured',
      tools: 'Syft',
      active: false,
      findings: '0'
    },
    {
      id: 'Max-018',
      title: 'Detect GitHub misconfigurations',
      tools: 'Syft',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'Max Security Plan'
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

export default maxSecurityPlan
