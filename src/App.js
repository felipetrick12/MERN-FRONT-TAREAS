import React from 'react'
import { tokenAuth } from './config/tokenAuth';
import { AppRouter } from './routers/AppRouter'


const token = localStorage.getItem('token');

if(token){
  tokenAuth(token);
}

export const App = () => {

    return (
      <AppRouter />
    )
   
}

