import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    borderLeft:200,
    marginLeft:70,
    fontFamily:'Raleway',
    color:'#263238',
  },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  btn:{
    marginLeft:1000,
    align : "Right",
    '&:hover':{
      backgroundColor:'#006064'
    }
    
  }
}));

export default function HomeContent() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div align="center">
        <Card center className={classes.root}>
        <CardMedia
          className={classes.media}
          image="./green.jpg"
          title="ML image"
        />
        <CardContent>
          <Typography variant="h6" color="textPrimary" component="h6">
          Bienvenue à l'interface de classification des textes juridiques , vous pouvez commencer en cliquant sur le boutton  "Commencer"
          </Typography>
        </CardContent>
      </Card>
      <div>
        
     <Button onClick={() => history.push('/classify')}variant ="contained" color="primary" className={classes.btn}>Commencer</Button>
      </div>
      </div>
    )
  }