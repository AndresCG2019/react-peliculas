import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './utils/Menu';
import rutas from './route-config'
import configurarValidaciones from './validaciones'
import { claim } from './auth/auth.model';
import AutenticacionContext from './auth/AutenticacionContext';

configurarValidaciones();

function App() {
  const [claims, setClaims] = useState<claim[]>([{nombre: "email", valor : "yo@yopmail.com"}]);

  function actualizar(claims: claim[]){
    setClaims(claims);
  }

  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{claims, actualizar}}>
          <Menu />
            <div className="container">
              <Switch>
                {rutas.map(ruta => 
                <Route key={ruta.path} path={ruta.path}
                  exact={ruta.exact}>
                    <ruta.componente />
                  </Route>)}
              </Switch>
            </div>
        </AutenticacionContext.Provider>    
      </BrowserRouter> 
    </>
  );
}

export default App;
