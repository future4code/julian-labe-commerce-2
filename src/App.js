import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components'

const ProdutoContainer = styled.div`
  background-color: blue;
  color: yellow;
`

function App() {
  return (
    <div>
    <ProdutoContainer>
      <h1>olá</h1>
    </ProdutoContainer>
    </div>
  );
}

export default App;
