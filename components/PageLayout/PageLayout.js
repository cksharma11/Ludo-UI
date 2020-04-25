import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import GlobalStyles from '../globalStyles';

const PageLayout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Ludo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Ubuntu:300&display=swap"
        />
      </Head>
      <div className="container">{children}</div>
      <style jsx>{GlobalStyles}</style>
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
