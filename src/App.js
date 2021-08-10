import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Classify from './pages/Classify'
import HomePage from './pages/HomePage';
import Organism from './pages/organism' 
import Sector from './pages/sector'
import Thematic from './pages/thematic'
import Type from './pages/type'
import AddOrganism from './pages/addOrganism';
import {createMuiTheme , ThemeProvider} from '@material-ui/core'
import { cyan, purple } from '@material-ui/core/colors';



const MyTheme= createMuiTheme({
  palette :{
    primary:{
      main : '#009688'
    },
    secondary:cyan
  },
  typography:{
    fontFamily:'Raleway',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
})
function App() {
  return (
    <ThemeProvider theme={MyTheme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/Classify">
          <Classify />
        </Route>
        <Route path="/organism">
          <Organism /> 
        </Route>
        <Route path="/sector">
         <Sector />
        </Route>
        <Route path="/thematic">
         <Thematic />
        </Route>
        <Route path="/type">
          <Type />
        </Route>
        <Route path="/addOrganism">
          <AddOrganism />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
