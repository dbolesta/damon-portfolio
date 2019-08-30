import React from 'react';
import './App.css';

import Header from './Components/Header';
import WorkStripe from './Components/WorkStripe';

import { createGlobalStyle } from 'styled-components';
import { globalStyles } from './Styles/global';

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <Header />
        <WorkStripe bgColor="hsl(130, 70%, 75%)" />
        <WorkStripe bgColor="hsl(8, 70%, 75%)" />
      </div>
    </React.Fragment>
  );
}

export default App;
