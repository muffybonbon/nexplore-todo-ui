import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage';

import 'react-toastify/dist/ReactToastify.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0efe9;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default App;
