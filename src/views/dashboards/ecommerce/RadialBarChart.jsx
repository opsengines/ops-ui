'use client'

// Next Imports
import dynamic from 'next/dynamic'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const RadialBarChart = () => {
  const options = {
    chart: {
      sparkline: { enabled: true }
    },
    grid: {
      padding: {
        top: -10,
        bottom: 20
      }
    },
    stroke: {
      lineCap: 'square',
      curve: 'straight'
    },
    colors: ['var(--mui-palette-info-main)'],
    plotOptions: {
      radialBar: {
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '65%' },

        //track: { background: 'var(--mui-palette-customColors-trackBg)' },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 0,
            fontWeight: 500,
            fontSize: '1.25rem',
            color: 'var(--mui-palette-text-secondary)'
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1530,
        options: {
          grid: {
            padding: {
              right: 30,
              left: 30
            }
          }
        }
      },
      {
        breakpoint: 1350,
        options: {
          grid: {
            padding: {
              right: 40,
              left: 40
            }
          }
        }
      },
      {
        breakpoint: 700,
        options: {
          grid: {
            padding: {
              left: 20,
              right: 20
            }
          }
        }
      }
    ]
  }

  return (
    <Card className='bs-full bg-[#1C1C2B]'>
      <CardContent>
        {/* <Typography variant='h4'>135k</Typography> */}
        <AppReactApexCharts type='radialBar' width='100%' height={205} options={options} series={[0]} />
        <Typography color='text.primary' className='font-medium text-center'>
          Total Score
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RadialBarChart
