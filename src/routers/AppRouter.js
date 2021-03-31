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
       tareas : [ 
           {id:1,nombre:'hacer Diseño ',estado:true, proyectoID:1},
           {id:2,nombre:'hacer electronico ',estado:true, proyectoID:2},
           {id:3,nombre:'hacer Diseño ',estado:false, proyectoID:3},
           {id:4,nombre:'hacer algo ',estado:true, proyectoID:1},
           {id:5,nombre:'hacer electronico ',estado:true, proyectoID:2},
           {id:6,nombre:'hacer nada ',estado:false, proyectoID:3},
           {id:7,nombre:'hacer depronto ',estado:true, proyectoID:3},
           {id:8,nombre:'hacer quizas ',estado:true, proyectoID:2},
           {id:9,nombre:'hacer talvez ',estado:false, proyectoID:2},
     ],
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
