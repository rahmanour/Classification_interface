import React, { useState,useEffect } from 'react'
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './drawer';
import Grid from '@material-ui/core/Grid'
import TextCard from './textcard'
import {Typography} from '@material-ui/core'
import axios from 'axios'
export default function Thematic() {
    const [thematics,setThematics] = useState([]);
    useEffect(() => {
    axios
      .get("http://98e4-35-204-55-87.ngrok.io/get_thematics")
      .then(response => {
        console.log(response.data)
        setThematics(response.data['thematics'])});
  }, []);
    return (
        <Container>
          <PersistentDrawerRight/>
          <Typography variant="h2" color="primary" align="center">
             La Liste des Thématiques
            </Typography>
          <Grid container align="center">
          {thematics.map(thematic =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={thematic} />
              </Grid>
          ))}
          </Grid>
          </Container>
    )
}