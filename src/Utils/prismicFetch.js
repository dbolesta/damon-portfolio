import Prismic from 'prismic-javascript';
// import { Date, Link, RichText } from 'prismic-reactjs';

const apiEndpoint = 'https://damon-portfolio.prismic.io/api/v2';

const Client = Prismic.client(apiEndpoint);

// async func to return data
export const fetchData = async () => {
  // Prismic method
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'works')
  );

  //
  let data;

  if (response) {
    data = response.results;
  }

  console.log('inside prismic fetch');

  let dataObj = {
    sites: [],
    games: []
  };

  data.map(work => {
    if (work.data.category === 'Site') {
      dataObj.sites.push(work.data);
    } else {
      dataObj.games.push(work.data);
    }
  });

  return dataObj;
};
