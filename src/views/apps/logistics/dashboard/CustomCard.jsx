// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import HorizontalWithBorder from '@components/card-statistics/HorizontalWithBorder'
import CardWithBG from '@/components/card-statistics/CardWithBg'

const CustomCard = ({ data }) => {
  return (
    data && (
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <CardWithBG {...item} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default CustomCard
