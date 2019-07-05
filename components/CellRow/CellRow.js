/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell';
import CellRowStyles from './CellRow.style';

const CellRow = ({
  color,
  specialCells,
  className,
  containerClass,
  cellId
}) => {
  let cellIdentifire = cellId - 1;

  const getClassName = (id) => {
    return 'cell '.concat(specialCells.includes(id) ? color : '');
  };

  return (
    <div className={containerClass}>
      {new Array(6).fill('').map(() => {
        return (
          <div className={className}>
            <Cell
              id={++cellIdentifire}
              className={getClassName(cellIdentifire)}
            />
            <Cell
              id={++cellIdentifire}
              className={getClassName(cellIdentifire)}
            />
            <Cell
              id={++cellIdentifire}
              className={getClassName(cellIdentifire)}
            />
          </div>
        );
      })}
      <style jsx>{CellRowStyles}</style>
    </div>
  );
};

CellRow.defaultProps = {
  color: '',
  specialCells: [],
  className: '',
  containerClass: '',
  cellId: 0
};

CellRow.propTypes = {
  color: PropTypes.string,
  specialCells: PropTypes.array,
  className: PropTypes.string,
  containerClass: PropTypes.string,
  cellId: PropTypes.number
};

export default CellRow;
