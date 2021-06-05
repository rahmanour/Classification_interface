import React from 'react'
import PersistentDrawerRight from './drawer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextCard from './textcard'
import {Typography} from '@material-ui/core'
function Organism() {
      const list=[
        "Autorité Nationale Indépendante des Elections",
        "Banque & Monnaie",
        "Banque d'Algérie",
       "Commerce",
        "Conseil Constitutionnel",
        "Conseil d’État",
        "Cour Suprême",
        "Cour des comptes ",
        "Energie",
        "Ministère de l'Agriculture",
        "Ministère de l'Education Nationale",
        `Ministère de l'Habitat et de l'Urbanisme`,
        `Ministère de la Communication`,
        `Ministère de la Culture`,
        `Ministère de la Défense Nationale`,
        `Ministère de la Jeunesse et des Sports`,
        `Ministère de la Justice`,
        `Ministère de la Santé`,
        `Ministère de la micro-entreprise`,
        `Ministère de la pêche et des productions halieutiques`,
        `Ministère de l’Energie`,
        `Ministère de l’Industrie et des Mines`,
        `Ministère de l’Intérieur`,
        `Ministère des Affaires Etrangères`,
        `Ministère des Affaires Religieuses et des Wakfs`,
        `Ministère des Finances`,
        `Ministère des Ressources en Eau`,
        `Ministère des moudjahidine et des ayants droit`,
        `Ministère du Commerce`,
        `Ministère du Tourisme et de l'Artisanat`,
        `Ministère du Travail`,
        ` Ministére des Travaux Publics et des Transports`,
        `Organisation mondiale du commerce `,
        `Parlement algérien`,
        `Premier Ministère`,
        `Présidence de la république`,
        `Urbanisme `,
        `de l'Emploi et de la Securite Sociale`,
        `du Développement Rural et de la Pêche`,
        `Ministère de l'Environnement et des Energies Renouvelables`,
        `de la Population et de la Réforme Hospitalière`,
        `des start-up et de l’économie de la connaissance`,
        `Organe national de la protection et de la promotion de l’enfance`,
      `Ministère de la Solidarité Nationale de la Famille et de la Condition de la Femme`,
      `Ministère de la Poste et des Technologies de l'Information et de la Communication`,
      `Ministère de l'Enseignement Supérieur et de la Recherche Scientifique`,
      ` des Collectivités Locales et de l'Aménagement du Territoire`,
      `Ministère de la Formation et de l'Enseignement Professionnel`,
      ]
    return (
        <Container>
          <PersistentDrawerRight/>
           <Typography variant="h2" color="primary" align="center">
             La Liste des Organismes
            </Typography>
          <h1 align="center"  ></h1>
          {/*<Grid container>
              <Grid item xs={12} sm={6} md={3}>
                  <Paper> Autorité Nationale Indépendante des Elections    </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                  <Paper> Banque & Monnaie    </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                  <Paper> Banque d'Algérie  </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                  <Paper> Commerce   </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                  <Paper> Conseil Constitutionnel    </Paper>
               </Grid>
          </Grid>*/}
          <Grid container align="center">
          {list.map(organism =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={organism} />
              </Grid>
          ))}
          </Grid>
          
        </Container>
    )
}
export default Organism