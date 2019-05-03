import React from 'react';
import styled from 'styled-components';
import Header  from "./components/Header";
import Footer from './components/Footer';
import Profile from './components/Profile';

import { Viewport } from './components/Viewport';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Container = styled.div`
              display: flex;
              flex-direction: column;
                flex:1;
                background: #f2f2f2;
                height: 100%;`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header/>
        <div style={{ overflowX: 'auto', display: 'flex', flex: 1, padding: '1rem' }}>
          <Switch>
            <Route path="/" exact component={Viewport} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </div>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
