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

const SecurityLeadPlan = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'OE-001',
      title: 'Generate audit-ready reports (GDPR, PCI-DSS, HIPAA) ',
      tools: 'Semgrep',
      category: 'Compliance',
      active: true,
      color: 'green',
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: 'Monitor adherence to internal policies',
      tools: 'Gitleaks',
      category: 'Compliance',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: 'Secure cloud configurations ',
      tools: 'Semgrep, Trivy, npm-audit',
      category: 'CSPM',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: 'Detect runtime misconfigurations',
      tools: 'Syft',
      category: 'CSPM',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-005',
      title: 'Track trends in vulnerabilities ',
      tools: 'Syft',
      category: 'Threat',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-006',
      title: 'Ensure consistent reporting to stakeholders',
      tools: 'Syft',
      color: 'blue',
      category: 'Threat',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-007',
      title: 'Real-time tracking of application security posture',
      tools: 'Syft',
      color: 'green',
      category: 'Monitoring',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'CISO Compliance and Governance Scan Plan'
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

export default SecurityLeadPlan
