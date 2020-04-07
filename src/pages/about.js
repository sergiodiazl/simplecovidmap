import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>About this app</h1>
        <p>This app is just a a project done for learning the use of maps with the react framework.
          The data shown here tries to be as truthful as possible but it should not be used for any kind of statistical analysis.
          You can see the <a href="https://github.com/novelcovid/api">data sources here </a>and  <a href="https://github.com/sergiodiazl/simplecovidmap">source code here</a>.
          For a map that can be used for statistical analysis,you can use 
          <a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
          the John Hopkins University map
          </a>
          </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
