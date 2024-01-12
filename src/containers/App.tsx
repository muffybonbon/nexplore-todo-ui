import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0efe9;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default App;
