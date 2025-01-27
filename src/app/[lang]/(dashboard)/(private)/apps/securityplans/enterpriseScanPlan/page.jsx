// MUI Imports
import Grid from '@mui/material/Grid'

import { Button } from '@mui/material'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'

import ComingSoon from '@/views/pages/misc/ComingSoon'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import VulnerabilityScanCard from '@/views/dashboards/securityPlans/scan'
import Header from '@/views/apps/securityplanengine/Header'
import ScanList from '@/views/apps/securityplanengine/ScanList'

const EnterpriseScanPLan = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'OE-001',
      title: 'Code-level security scans ',
      tools: 'Semgrep',
      category: 'Repository',
      active: true,
      color: 'green',
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: 'Supply chain monitoring ',
      tools: 'Gitleaks',
      category: 'Repository',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: 'Software inventory generation',
      tools: 'Semgrep, Trivy, npm-audit',
      category: 'Repository',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: 'Analyze running applications for real-world vulnerabilities ',
      tools: 'Syft',
      category: 'DAST',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-005',
      title: 'Validate web application security',
      tools: 'Syft',
      category: 'DAST',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-006',
      title: 'Scan APIs for misconfigurations',
      tools: 'Syft',
      color: 'blue',
      category: 'DAST',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-007',
      title: 'Audit cloud environments for compliance gaps ',
      tools: 'Syft',
      color: 'purple',
      category: 'CSPM',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-008',
      title: ' Detect runtime misconfigurations ',
      tools: 'Syft',
      category: 'CSPM',
      color: 'purple',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-009',
      title: 'Validate Kubernetes configurations',
      tools: 'Syft',
      color: 'purple',
      category: 'CSPM',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-010',
      title: 'Secure pipelines and container registries ',
      tools: 'Syft',
      color: 'green',
      category: 'CI/CD',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-011',
      title: 'Validate deployment practices',
      tools: 'Syft',
      category: 'CI/CD',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-012',
      title: 'Protect APIs with runtime monitoring ',
      tools: 'Syft',
      color: 'blue',
      category: 'API',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-013',
      title: 'Detect runtime vulnerabilities',
      tools: 'Syft',
      color: 'blue',
      category: 'API',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-014',
      title: 'Generate audit-ready reports for GDPR, PCI-DSS, and HIPAA',
      tools: 'Syft',
      category: 'Compliance',
      color: 'purple',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'Enterprise Comprehensive Scan Plan'
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} className='self-end'>
        <Header data={headerContent} />
      </Grid>
      <div className='ml-[80%] mt-[20px] gap-4 flex'>
        <Button variant='outlined'>View Results</Button>
        <Button className='ml-5' variant='outlined'>
          Scan
        </Button>
      </div>
      <Grid item xs={12} md={12}>
        <ScanList scans={scans} />
      </Grid>
    </Grid>
  )
}

export default EnterpriseScanPLan
