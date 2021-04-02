

export const types= {
    
    ShowFormulario : '[auth] show formulario',
    hideFormulario : '[auth] hide formulario',

    //Reducerproyectos
    GetProyectos : '[auth] get proyectos',
    AddProyecto: '[auth] add proyecto',
    SelectProyecto: '[auth] select proyecto',
    DeleteProyecto : '[auth] delete proyecto',

    //Reducer Tareas
    GetTareas : '[auth] get tareas',
    AddTareas : '[auth] add tareas',
    DeleteTareas : '[auth] delete tareas',
    estadoTareas : '[auth] estado tareas',
    selectTarea : '[auth] select tareas',
    editarTarea: '[auth] editar tarea',

    //reducer sesions

    authRegister: '[auth] register',
    getUser :'[Auth] GET USER',
    authLogin: '[auth] auth login',
    logout : '[auth] logout'
   
}