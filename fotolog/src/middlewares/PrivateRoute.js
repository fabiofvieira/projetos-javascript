import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Error401 from '../pages/errors/Error401';

const PrivateRoute = ({ component: Component }, ...rest) => {
    const isLogged = () => {
        const logado  = false;
        return logado
    }
    return (
        <Route {...rest} render={(props) => (
            isLogged() ? <Component {...props} />: <Error401/>
          )} />
    )   
}
export default PrivateRoute;