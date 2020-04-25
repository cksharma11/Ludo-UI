import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const PageLayout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Ludo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          @import url('https://fonts.googleapis.com/css?family=Ubuntu:300&display=swap');
          padding: 0;
          margin: -8px;
          background: radial-gradient(
            ellipse at center,
            rgb(99, 155, 155) 0%,
            rgb(25, 41, 41) 99%,
            rgb(69, 108, 108) 100%
          );
          font-family: 'Ubuntu', sans-serif;
        }
        button {
          font-family: 'Ubuntu', sans-serif;
          border-radius: 3px;
        }
      `}</style>
    </Fragment>
  );
};

PageLayout.propTypes = {
  children: PropTypes.object
};

PageLayout.defaultProps = {
  children: {}
};

export default PageLayout;
