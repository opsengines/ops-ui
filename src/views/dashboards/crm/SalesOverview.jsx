'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionsMenu from '@core/components/option-menu'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const CardWidgetsSalesOverview = ({ title, customColors = false, labels = [], subTitle }) => {
  // Hooks
  const theme = useTheme()
  const textSecondary = 'var(--mui-palette-text-secondary)'

  const cusomcolors = ['#A31D1D', '#F93827', '#FFD65A', '#077d06']

  const options = {
    chart: {
      sparkline: { enabled: true }
    },
    grid: {
      padding: {
        left: 20,
        right: 20
      }
    },
    colors: customColors
      ? cusomcolors
      : [
          'var(--mui-palette-primary-main)',
          rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.7)`),
          rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.5)`),
          'var(--mui-palette-customColors-trackBg)'
        ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { theme: 'false' },
    dataLabels: { enabled: false },
    labels: labels,
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              fontSize: '0.875rem',
              color: textSecondary
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              fontSize: '24px',
              formatter: value => `${value}k`,
              color: 'var(--mui-palette-text-primary)'
            },
            total: {
              show: true,
              fontSize: '0.875rem',
              label: `${subTitle}`,
              color: textSecondary,
              formatter: value => `${value.globals.seriesTotals.reduce((total, num) => total + num)}`
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1300,
        options: { chart: { height: 257 } }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: { chart: { height: 276 } }
      },
      {
        breakpoint: 1050,
        options: { chart: { height: 250 } }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title={title}
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: [3, 0] }}>
            <AppReactApexCharts type='donut' height={277} width='100%' series={[12, 25, 13, 50]} options={options} />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ my: 'auto' }}>
            <div className='flex items-center gap-3'>
              <CustomAvatar skin='light' color='primary' variant='rounded'>
                <i className='ri-wallet-line text-primary' />
              </CustomAvatar>
              <div className='flex flex-col'>
                <Typography>{subTitle}</Typography>
                <Typography variant='h5'>100</Typography>
              </div>
            </div>
            <Divider className='mlb-6' />
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <div className='flex items-center gap-2 mbe-1'>
                  <div>
                    {customColors ? (
                      <i className='ri-circle-fill text-[10px]' style={{ backgroundColor: cusomcolors[0] }} />
                    ) : (
                      <i className='ri-circle-fill text-[10px] text-primary' />
                    )}
                  </div>
                  <Typography>{labels[0]}</Typography>
                </div>
                <Typography className='font-medium'>12</Typography>
              </Grid>
              <Grid item xs={6}>
                <div className='flex items-center gap-2 mbe-1'>
                  <div>
                    {customColors ? (
                      <i className='ri-circle-fill text-[10px]' style={{ backgroundColor: cusomcolors[1] }} />
                    ) : (
                      <i className='ri-circle-fill text-[10px] text-primary' />
                    )}
                  </div>
                  <Typography>{labels[1]}</Typography>
                </div>
                <Typography className='font-medium'>25</Typography>
              </Grid>
              <Grid item xs={6}>
                <div className='flex items-center gap-2 mbe-1'>
                  <div>
                    {customColors ? (
                      <i className='ri-circle-fill text-[10px]' style={{ backgroundColor: cusomcolors[2] }} />
                    ) : (
                      <i className='ri-circle-fill text-[10px] text-primary' />
                    )}
                  </div>
                  <Typography>{labels[2]}</Typography>
                </div>
                <Typography className='font-medium'>13</Typography>
              </Grid>
              <Grid item xs={6}>
                <div className='flex items-center gap-2 mbe-1'>
                  <div>
                    {customColors ? (
                      <i className='ri-circle-fill text-[10px]' style={{ backgroundColor: cusomcolors[3] }} />
                    ) : (
                      <i className='ri-circle-fill text-[10px] text-primary' />
                    )}
                  </div>
                  <Typography>{labels[3]}</Typography>
                </div>
                <Typography className='font-medium'>50</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardWidgetsSalesOverview
