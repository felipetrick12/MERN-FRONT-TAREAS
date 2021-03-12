import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button } from 'primereact/button';
import { seleccionProyectos } from '../../actions/actionProyecto';


export const Proyecto = ({proyecto}) => {

    const {dispatch} = useContext(AuthContext);

        const handleClick =()=> {
            dispatch(seleccionProyectos(proyecto));
          
        }

    return (
        <li>
              <Button 
                     label={proyecto.name}  
                     className="p-button-info mt-5 p-3 btn-block"
                     onClick={handleClick}
                 />
        </li>
    )
}
