// import { Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from '@mui/material';

const InspiredProjects = ({data}) => {
  return (
    <Card sx={{ maxWidth: 300 }} elevation={0 }>
      <CardMedia
        sx={{ height: 237 }}
        image={data.img}
        title="green iguana"
      />
      <CardContent>
        <Grid container>
            <Grid item xs={2.5}>
        <Avatar src={data.avatar} sx={{marginTop:'0.3rem'}}></Avatar>
        </Grid>
        <Grid item xs={9.5}>
        <Typography sx={{fontWeight:'bold'}}>
            {data.title}
        </Typography>
        <Typography>
            {data.author}
        </Typography>
        </Grid>
        </Grid>
      </CardContent>
    </Card> 
  )
}

export default InspiredProjects