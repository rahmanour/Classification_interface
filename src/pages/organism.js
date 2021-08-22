import React,{ useState,useEffect } from 'react'
import PersistentDrawerRight from './drawer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextCard from './textcard'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {blue,white} from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import {TextField, Typography} from '@material-ui/core' ;
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      fontSize:20,
      backgroundColor: '#009688',
      '&:hover':{
        backgroundColor:'#006064'
      },
      marginLeft:400,
      marginTop:80,
    },
    field:{
        marginTop: 50,
        marginBottom :50 ,
        display:'block',
        backgroundColor: '#e0f7fa'  
      },
    myicon: {
        marginLeft:1200  ,
        align : "right"
    },
    paper: {
        position: 'relative',
        width: 600,
        height:400,
        marginLeft: 350,
        marginRight: 500,
        backgroundColor: theme.palette.background.paper,
        border: '4px solid #006064',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }})) ;
  
function Organism() {
    const [organisms,setOrganisms] = useState([]);
    const classes = useStyles();
    const history = useHistory();
    const buttonOnclick= (e) => { 
        console.log("hiiii")
    }
    useEffect(() => {
        axios
      .get("http://1a56-34-86-200-128.ngrok.io/get_organisms")
      .then(response => {
        console.log(response.data)
        setOrganisms(response.data['organisms'])});
          }, []);
    
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
      const [open, setOpen] = React.useState(false);
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      
      const body = (
        <div className={classes.paper} >
          <Typography variant="h6" color='textPrimary' align="center">
           Veuillez remplir le champ avec la valeur que vous voulez rajouter
          </Typography>
          <TextField 
           label ='valeur' 
           className={classes.field}
           variant='outlined'
           color="secondary"
           placeholder=" Saisir le secteur à rajouter " 
           fullWidth  
           required
            multiline
            />
        <Button  color="#fafafa" className={classes.button} >
          Ajouter 
         </Button>
        </div>
      );
      
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
          {organisms.map(organism =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={organism} />
              </Grid>
          ))}
          </Grid>
          </Container>
          /* <IconButton color="primary" className={classes.myicon} >
            <LibraryAddIcon style={{ fontSize: 60}} onClick={handleOpen} size='medium' />
          </IconButton>
          
           <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
          {body}
        </Modal>*/
    )
}
export default Organism