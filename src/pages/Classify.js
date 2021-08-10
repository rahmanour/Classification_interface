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
      /*console.log(text)
      console.log(data) */
      
    let response_type= await axios.post("http://e906a7f76075.ngrok.io/type_predict",data,{
      headers:{
        'content-type':'application/json;charet=UTF-8',
        "Acces-Control-Allow-Origin":"*",
        'Accept':"text/plain",
      }
    })
    let data_response=response_type.data
    setType({"label":data_response['label'],'prediction':`:`+data_response['prediction']})
    console.log(type.label)
    console.log(type.prediction)
    /*.then(response => {
      let data_response=response.data
      setType({"label":data_response['label'],'prediction':data_response['prediction']})
      console.log(response.data)
      console.log(response.request.status)
      console.log(type.label)
      console.log(type.prediction)
      console.log(data_response['label'])
      console.log(data_response['prediction'])
      console.log(type.label)
      console.log(type.prediction)
    })
    .catch(err =>{
      console.log(err)
    })*/
  /**************************** */
    let response_organism= await axios.post("http://43d917805813.ngrok.io/organism_predict",data,{
      headers:{
        'content-type':'application/json;charet=UTF-8',
        "Acces-Control-Allow-Origin":"*",
        'Accept':"text/plain",
      }
    })
    let  data_organism=response_organism.data
    console.log(data_organism['labels'])
    console.log(data_organism['predictions'])
    let labels=data_organism['labels']
    let predictions=data_organism['predictions']
    data_organism['labels'].map(label =>(
      organisms=organisms +`, ${label}` )
    )
    setOrganism({"labels":labels,'predictions':`:`+predictions})
    /*
    .then(response_organism => {
      let data_organism=response_organism.data
      let labels=data_organism['labels']
      let predictions=data_organism['predictions']
      setOrganism({"labels":labels,'predictions':predictions})
      console.log(data_organism)
      console.log(data_organism['labels'])
      console.log(data_organism['predictions'])
      console.log(organism.labels)
      console.log(organism.predictions)
      data_organism['labels'].map(label =>(
        organisms=organisms +`, ${label}` )
      )
      console.log(organisms)
    })
    .catch(err =>{
      console.log(err)
    })*/
     /*****************************/
     const response_sector= await axios.post("http://0a6d1a89d512.ngrok.io/sector_predict",data,{
      headers:{
        'content-type':'application/json;charet=UTF-8',
        "Acces-Control-Allow-Origin":"*",
        'Accept':"text/plain",
      }
    })
    let data_sector=response_sector.data
    console.log(data_sector['labels'])
    console.log(data_sector['predictions'])
    setSector({"labels":data_sector['labels'],'predictions':`:`+data_sector['predictions']}) 
    /*
    .then(response_sector => {
      let data_sector=response_sector.data
      setSector({"labels":data_sector['labels'],'predictions':data_sector['predictions']})
      console.log(data_sector)
      console.log(sector.labels)
      console.log(sector.predictions)
    })
    .catch(err =>{
      console.log(err)
    })*/
  /*****************************/ 
  const response_thematic= await axios.post("http://ac8b1a316af1.ngrok.io/thematic_predict",data,{
    headers:{
      'content-type':'application/json;charet=UTF-8',
      "Acces-Control-Allow-Origin":"*",
      'Accept':"text/plain",
    }
  })
  let data_thematic=response_thematic.data
  console.log(data_sector['labels'])
  console.log(data_sector['predictions'])
  setThematic({"labels":data_thematic['labels'],'predictions':`:`+data_thematic['predictions']})
    /*
  .then(response_thematic => {
    let data_thematic=response_thematic.data
    setThematic({"labels":data_thematic['labels'],'predictions':data_thematic['predictions']})
    console.log(data_thematic)
    console.log(thematic.labels)
    console.log(thematic.predictions)
  })
  .catch(err =>{
    console.log(err)
  })*/
    
 }}
    
    function createData(name, value) {
      return { name, value };
    }
    
    
    const rows = [
      createData('Organisme', ),
      createData('Secteur', ),
      createData('Type', ),
      createData('Thématique', )
    ];
    organism.labels.map(label =>(
      organisms_labels= (label.key==0) ? organisms_labels : organisms_labels +` ${label},` )
    )
    organism.predictions.map(label =>(
      organisms_predictions= (label.key==0) ? ':' : organisms_predictions +` ${label},` )
    )
    sector.labels.map(label =>(
      sectors_labels=sectors_labels +` ${label} ,` )
    )
    sector.predictions.map(label =>(
      sectors_predictions=sectors_predictions +` ${label} ,` )
    )
    thematic.labels.map(label =>(
      thematics_labels=thematics_labels +` ${label} ,` )
    )
    thematic.predictions.map(label =>(
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
              <TableCell > {type.label}  {type.prediction} </TableCell>
        </TableRow>
        <TableRow key="Organism">
              <TableCell component="th" scope="row">
                Organisme
              </TableCell> 
              <TableCell> {organisms_labels}  {organisms_predictions} </TableCell>
        </TableRow>
        <TableRow key="Sector">
              <TableCell component="th" scope="row">
                Secteur
              </TableCell> 
              <TableCell> {sectors_labels}  {sectors_predictions} </TableCell>
        </TableRow>
        <TableRow key="Thematic">
              <TableCell component="th" scope="row">
                Thématique
              </TableCell> 
              <TableCell> {thematics_labels}  {thematics_predictions} </TableCell>
        </TableRow>
           
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
     /* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.value}</TableCell>
            </TableRow>
          ))}*/
  )
}
