import Grid from '@mui/material/Grid'

// MUI Imports
import SecurityPlansHeader from '@/views/apps/securityplans/Header'
import ScanList from '@/views/apps/securityplans/Scan'
import SecurityCard from '@/views/dashboards/ecommerce/SecurityPlanCard'
import ComingSoon from '@/views/pages/misc/ComingSoon'
import SBOMPage from '@/views/apps/securityplanengine/SBOM'

const SBOM = async () => {
  // Vars
  const headerData = {
    title: 'SBOM'
  }

  const scans = [
    {
      scanId: 'SBOM-001',
      courseTitle: 'Generate a comprehensive SBOM for applications',
      tools: 'Semgrep',
      active: true,
      findings: '3',
      status: true,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error'
    },
    {
      scanId: 'SBOM-002',
      courseTitle: 'Track third-party components and versions',
      tools: 'Gitleaks',
      active: false,
      findings: '0',
      status: false,
      time: '',
      logo: 'ri-angularjs-line',
      color: 'error'
    },
    {
      scanId: 'SBOM-003',
      courseTitle: 'Identify unapproved components in builds',
      tools: 'Semgrep, Trivy, npm-audit',
      active: false,
      findings: '0',
      status: false,
      time: '',
      logo: 'ri-angularjs-line',
      color: 'error'
    }
  ]

  return <SBOMPage scans={scans} />
}

export default SBOM
