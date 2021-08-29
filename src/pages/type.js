import React, { useState,useEffect } from 'react'
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './drawer';
import Grid from '@material-ui/core/Grid'
import TextCard from './textcard'
import {Typography} from '@material-ui/core'
import axios from 'axios'
export default function Type() {
    const [types,setTypes] = useState([]);
    useEffect(() => {
    axios
      .get("http://c2ce-104-154-153-144.ngrok.io/get_types")
      .then(response => {
        console.log(response.data)
        setTypes(response.data['types'])});
  }, []);
    return (
        <Container>
          <PersistentDrawerRight/>
          <Typography variant="h2" color="primary" align="center">
             La Liste des Types
            </Typography>
          
          <Grid container align="center">
          {types.map(type =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={type} />
              </Grid>
          ))}
          </Grid>
        </Container>
        /*<Grid container align="center">
          {list.map(type =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={type} />
              </Grid>
          ))}
          </Grid>*/
    )
}