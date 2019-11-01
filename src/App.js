import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import ReactGA from 'react-ga';

import Header from './Components/Header';
import WorkStripe from './Components/WorkStripe';
import Bio from './Components/Bio';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { globalStyles } from './Styles/global';
import { theme } from './Styles/theme';

import { fetchData } from './Utils/prismicFetch';
import FootWrap from './Components/FootWrap';
import ContentWrap from './Components/ContentWrap';
import LeftColumn from './Components/LeftColumn';
import SideHeader from './Components/SideHeader';
import MobileMenu from './Components/MobileMenu';

function initializeAnalytics() {
  ReactGA.initialize('UA-151346804-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  // start google analytics
  initializeAnalytics();

  // data to store prismic api fetching
  const [dataWork, setDataWork] = useState(null);
  const [dataTech, setDataTech] = useState(null);

  // grab refs of each section we want to be able to scroll to on click
  const scrollBio = useRef(null);
  const scrollSites = useRef(null);
  const scrollGames = useRef(null);
  const scrollFooter = useRef(null);

  // fetch prismic info
  useEffect(() => {
    async function fetchMyAPI() {
      let prismicData = await fetchData();

      setDataWork(prismicData.works);
      setDataTech(prismicData.techs);
    }

    fetchMyAPI();
  }, []);

  // used as click events for navigation, will scroll to ref of component passed
  const scrollToIt = scrollRef => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <FootWrap ref={scrollFooter}>
          <div className="App">
            <LeftColumn
              scrollRefs={{
                scrollBio,
                scrollSites,
                scrollGames,
                scrollFooter
              }}
              clickHandler={scrollToIt}
            >
              <SideHeader />
            </LeftColumn>
            <ContentWrap>
              <Header
                scrollRefs={{
                  scrollBio,
                  scrollSites,
                  scrollGames,
                  scrollFooter
                }}
                clickHandler={scrollToIt}
              />
              <MobileMenu
                scrollRefs={{
                  scrollBio,
                  scrollSites,
                  scrollGames,
                  scrollFooter
                }}
                clickHandler={scrollToIt}
              />
              <Bio
                ref={scrollBio}
                data={dataTech ? dataTech : undefined}
              />
              {dataWork ? (
                <React.Fragment>
                  <WorkStripe
                    bgColor="linear-gradient(141deg, rgba(15,66,114,1) 2%, rgba(138,121,213,1) 99%);" //146
                    textColor={theme.colors.blue2}
                    category="Sites"
                    data={dataWork.sites}
                    sites
                    circleBg
                    ref={scrollSites}
                  />
                  <WorkStripe
                    bgColor={theme.colors.asteroid.black}
                    textColor={theme.colors.asteroid.white}
                    category="Games"
                    data={dataWork.games}
                    games
                    redDot
                    ref={scrollGames}
                  />
                </React.Fragment>
              ) : null}
            </ContentWrap>
          </div>
        </FootWrap>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
