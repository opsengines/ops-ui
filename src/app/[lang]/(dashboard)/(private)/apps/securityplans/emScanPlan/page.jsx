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

const EmScanPlan = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'OE-001',
      title: 'Provide actionable feedback in developer tools (e.g., IDEs, GitHub) ',
      tools: 'Semgrep',
      category: 'Repository',
      active: true,
      color: 'green',
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: 'Scan dependencies for vulnerabilities',
      tools: 'Gitleaks',
      category: 'Repository',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: 'Automate pipeline checks ',
      tools: 'Semgrep, Trivy, npm-audit',
      category: 'Threat',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: 'Secure deployment workflows',
      tools: 'Syft',
      category: 'Threat',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-005',
      title: ' Protect APIs with injection and authentication flaw detection',
      tools: 'Syft',
      category: 'API',
      color: 'purple',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-006',
      title: 'Enable real-time collaboration for incident resolution',
      tools: 'Syft',
      color: 'green',
      category: 'Collaboration',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'Engineering Manager Productivity Scan Plan'
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

export default EmScanPlan
