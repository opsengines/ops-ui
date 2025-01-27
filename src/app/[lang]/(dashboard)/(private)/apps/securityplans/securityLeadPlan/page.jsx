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
      title: 'Automate remediation suggestions ',
      tools: 'Semgrep',
      category: 'Threat',
      active: true,
      color: 'green',
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: 'Prioritize vulnerabilities based on risk context (exploitability, impact)',
      tools: 'Gitleaks',
      category: 'Threat',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: 'Discover exposed assets and endpoints ',
      tools: 'Semgrep, Trivy, npm-audit',
      category: 'ASM',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: ' Monitor shadow IT resources ',
      tools: 'Syft',
      category: 'ASM',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-005',
      title: 'Assess external attack vectors',
      tools: 'Syft',
      category: 'ASM',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-006',
      title: 'Track third-party dependencies ',
      tools: 'Syft',
      color: 'blue',
      category: 'Repository',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-007',
      title: 'Monitor supply chain risks ',
      tools: 'Syft',
      color: 'purple',
      category: 'Repository',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-008',
      title: 'Generate SBOM reports',
      tools: 'Syft',
      category: 'Repository',
      color: 'purple',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-009',
      title: 'Identify data exposure risks',
      tools: 'Syft',
      color: 'purple',
      category: 'API',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-010',
      title: 'Enforce security standards ',
      tools: 'Syft',
      category: 'Compliance',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-011',
      title: 'Ensure adherence to industry-specific regulations',
      tools: 'Syft',
      color: 'green',
      category: 'Compliance',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'Security Lead Scan Plan'
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
