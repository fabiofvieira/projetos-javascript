import React from 'react';
import styled from 'styled-components';
import Header  from "./components/Header";
import Footer from './components/Footer';
import { Viewport } from './components/Viewport';

export const Container = styled.div`
              display: flex;
              flex-direction: column;
                flex:1;
                background: #f2f2f2;
                height: 100%;`;

function App() {
  return (
    <Container>
      <Header/>
      <Viewport/>
      <Footer/>
    </Container>
  );
}

export default App;
