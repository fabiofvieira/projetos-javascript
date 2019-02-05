import React, { Component } from 'react';
import { Route } from 'react-router-dom';
const NotLogged = () => {
    return (<div>Não Logado</div>)
}

const PrivateRoute = ({ component: Component }, ...rest) => {
    const isLogged = () => {
        const logado  = false;
        return logado
    }
    return (
        <Route {...rest} render={(props) => (
            isLogged() ? <Component {...props} />: <NotLogged/>
          )} />
    )   
}
export default PrivateRoute;