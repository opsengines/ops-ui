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

const BasicSecurityPlan = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'OE-001',
      title: 'Scan your code for vulnerabilities (SAST)',
      tools: 'Semgrep',
      category: 'SAST',
      active: true,
      color: 'green',
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: 'Scan code for hard-coded secrets',
      tools: 'Gitleaks',
      category: 'SAST',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: 'Validate secure configurations for sensitive files',
      tools: 'Semgrep, Trivy, npm-audit',
      category: 'SAST',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: 'Scan dependencies for vulnerabilities',
      tools: 'Syft',
      category: 'SCA',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-005',
      title: ' Identify license compliance issues',
      tools: 'Syft',
      category: 'SCA',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-006',
      title: 'Map risky transitive dependencies',
      tools: 'Syft',
      color: 'blue',
      category: 'SCA',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-007',
      title: 'Scan APIs for injection attacks ',
      tools: 'Syft',
      color: 'purple',
      category: 'API',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-008',
      title: 'Detect authentication flaws',
      tools: 'Syft',
      category: 'API',
      color: 'purple',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-008',
      title: ' Validate authorization mechanisms',
      tools: 'Syft',
      color: 'purple',
      category: 'API',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'Developer Scan Plan'
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} className='self-end'>
        <Header data={headerContent} />
      </Grid>
      <div className='ml-[84%] mt-[20px] gap-5'>
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

export default BasicSecurityPlan
