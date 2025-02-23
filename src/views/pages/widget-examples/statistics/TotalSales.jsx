'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Chip, Grid, Skeleton } from '@mui/material'

import classnames from 'classnames'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const TotalSales = ({ title, data, labels, loading = false }) => {
  const textPrimary = 'var(--mui-palette-text-primary)'

  const data1 = [
    { title: labels[0], value: data[0] || 0, colorClass: '#A31D1D' },
    { title: labels[2], value: data[2] || 0, colorClass: '#FFD65A' }
  ]

  const data2 = [
    { title: labels[1], value: data[1] || 0, colorClass: '#F93827' },
    { title: labels[3], value: data[3] || 0, colorClass: '#077d06' }
  ]

  const options = {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false }
    },
    stroke: {
      width: 6,
      colors: ['var(--mui-palette-background-paper)']
    },
    labels: labels,
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: ['#A31D1D', '#F93827', '#FFD65A', '#077d06'],
    grid: {
      padding: {
        top: -7,
        bottom: 5
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
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: 18,
              color: textPrimary
            },
            value: {
              offsetY: -18,
              fontSize: '1.125rem',
              fontWeight: 500,
              formatter: value => `${value}`,
              color: textPrimary
            },
            total: {
              show: true,
              fontSize: '0.8125rem',
              label: 'Total',
              color: 'var(--mui-palette-text-secondary)'
            }
          }
        }
      }
    }
  }

  return (
    <Card className='overflow-visible'>
      {loading ? (
        <Skeleton style={{ height: '300px' }} />
      ) : (
        <CardContent className='flex justify-between bs-full'>
          <div className='flex flex-col justify-between'>
            <div className='flex justify-between items-baseline gap-1'>
              <Typography variant='h5'>{title}</Typography>
            </div>
            <Grid item xs={12} sm={6}>
              <div className='flex justify-between items-start gap-5'>
                <div className='flex flex-col gap-y-2'>
                  {data1.map((item, i) => (
                    <div key={i} className='flex gap-2'>
                      {/* <i className={`ri-circle-fill text-xs m-[5px]`} style={{ backgroundColor: item.colorClass }} />
                      <div>
                        <Typography className='underline' variant='body1'>
                          <a href='#'>{item.title}</a>
                        </Typography>
                      </div> */}
                      <Chip
                        sx={{ backgroundColor: item.colorClass, color: 'white' }}
                        label={item.title}
                        size='small'
                        variant='tonal'
                        onClick={() => console.log('Click')}
                      />
                    </div>
                  ))}
                </div>
                <div className='flex flex-col gap-y-2'>
                  {data2.map((item, i) => (
                    <div key={i} className='flex gap-2'>
                      {/* <i className={`ri-circle-fill text-xs m-[5px]`} style={{ backgroundColor: item.colorClass }} />
                      <div>
                        <Typography className='underline' variant='body1'>
                          <a href='#'>{item.title}</a>
                        </Typography>
                      </div> */}
                      {item?.title && (
                        <Chip
                          sx={{ backgroundColor: item.colorClass, color: 'white' }}
                          label={item.title}
                          size='small'
                          variant='tonal'
                          onClick={() => console.log('Click')}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
          </div>
          <div>
            <AppReactApexCharts type='donut' width={120} height={100} options={options} series={data} />
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export default TotalSales
