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

const DevopsScanPlan = async () => {
  // Vars
  const data = await getInvoiceData()

  const scans = [
    {
      id: 'OE-001',
      title: 'Verify CI/CD pipeline configurations',
      tools: 'Semgrep',
      category: 'CI/CD',
      active: true,
      color: 'green',
      findings: '3',
      status: 'Success'
    },
    {
      id: 'OE-002',
      title: 'Scan container images',
      tools: 'Gitleaks',
      category: 'CI/CD',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-003',
      title: ' Validate secrets management practices',
      tools: 'Semgrep, Trivy, npm-audit',
      category: 'CI/CD',
      color: 'green',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-004',
      title: 'Detect misconfigurations in Terraform',
      tools: 'Syft',
      category: 'IAC',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-005',
      title: 'Scan Kubernetes YAML files',
      tools: 'Syft',
      category: 'IAC',
      color: 'blue',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-006',
      title: 'Analyze Helm charts',
      tools: 'Syft',
      color: 'blue',
      category: 'IAC',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-007',
      title: 'Analyze container images for vulnerabilities ',
      tools: 'Syft',
      color: 'purple',
      category: 'Container',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-008',
      title: ' Scan for compliance gaps',
      tools: 'Syft',
      category: 'Container',
      color: 'purple',
      active: false,
      findings: '0'
    },
    {
      id: 'OE-008',
      title: 'Perform container hardening',
      tools: 'Syft',
      color: 'purple',
      category: 'Container',
      active: false,
      findings: '0'
    }
  ]

  const headerContent = {
    title: 'Devops Scan Plan'
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

export default DevopsScanPlan
