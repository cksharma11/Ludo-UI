import React from 'react';
import PropTypes from 'prop-types';
import { LogStyles } from './Log.style';

const Log = ({ log }) => {
  return (
    <div className="log">
      {log}
      <style jsx>{LogStyles}</style>
    </div>
  );
};

Log.defaultProps = {
  log: ''
};

Log.propTypes = {
  log: PropTypes.string
};

export default Log;
