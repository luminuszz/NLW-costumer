import { AppProvider } from 'hooks';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from '../styles/Global';

import 'react-toastify/dist/ReactToastify.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isMonted, setIsMonted] = useState(false);

  useEffect(() => {
    setIsMonted(true);
  }, []);

  return (
    <>
      {isMonted && (
        <AppProvider>
          <GlobalStyle />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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
        </AppProvider>
      )}
    </>
  );
};

export default MyApp;
