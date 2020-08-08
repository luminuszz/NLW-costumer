import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { GlobalStyle } from '../styles/Global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Proffy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
