import { Box, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import BasicCard from '../features/Card'

const Home: NextPage = () => {
  return (
      <Grid container spacing={4} p="2rem" justifyContent="center">
        <Grid item md={5} >
          <BasicCard materia='Infraestructura IV'/>
        </Grid>
        <Grid item md={5} >
          <BasicCard materia='Especializcion Frontend VI'/>
        </Grid>
        <Grid item  md={5}>
          <BasicCard materia='#WELCOMEABOARD!'/>
        </Grid>
        <Grid item  md={5}>
          <BasicCard materia='Testing I'/>
        </Grid>
      </Grid>

  )
}

export default Home
