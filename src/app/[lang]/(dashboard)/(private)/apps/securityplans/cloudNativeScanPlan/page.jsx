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

const CloudNativeScanPlan = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'OE-001',
      title: 'Scan Docker and Kubernetes containers for vulnerabilities ',
      tools: 'Semgrep',
      category: 'Container',
      active: true,
      color: 'green',
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: ' Audit container compliance ',
      tools: 'Gitleaks',
      category: 'Container',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: 'Analyze runtime misconfigurations',
      tools: 'Semgrep, Trivy, npm-audit',
      category: 'Container',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: 'Audit cloud configurations ',
      tools: 'Syft',
      category: 'CSPM',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-005',
      title: 'Verify IAM policies ',
      tools: 'Syft',
      category: 'CSPM',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-006',
      title: 'Analyze IaC files for compliance gaps',
      tools: 'Syft',
      color: 'blue',
      category: 'CSPM',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-007',
      title: 'Protect APIs from injection attacks ',
      tools: 'Syft',
      color: 'purple',
      category: 'API',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-008',
      title: ' Detect unauthorized access',
      tools: 'Syft',
      category: 'API',
      color: 'purple',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-008',
      title: 'Identify data exposure risks',
      tools: 'Syft',
      color: 'purple',
      category: 'API',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'Cloud Native Scan Plan'
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

export default CloudNativeScanPlan
