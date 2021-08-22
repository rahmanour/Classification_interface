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
    const list=['Activités spatiales', 'Administration', 'Affaires religieuses',
    'Affaires étrangeres', 'Agriculture', 'Amenagement du territoire',
    'Artisanat', 'Associations', 'Assurances', 'Audiovisuel',
    'Aviation civile', 'Banque & Monnaie', 'Commerce',
    'Commissariat et Expertise', 'Communication', 'Constitutionnel',
    'Contexte local', 'Culture', 'Douanes', 'Défense nationale',
    'Education', 'Energie', 'Environnement', 'Finance',
    'Formation professionnelle', "Formes juridiques d'implantation",
    'Habitat', 'Hydraulique et eau', 'Hydrocarbures', 'Industrie',
    'Intérieur', 'Investissement', 'Jeunesse et sport',
    'Jeunesse et sports', 'Judiciaire', 'Justice', 'Justice militaire',
    'Legislation du travail', 'Marchés publics', 'Maritime',
    'Normalisation', 'Nucléaire', 'Pharmaceutique',
    'Procédure civile et administrative', 'Protocole international',
    'Pénal', 'Pêche', 'Recherche scientifique', 'Sanitaire', 'Santé',
    'Santé animale', 'Système fiscal', 'Système social', 'Technologie',
    'Tourisme', 'Transport', 'Travaux publics', 'Télécommunications',
    'Urbanisme', 'Éducation et enseignement supérieur']
    useEffect(() => {
    axios
      .get("http://13e9-35-237-236-33.ngrok.io/get_sectors")
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