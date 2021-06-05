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
  const [textError,setTextError] = useState(false);
  const buttonOnclick= (e) => {
    setTextError(false)
    if (text ==' '){
      setTextError(true)
    }
    e.preventDefault()
    if (text != ' ') { 
      console.log(text) }
    }
    function createData(name, value) {
      return { name, value };
    }
    
    const rows = [
      createData('Organisme', ),
      createData('Secteur', ),
      createData('Type', ),
      createData('Thématique', )
    ];
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
        placeholder=" Saisir le texte à etiquetter " 
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
            <TableCell className={classes.cellule}>La valeur de l'etiquette</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
     
  )
}
