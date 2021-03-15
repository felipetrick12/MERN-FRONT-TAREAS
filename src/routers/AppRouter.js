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
  import { AuthContext } from '../context/AuthContext';
  import { TareaContext } from '../context/TareaContext';
  
  import { ProyectoReducer } from '../context/ProyectoReducer';
  import { TareasReducer } from '../context/TareasReducer';

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
        <AuthContext.Provider value ={{state , dispatch}}>
        <TareaContext.Provider value ={{stateTarea , dispatchTarea}}>

                    <Router>
                        <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/proyectos" component={Proyectos}/>
                    
                        <Redirect to='/' />
                    
                    </Switch>
                    </Router>

       </TareaContext.Provider>
       </AuthContext.Provider>
   
  )
    
}
