import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Proyectos } from './components/proyectos/Proyectos';

export const App = () => {
  return (

    <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/proyectos" component={Proyectos}/>
       
       <Redirect to='/' />
       
      </Switch>
       </Router>
   
  )
}

