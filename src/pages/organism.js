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
      .get("http://6102-35-245-48-46.ngrok.io/get_organisms")
      .then(response => {
        console.log(response.data)
        setOrganisms(response.data['organisms'])});
          }, []);
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
          <Grid container align="center">
          {organisms.map(organism =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={organism} />
              </Grid>
          ))}
          </Grid>
          </Container>
    )
}
export default Organism