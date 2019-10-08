import React, { useState, useEffect, useRef } from 'react';
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

  const scrollBio = useRef(null);
  const scrollWorks = useRef(null);
  const scrollGames = useRef(null);
  // const scrollFooter = useRef(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let data = await fetchData();
      setData(data);
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    console.log('%c refs in useeffect', 'font-size: 16px');

    console.log(scrollBio);
    console.log(scrollWorks);
    console.log(scrollGames);
  }, [scrollBio, scrollWorks, scrollGames]);
  // console.log('here in your armmsssss');
  // console.log(data);

  console.log('refs');
  console.log(scrollBio, scrollWorks, scrollGames);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <FootWrap>
          <div className="App">
            <LeftColumn
              scrollRefs={{ scrollBio, scrollWorks, scrollGames }}
            >
              <SideHeader />
            </LeftColumn>
            <ContentWrap>
              <Header />
              <Bio ref={scrollBio} />
              {data ? (
                <React.Fragment>
                  <WorkStripe
                    bgColor={theme.colors.pink}
                    textColor={theme.colors.blue2}
                    category="Sites"
                    data={data.sites}
                    sites
                    circleBg
                    ref={scrollWorks}
                  />
                  <WorkStripe
                    bgColor={theme.colors.asteroid.black}
                    textColor={theme.colors.asteroid.white}
                    category="Games"
                    data={data.games}
                    games
                    redDot
                    ref={scrollGames}
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
