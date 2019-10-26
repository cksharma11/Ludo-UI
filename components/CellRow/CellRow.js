/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell';
import CellRowStyles from './CellRow.style';
import { safeCells, startingCells } from '../../config/data/cells-structure';

const CellRow = ({ color, className, containerClass, gameData, playerId }) => {
  let cellIdentifire = startingCells[color] - 1;
  const isSafeCell = (id) => safeCells[color].includes(id);
  const isUniversalSafeCell = (id) => safeCells.universal.includes(id);

  const getClassName = (id) => {
    let cell = 'cell ';
    if (isSafeCell(id)) cell += ` ${color}`;
    if (isUniversalSafeCell(id)) cell += ` safe-cell`;
    return cell;
  };

  return (
    <div className={containerClass}>
      {new Array(6).fill('').map(() => {
        return (
          <div className={className} key={cellIdentifire}>
            <Cell
              id={++cellIdentifire}
              className={getClassName(cellIdentifire)}
              gameData={gameData}
              playerId={playerId}
            />
            <Cell
              id={++cellIdentifire}
              className={getClassName(cellIdentifire)}
              gameData={gameData}
              playerId={playerId}
            />
            <Cell
              id={++cellIdentifire}
              className={getClassName(cellIdentifire)}
              gameData={gameData}
              playerId={playerId}
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
  className: '',
  containerClass: ''
};

CellRow.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  containerClass: PropTypes.string
};

export default CellRow;
