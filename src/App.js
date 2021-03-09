import React, { useReducer } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Proyectos } from './components/proyectos/Proyectos';
import { AuthContext } from './context/AuthContext';
import { authReducer } from './context/authReducer';

export const App = () => {

      const initState = {
         proyectos : [],
          formulario : false
      }

      const [state, dispatch] = useReducer(authReducer, initState)

  return (
    <AuthContext.Provider value ={{state , dispatch}}>
    <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/proyectos" component={Proyectos}/>
       
       <Redirect to='/' />
       
      </Switch>
       </Router>
       </AuthContext.Provider>
   
  )
}

