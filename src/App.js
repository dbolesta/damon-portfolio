import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './Components/Header';
import WorkStripe from './Components/WorkStripe';
import Footer from './Components/Footer';
import Bio from './Components/Bio';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { globalStyles } from './Styles/global';
import { theme } from './Styles/theme';

import { fetchData } from './Utils/prismicFetch';
import FootWrap from './Components/FootWrap';
import ContentWrap from './Components/ContentWrap';
import LeftColumn from './Components/LeftColumn';
import SideHeader from './Components/SideHeader';

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
        <FootWrap>
          <div className="App">
            <LeftColumn>
              <SideHeader></SideHeader>
            </LeftColumn>
            <ContentWrap>
              <Header />
              <Bio />
              {data ? (
                <React.Fragment>
                  <WorkStripe
                    bgColor={theme.colors.pink}
                    textColor={theme.colors.blue2}
                    category="Sites"
                    data={data.sites}
                    sites
                    circleBg
                  />
                  <WorkStripe
                    bgColor={theme.colors.asteroid.black}
                    textColor={theme.colors.asteroid.white}
                    category="Games"
                    data={data.games}
                    games
                    redDot
                  />
                </React.Fragment>
              ) : null}
              {/* <Footer /> */}
            </ContentWrap>
          </div>
        </FootWrap>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
