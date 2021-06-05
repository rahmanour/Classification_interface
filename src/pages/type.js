import React from 'react'
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './drawer';
import Grid from '@material-ui/core/Grid'
import TextCard from './textcard'
import {Typography} from '@material-ui/core'
export default function Type() {
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
    return (
        <Container>
          <PersistentDrawerRight/>
          <Typography variant="h2" color="primary" align="center">
             La Liste des Types
            </Typography>
          <Grid container align="center">
          {list.map(type =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={type} />
              </Grid>
          ))}
          </Grid>
        </Container>
    )
}