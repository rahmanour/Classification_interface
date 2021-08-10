import React, { useState,useEffect } from 'react'
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './drawer';
import Grid from '@material-ui/core/Grid'
import TextCard from './textcard'
import {Typography} from '@material-ui/core'
import axios from 'axios'
export default function Type() {
    const [types,setTypes] = useState([]);
    const list=['Arrêté',
    'Arrêté interministériel',
    'Avis',
    'Code',
    'Communiqué',
    'Convention internationale',
    'Décision',
    'Décret',
    'Décret exécutif',
    'Décret législatif',
    'Décret présidentiel',
    'Guide',
    'Instruction',
    'Jurisprudence',
    'Loi',
    'Ordonnance',
    'Proclamation',
    'Projet de décret exécutif',
    'Rapport',
    'Règlement',
    'Télex ']
    /*let response_type= axios.get("http://8f4057c4d654.ngrok.io/get_types",{
      headers:{
        'content-type':'application/json;charet=UTF-8',
        "Acces-Control-Allow-Origin":"*",
        'Accept':"text/plain",
      }
    })
    let data_response=response_type.data
    console.log(data_response)
     setTypes(data_response['types'])*/
    useEffect(() => {
    axios
      .get("http://e906a7f76075.ngrok.io/get_types")
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