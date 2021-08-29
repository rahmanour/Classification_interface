import React, { useState,useEffect } from 'react'
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './drawer';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextCard from './textcard'
import { Typography} from '@material-ui/core'
import axios from 'axios'

export default function Sector() {
    const [sectors,setSectors] = useState([]);
    useEffect(() => {
    axios
      .get("http://3d6d-34-86-185-218.ngrok.io/get_sectors")
      .then(response => {
        console.log(response.data)
        setSectors(response.data['sectors'])});
  }, []);
    return (
        <Container>
          <PersistentDrawerRight/>
          <Typography variant="h2" color="primary" align="center">
             La Liste des Secteurs
            </Typography>
          <Grid container align="center">
          {sectors.map(sector =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={sector} />
              </Grid>
          ))}
          </Grid>
        </Container>
        /*{list.map(sector =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={sector} />
              </Grid>
          ))}*/
    )
}