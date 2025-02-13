// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import WelcomeCard from '@views/apps/academy/dashboard/WelcomeCard'
import InterestedTopics from '@views/apps/academy/dashboard/InterestedTopics'
import AssignmentProgress from '@views/apps/academy/dashboard/AssignmentProgress'

// Data Imports
import { getAcademyData } from '@/app/server/actions'
import CustomTable from '../../academy/dashboard/CustomTable'
import CVSTable from '../cvsTable'
import ComplianceTable from '../complianceTable'
import HeaderComponent from '../HeaderComponent'
import WeeklyOverview from '@/views/pages/widget-examples/charts/WeeklyOverview'

const Scm = async ({ scans }) => {
  // Vars
  const data = await getAcademyData()

  const cvsList = [
    {
      id: 1,
      vulnerabilityId: 'CVE-2022-22965',
      user: 'James Coie',
      image: '/images/avatars/1.png',
      tutorImg: '/images/apps/academy/1.png',
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      view: 83,
      description:
        'A Spring MVC Or Spring Webflux application running on JDK 9+ may be vulnerable to remove code execution (RCE) via data binding.',
      logo: 'ri-angularjs-line',
      color: 'error',
      courseTitle: 'Scan for code vulnerabilities',
      desc: 'Introductory course for Angular and framework basics with TypeScript',
      tags: 'Web',
      rating: 4.4,
      ratingCount: 8,
      severity: 'High'
    },
    {
      id: 2,
      vulnerabilityId: 'CVE-2020-1938',
      user: 'Jeremy Lane',
      image: '/images/avatars/1.png',
      description:
        'A Spring MVC Or Spring Webflux application running on JDK 9+ may be vulnerable to remove code execution (RCE) via data binding.',
      tutorImg: '/images/apps/academy/1.png',
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      view: 83,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error',
      courseTitle: 'Detect hard-coded secrets',
      desc: 'Introductory course for Angular and framework basics with TypeScript',
      tags: 'Web',
      rating: 4.4,
      ratingCount: 8,
      severity: 'High'
    },
    {
      id: 3,
      vulnerabilityId: 'CVE-2022-22965',
      user: 'Lauretta Coie',
      description:
        'A Spring MVC Or Spring Webflux application running on JDK 9+ may be vulnerable to remove code execution (RCE) via data binding.',
      image: '/images/avatars/1.png',
      tutorImg: '/images/apps/academy/1.png',
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      view: 83,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error',
      courseTitle: 'Identify insecure coding patterns',
      desc: 'Introductory course for Angular and framework basics with TypeScript',
      tags: 'Web',
      rating: 4.4,
      ratingCount: 8,
      severity: 'Low'
    },
    {
      id: 4,
      vulnerabilityId: 'CVE-2023-44487',
      user: 'Karen Coie',
      image: '/images/avatars/1.png',
      tutorImg: '/images/apps/academy/1.png',
      description:
        'A Spring MVC Or Spring Webflux application running on JDK 9+ may be vulnerable to remove code execution (RCE) via data binding.',
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      view: 83,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error',
      courseTitle: 'Validate secure configurations for sensitive files',
      desc: 'Introductory course for Angular and framework basics with TypeScript',
      tags: 'Web',
      rating: 4.4,
      ratingCount: 8,
      severity: 'Medium'
    }
  ]

  const complianceList = [
    {
      id: 1,
      complianceId: 'ISO27001:2022',
      user: 'James Coie',
      image: '/images/avatars/1.png',
      control: 'A.8.8',
      tutorImg: '/images/apps/academy/1.png',
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      category: 'Asset Management',
      view: 83,
      description: 'Management Of Technical Vulnerabilities',
      logo: 'ri-angularjs-line',
      color: 'error',
      courseTitle: 'Asset Management',
      desc: 'Introductory course for Angular and framework basics with TypeScript',
      tags: 'Web',
      rating: 4.4,
      ratingCount: 8,
      severity: 'High'
    },
    {
      id: 2,
      complianceId: 'NIST-800-53-Revision-5',
      control: 'RA-5',
      user: 'Jeremy Lane',
      category: 'Risk Assessment',
      image: '/images/avatars/1.png',
      description: 'Vulnerability Monitoring and Scanning',
      tutorImg: '/images/apps/academy/1.png',
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      view: 83,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error',
      courseTitle: 'Risk assessment',
      desc: 'Introductory course for Angular and framework basics with TypeScript',
      tags: 'Web',
      rating: 4.4,
      ratingCount: 8,
      severity: 'High'
    },
    {
      id: 3,
      complianceId: 'SOC2',
      user: 'Lauretta Coie',
      control: 'CC3.2',
      category: 'Security',
      description: 'Analyze threats and vulnerabilities from vendors, business partners and other parties',
      image: '/images/avatars/1.png',
      tutorImg: '/images/apps/academy/1.png',
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      view: 83,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error',
      courseTitle: 'Security',
      desc: 'Introductory course for Angular and framework basics with TypeScript',
      tags: 'Web',
      rating: 4.4,
      ratingCount: 8,
      severity: 'Low'
    },
    {
      id: 4,
      complianceId: 'PCI_DSS 4.0',
      control: '6.3.3',
      user: 'Karen Coie',
      image: '/images/avatars/1.png',
      tutorImg: '/images/apps/academy/1.png',
      description: 'All system components are protexted by installing applicable security patches',
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      view: 83,
      time: '17h 34m',
      logo: 'ri-angularjs-line',
      color: 'error',
      courseTitle: 'Develop and Maintain Secure Systems and Application',
      desc: 'Introductory course for Angular and framework basics with TypeScript',
      tags: 'Web',
      rating: 4.4,
      ratingCount: 8,
      severity: 'Medium'
    }
  ]

  const weeklyChart = {
    totalScans: 6,
    pendingScans: 0,
    completedScans: 6,
    weeklyScans: {
      Monday: 2,
      Tuesday: 2,
      Wednesday: 5,
      Thursday: 1,
      Friday: 1,
      Saturday: 1,
      Sunday: 3
    },
    severityCounts: {
      CRITICAL: 2,
      HIGH: 3,
      MEDIUM: 8,
      LOW: 5
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <HeaderComponent />
      </Grid>
      <Grid item xs={12} md={8}>
        <InterestedTopics />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <WeeklyOverview dashboardData={weeklyChart} />
      </Grid>

      <Grid item xs={12} md={4}>
        {/* <TopCourses /> */}
        <CVSTable courseData={cvsList} />
      </Grid>
      <Grid item xs={12} md={8}>
        {/* <PopularInstructors /> */}
        <ComplianceTable courseData={complianceList} />
      </Grid>
    </Grid>
  )
}

export default Scm
