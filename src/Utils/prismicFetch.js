import Prismic from 'prismic-javascript';
// import { Date, Link, RichText } from 'prismic-reactjs';

const apiEndpoint = 'https://damon-portfolio.prismic.io/api/v2';

const Client = Prismic.client(apiEndpoint);

// async func to return data
export const fetchData = async () => {
  // Prismic method
  const responseWork = await Client.query(
    Prismic.Predicates.at('document.type', 'works')
  );

  const responseTech = await Client.query(
    Prismic.Predicates.at('document.type', 'tech-stack')
  );

  console.log('testhing new prismic daa fetch!!');

  console.log(responseTech.results);

  responseTech.results.map(tech => {
    console.log(tech.data);
  });

  //
  let data;

  if (responseWork && responseTech) {
    data = {
      works: responseWork.results,
      techs: responseTech.results
    };
  }

  console.log('inside prismic fetch');

  let workObj = {
    sites: [],
    games: []
  };

  let techs = [];

  data.works.map(work => {
    if (work.data.category === 'Site') {
      workObj.sites.push(work.data);
    } else {
      workObj.games.push(work.data);
    }
  });

  data.techs.map(tech => {
    techs.push(tech.data);
  });

  let dataObj = {
    works: workObj,
    techs: techs
  };

  console.log('%c Pls jesus', 'font-size: 16px');
  console.log(dataObj);

  return dataObj;
};
