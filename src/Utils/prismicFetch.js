import Prismic from 'prismic-javascript';
// import { Date, Link, RichText } from 'prismic-reactjs';

const apiEndpoint = 'https://damon-portfolio.prismic.io/api/v2';

const Client = Prismic.client(apiEndpoint);

// async func to return data
export const fetchData = async () => {
  // Prismic methods
  // get data for both works & tech-stack
  const responseWork = await Client.query(
    Prismic.Predicates.at('document.type', 'works')
  );
  const responseTech = await Client.query(
    Prismic.Predicates.at('document.type', 'tech-stack')
  );

  //assign data var, then set fetched data as object data if fetch was successful
  let data;
  if (responseWork && responseTech) {
    data = {
      works: responseWork.results,
      techs: responseTech.results
    };
  }

  // two vars to fill with data in the upcoming map loops
  let workObj = {
    sites: [],
    games: []
  };
  let techs = [];

  // loop through works and seperate sites & games
  data.works.map(work => {
    if (work.data.category === 'Site') {
      return workObj.sites.push(work.data);
    } else {
      return workObj.games.push(work.data);
    }
  });

  // push tech data
  data.techs.map(tech => {
    return techs.push(tech.data);
  });

  // create one object containing both objects created above
  let dataObj = {
    works: workObj,
    techs: techs
  };

  return dataObj;
};
