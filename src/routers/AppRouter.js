import React, { useReducer } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import { Login } from '../components/auth/Login';
  import { Register } from '../components/auth/Register';
  import { Proyectos } from '../components/proyectos/Proyectos';
  import { ProyectoContext } from '../context/proyecto/ProyectoContext';
  import { ProyectoReducer } from '../context/proyecto/ProyectoReducer';
  import { TareaContext } from '../context/tareas/TareaContext';
  import { TareasReducer } from '../context/tareas/TareasReducer';
  import { AuthState } from '../context/auth/AuthState';
import { PrivateRouter } from './PrivateRouter';
  
 
 
export const AppRouter = () => {

  
     const initProyecto = {
      proyectos : [],
      formulario : false,
      proyecto: null
   }

     const initTareas = {
       tareasProyecto: null,
       tareaSeleccionada:null,
       
    }

     const [state, dispatch] = useReducer(ProyectoReducer, initProyecto);
     const [stateTarea, dispatchTarea] = useReducer(TareasReducer, initTareas);
     

    return (
        <ProyectoContext.Provider value ={{state , dispatch}}>
        <TareaContext.Provider value ={{stateTarea , dispatchTarea}}>
          <AuthState >

                    <Router>
                        <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <PrivateRouter exact path="/proyectos" component={Proyectos}/>
                    
                        <Redirect to='/' />
                    
                    </Switch>
                    </Router>

         </AuthState>
       </TareaContext.Provider>
       </ProyectoContext.Provider>
   
  )
    
}
