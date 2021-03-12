import React, {  useState } from 'react'
import { Listado } from '../proyectos/Listado'
import { NuevoProyecto } from '../proyectos/NuevoProyecto'



export const SideBar = () => {

    
    const [menu, setMenu] = useState(false)
    
   
    const handleClick =() => {
         setMenu(true)

    }
    const handleDoubleClick =() => {
        setMenu(false)
    }
    return (
        <>
       <a
       onClick={handleClick}
       onDoubleClick={handleDoubleClick}
       style={{ 'position':'absolute', 'margin': '10px'}}
       >
           <i 
           className="pi pi-bars" 
           style={{'fontSize': '2em'}} 
           />
    </a> 

    { menu ? 
            
            (

        <aside >
             <h1>MERN <span >TASK </span></h1>

                <NuevoProyecto />

        
            <div className="proyectos">

                <h2>Tus Proyectos</h2>

                    <Listado />
            </div>
        </aside>
        ): null
        
    }
        </>
    )
}
