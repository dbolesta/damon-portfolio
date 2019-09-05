import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './Components/Header';
import WorkStripe from './Components/WorkStripe';
import Footer from './Components/Footer';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { globalStyles } from './Styles/global';
import { theme } from './Styles/theme';

import { fetchData } from './Utils/prismicFetch';

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let data = await fetchData();
      setData(data);
    }

    fetchMyAPI();
  }, []);

  // console.log('here in your armmsssss');
  // console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <div className="App">
          <Header />
          {data ? (
            <React.Fragment>
              <WorkStripe
                bgColor={theme.workStripeColors.green}
                category="Sites"
                data={data.sites}
              />
              <WorkStripe
                bgColor={theme.workStripeColors.red}
                category="Games"
                data={data.games}
              />
            </React.Fragment>
          ) : null}
          <Footer />
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
