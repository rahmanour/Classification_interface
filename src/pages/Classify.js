import React, { useState } from 'react'
import {TextField, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar.js';
import PersistentDrawerRight from './drawer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios' 


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontSize:20,
    backgroundColor: 'bleu',
    '&:hover':{
      backgroundColor:'#006064'
    },
    marginLeft:1000,
    align : "Right"
  },
  field:{
    marginTop: 50,
    marginBottom :50 ,
    display:'block',
    backgroundColor: '#e0f7fa'  
  },
  table: {
    minWidth: 650,
  },
  cellule:{
    fontsize:"50px",
    fontFamily: "Stint+Ultra+Condensed"
  }
}));
export default function Classify() {
  const classes = useStyles();
  const [text,setText] = useState(' ');
  const [type,setType] = useState({'label': '', 'prediction': ' '});
  const [organism,setOrganism] = useState({'labels': [], 'predictions': []});
  const [sector,setSector] = useState({'labels': [], 'predictions': []});
  const [thematic,setThematic] = useState({'labels': [], 'predictions': []});
  const [textError,setTextError] = useState(false);
  let organisms_labels=' '
  let organisms_predictions='  '
  let sectors_labels=' '
  let sectors_predictions='  '
  let thematics_labels=' '
  let thematics_predictions=' '
  let organisms=' '
  const buttonOnclick= async(e) => {
    setTextError(false)
    if (text ==' '){
      setTextError(true)
    }
    e.preventDefault()
    if (text != ' ') { 
      let data=JSON.stringify({ text:text});
      axios.post("http://c2ce-104-154-153-144.ngrok.io/type_predict",data,{
        headers:{
          'content-type':'application/json;charet=UTF-8',
          "Acces-Control-Allow-Origin":"*",
          'Accept':"text/plain",
        }
      }).then((response) =>
      { 
        let data_response=response.data
        setType({"label":data_response['label'],'prediction':data_response['prediction']})
        console.log(type.label)
        console.log(type.prediction)
      })
  
  axios.post("http://6102-35-245-48-46.ngrok.io/organism_predict",data,{
      headers:{
        'content-type':'application/json;charet=UTF-8',
        "Acces-Control-Allow-Origin":"*",
        'Accept':"text/plain",
      }
    }).then((response) => {
      let  data_organism=response.data
    console.log(data_organism['labels'])
    console.log(data_organism['predictions'])
    let labels=data_organism['labels']
    let predictions=data_organism['predictions']
    data_organism['labels'].map(label =>(
      organisms=organisms +`, ${label}` )
    )
    setOrganism({"labels":labels,'predictions':predictions})
    })

  axios.post(" http://3d6d-34-86-185-218.ngrok.io/sector_predict",data,{
      headers:{
        'content-type':'application/json;charet=UTF-8',
        "Acces-Control-Allow-Origin":"*",
        'Accept':"text/plain",
      }
    }).then((response) => {
      let data_sector=response.data
    console.log(data_sector['labels'])
    console.log(data_sector['predictions'])
    setSector({"labels":data_sector['labels'],'predictions':`:`+data_sector['predictions']}) 
    })
  axios.post("http://98e4-35-204-55-87.ngrok.io/thematic_predict",data,{
    headers:{
      'content-type':'application/json;charet=UTF-8',
      "Acces-Control-Allow-Origin":"*",
      'Accept':"text/plain",
    }
  }).then((response)=>{
  let data_thematic=response.data
  console.log(data_thematic['labels'])
  console.log(data_thematic['predictions'])
  setThematic({"labels":data_thematic['labels'],'predictions':`:`+data_thematic['predictions']})
  })
    
}}
    
    function createData(name, value) {
      return { name, value };
    }
    console.log(organism["labels"])
    console.log(organism["predictions"])
    const rows = [
      createData('Organisme', ),
      createData('Secteur', ),
      createData('Type', ),
      createData('Thématique', )
    ];
    organism.labels.map(label =>(
      organisms_labels= (label.key==0) ? organisms_labels : organisms_labels +` ${label},` )
    )
    let organism_pred=organism.predictions
    if (!Array.isArray(organism.predictions)) console.log("resul is not an array ")
    console.log(organism["predictions"][1])
    organism["predictions"].map(label =>(
      organisms_predictions= (label.key==0) ? ':' : organisms_predictions +` ${label},` )
    )
    sector.labels.map(label =>(
      sectors_labels=sectors_labels +` ${label} ,` )
    )
    Array.isArray(sector.predictions) && sector.predictions.map(label =>(
      sectors_predictions=sectors_predictions +` ${label} ,` )
    )
    thematic.labels.map(label =>(
      thematics_labels=thematics_labels +` ${label} ,` )
    )
    Array.isArray(thematic.predictions) && thematic.predictions.map(label =>(
      thematics_predictions=thematics_predictions +` ${label} ,` )
    )
  return (
    
    <Container>
      <PersistentDrawerRight/>
      <Typography variant="h1" color="primary" align="center">
         Classification
      </Typography>
      <Typography variant="h6" color='textPrimary' align="center">
        Veuillez introduire le texte que vous voulez classifier
      </Typography>
      <TextField 
      onChange = {(e) => setText(e.target.value )}
      label ='TEXTE' 
      className={classes.field}
      variant='outlined'
       color="secondary"
        placeholder=" Saisir le texte à étiqueter " 
        fullWidth  
        required
        multiline
        rows={6}
        error = {textError}
      />
       <Button
        onClick={buttonOnclick}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
         >
        Envoyer Texte 
      </Button>
      { /* startIcon= {<SendIcon />}*/ }
      <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cellule}>Nom de l'étiquette</TableCell>
            <TableCell className={classes.cellule}>La valeur de l'étiquette</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow key="type">
              <TableCell component="th" scope="row">
                Type
              </TableCell>
              <TableCell > {type.label}   </TableCell>
        </TableRow>
        <TableRow key="Organism">
              <TableCell component="th" scope="row">
                Organisme
              </TableCell> 
              <TableCell> {organisms_labels}   </TableCell>
        </TableRow>
        <TableRow key="Sector">
              <TableCell component="th" scope="row">
                Secteur
              </TableCell> 
              <TableCell> {sectors_labels}  </TableCell>
        </TableRow>
        <TableRow key="Thematic">
              <TableCell component="th" scope="row">
                Thématique
              </TableCell> 
              <TableCell> {thematics_labels}   </TableCell>
        </TableRow>
           
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
     
  )
}
