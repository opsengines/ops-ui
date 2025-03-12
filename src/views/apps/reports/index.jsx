import React from 'react'

import { Card, CardContent, Typography, Grid, Box, useTheme } from '@mui/material'

const data = [
  {
    category: 'SAST',
    items: [
      {
        title: 'Summary',
        description: 'Overview of scanned code, number of vulnerabilities found, risk classification'
      },
      { title: 'Top Issues', description: 'List of critical/high vulnerabilities with CWE references' },
      { title: 'AI Fix Recommendations', description: 'Suggested fixes for each issue' },
      { title: 'Affected Files & Code Snippets', description: 'Show vulnerable lines with remediation guidance' },
      { title: 'OWASP Mapping', description: 'OWASP Top 10 relevance' },
      { title: 'Trend Analysis', description: 'If possible, historical vulnerability trends in codebase' }
    ]
  },
  {
    category: 'SCA',
    items: [
      { title: 'Summary', description: 'List of open-source dependencies checked' },
      {
        title: 'Vulnerabilities Found',
        description: 'CVEs affecting libraries, severity levels, and exploitability score'
      },
      { title: 'AI Fix Recommendations', description: 'Suggested dependency upgrades and patches' },
      { title: 'License Compliance', description: 'Identify license risks (GPL, MIT, etc.)' },
      { title: 'SBOM Reference', description: 'Dependencies used with versioning' }
    ]
  },
  {
    category: 'SBOM',
    items: [
      { title: 'Inventory', description: 'List of all software components, libraries, dependencies' },
      { title: 'Vulnerabilities in Dependencies', description: 'CVEs mapped to each component' },
      { title: 'Risk Assessment', description: 'Highlight risky dependencies with critical issues' },
      { title: 'AI Fix Recommendations', description: 'Patch recommendations per component' },
      { title: 'Compliance Check', description: 'License compatibility issues' }
    ]
  },
  {
    category: 'DAST',
    items: [
      { title: 'Summary', description: 'URLs scanned, number of vulnerabilities found' },
      { title: 'Top Issues', description: 'SQL Injection, XSS, SSRF, etc., with severity classification' },
      { title: 'Attack Payloads', description: 'Show what was tested and exploited successfully' },
      { title: 'AI Fix Recommendations', description: 'Patch recommendations per component' },
      { title: 'OWASP Top 10 Mapping', description: 'Relevance to common attack vectors' }
    ]
  },

  // {
  //   category: 'CI/CD',
  //   items: [
  //     { title: 'Licenses & SBOM', description: 'Aikido identifies potential risks related to open-source licenses.' },
  //     { title: 'Malware Monitor', description: 'Check your dependencies for potential software attacks.' },
  //     { title: 'Runtimes & Frameworks', description: 'Overview of your important servers, runtimes, and frameworks.' }
  //   ]
  // },

  {
    category: 'CSPM',
    items: [
      { title: 'Licenses & SBOM', description: 'Aikido identifies potential risks related to open-source licenses.' },
      { title: 'Malware Monitor', description: 'Check your dependencies for potential software attacks.' },
      { title: 'Runtimes & Frameworks', description: 'Overview of your important servers, runtimes, and frameworks.' }
    ]
  },

  // {
  //   category: 'IAC',
  //   items: [
  //     { title: 'Licenses & SBOM', description: 'Aikido identifies potential risks related to open-source licenses.' },
  //     { title: 'Malware Monitor', description: 'Check your dependencies for potential software attacks.' },
  //     { title: 'Runtimes & Frameworks', description: 'Overview of your important servers, runtimes, and frameworks.' }
  //   ]
  // },
  // {
  //   category: 'Secrets',
  //   items: [
  //     { title: 'Licenses & SBOM', description: 'Aikido identifies potential risks related to open-source licenses.' },
  //     { title: 'Malware Monitor', description: 'Check your dependencies for potential software attacks.' },
  //     { title: 'Runtimes & Frameworks', description: 'Overview of your important servers, runtimes, and frameworks.' }
  //   ]
  // },
  // {
  //   category: 'AL/ML',
  //   items: [
  //     { title: 'Licenses & SBOM', description: 'Aikido identifies potential risks related to open-source licenses.' },
  //     { title: 'Malware Monitor', description: 'Check your dependencies for potential software attacks.' },
  //     { title: 'Runtimes & Frameworks', description: 'Overview of your important servers, runtimes, and frameworks.' }
  //   ]
  // },

  {
    category: 'Compliance',
    items: [
      'Issues Outside of SLA',
      'OWASP Top 10 Compliance',
      'NIST Compliance',
      'ISO 27001:2022 Compliance',
      'SOC2 Compliance',
      'CIS Compliance',
      'PCI Compliance',
      'HIPAA Compliance',
      'ENS Compliance'
    ]
  }

  // {
  //   category: 'Advanced',
  //   items: [
  //     { title: 'Team Comparison', description: 'Quick overview of each team’s performance.' },
  //     { title: 'TR Benchmark', description: 'Get insights on improving your benchmark score.' },
  //     { title: 'CI Scan History', description: 'Overview of all failed and passed PR scans.' }
  //   ]
  // }
]

const ReportDownloadView = () => {
  return (
    <Box>
      {data.map((section, idx) => (
        <Box key={idx} sx={{ mb: 3 }}>
          <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold' }}>
            {section.category}
          </Typography>
          <Grid container spacing={2}>
            {section.items.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ p: 1, boxShadow: 2, borderLeft: '4px solid #6200EE', height: '100px' }}>
                  <CardContent>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                      {typeof item === 'string' ? item : item.title}
                    </Typography>
                    {typeof item !== 'string' && (
                      <Typography variant='body2' color='text.secondary'>
                        {item.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  )
}

export default ReportDownloadView
