import React from 'react';
import { Button } from 'primereact/button';


export const Proyecto = ({proyecto}) => {
    return (
        <li>
              <Button 
                     label={proyecto.name}  
                     className="p-button-help mt-5 p-3 btn-block"
                 />
        </li>
    )
}
