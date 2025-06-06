'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Components Imports
import OptionsMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = [
  {
    name: 'Resolved Findings',
    data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
  },
  {
    name: 'Open Findings',
    data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
  }
]

const RevenueReport = () => {
  // Hook
  const theme = useTheme()

  const options = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    grid: {
      show: false,
      padding: {
        left: -10,
        right: 0
      }
    },
    legend: {
      offsetY: 6,
      fontSize: '15px',
      markers: { radius: 15, height: 10, width: 10, offsetX: theme.direction === 'rtl' ? 7 : -4 },
      itemMargin: { horizontal: 9 },
      labels: { colors: 'var(--mui-palette-text-secondary)' }
    },
    stroke: {
      width: 3,
      colors: ['var(--mui-palette-background-paper)']
    },
    dataLabels: { enabled: false },
    colors: ['var(--mui-palette-success-main)', 'var(--mui-palette-secondary-main)'],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '50%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all'
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        show: false
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: { show: false }
    },
    responsive: [
      {
        breakpoint: 1350,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '65%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '65%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 8,
              columnWidth: '50%'
            }
          }
        }
      },
      {
        breakpoint: 700,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 6,
              columnWidth: '55%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 8,
              columnWidth: '40%'
            }
          }
        }
      },
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '55%'
            }
          }
        }
      },
      {
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 7,
              columnWidth: '60%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Findings Report'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <AppReactApexCharts type='bar' height={238} width='100%' series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default RevenueReport
