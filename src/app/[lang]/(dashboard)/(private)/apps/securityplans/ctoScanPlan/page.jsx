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

const CtoScanPlan = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'OE-001',
      title: 'Provide real-time insights into security incidents ',
      tools: 'Semgrep',
      category: 'Monitoring',
      active: true,
      color: 'green',
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: 'Monitor application behavior for anomalies',
      tools: 'Gitleaks',
      category: 'Monitoring',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: 'Automate risk prioritization ',
      tools: 'Semgrep, Trivy, npm-audit',
      category: 'Threat',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: 'Track vulnerability trends',
      tools: 'Syft',
      category: 'Threat',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-005',
      title: 'Monitor risks from third-party libraries and registries ',
      tools: 'Syft',
      category: 'Supply Chain',
      color: 'purple',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-006',
      title: 'Prevent supply chain tampering',
      tools: 'Syft',
      color: 'purple',
      category: 'Supply Chain',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-007',
      title: ' Integrate findings into Jira, Slack, or GitHub workflows',
      tools: 'Syft',
      color: 'green',
      category: 'Collaboration',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'CTO Strategic Insights Scan Plan'
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

export default CtoScanPlan
