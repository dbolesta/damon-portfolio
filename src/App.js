import React from 'react';
import './App.css';

import Header from './Components/Header';
import WorkStripe from './Components/WorkStripe';
import Footer from './Components/Footer';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { globalStyles } from './Styles/global';
import { theme } from './Styles/theme';

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <div className="App">
          <Header />
          <WorkStripe
            bgColor={theme.workStripeColors.green}
            category="Sites"
          />
          <WorkStripe
            bgColor={theme.workStripeColors.red}
            category="Games"
          />
          <Footer />
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
