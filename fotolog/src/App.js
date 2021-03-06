import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import ContactUs from './pages/ContactUs';
import User from './pages/User';
import UserPhoto from './pages/UserPhoto';
import JoinUs from './pages/JoinUs';
import MyProfile from './pages/admin/MyProfile';
import MyProfileEdit from './pages/admin/MyProfileEdit';
import MyPhotos from './pages/admin/MyPhotos';
import Find from './pages/Find';
import PrivateRoute from './middlewares/PrivateRoute';
import Error404 from './pages/errors/Error404';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <div>
            <Switch>
              /* global */
              <Route path="/" exact component={Index} />
              <Route path="/encontre" exact component={Find} />
              <Route path="/contato" exact component={ContactUs} />
              <Route path="/cadastrar-se" exact component={JoinUs} />
              /* auth routes */
              <PrivateRoute path="/meu-perfil" exact component={MyProfile} />
              <PrivateRoute path="/meu-perfil/editar" exact component={MyProfileEdit} />
              <PrivateRoute path="/meu-perfil/minhas-fotos" exact component={MyPhotos} />

              /* user */
              <Route path="/:username" exact component={User} />
              <Route path="/:username/:photo_id" exact component={UserPhoto} />

              <Route path='*' component={Error404} />
            </Switch>
          </div>
          <Footer/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
