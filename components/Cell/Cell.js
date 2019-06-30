import React from 'react';
import PropTypes from 'prop-types';
import CellStyles from './Cell.style';

const Cell = ({ id, className }) => {
  return (
    <div id={id} className={className}>
      <style jsx>{CellStyles}</style>
    </div>
  );
};

Cell.defaultProps = {
  id: 0,
  className: ''
};

Cell.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string
};

export default Cell;
