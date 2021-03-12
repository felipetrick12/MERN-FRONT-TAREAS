import React, {  useState } from 'react'
import { Listado } from '../proyectos/Listado'
import { NuevoProyecto } from '../proyectos/NuevoProyecto'



export const SideBar = () => {

    
    const [menu, setMenu] = useState(true)
    
   
    const handleClick =() => {
         setMenu(false)

    }
    const handleDoubleClick =() => {
        setMenu(true)
    }
    return (
        <>
       <button
       onClick={handleClick}
       onDoubleClick={handleDoubleClick}
       style={{ 'position':'absolute', 'margin': '10px', 'background':'#00000000','border':'none'}}
       >
           <i 
           className="pi pi-bars" 
           style={{'fontSize': '2em'}} 
           />
    </button> 

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
