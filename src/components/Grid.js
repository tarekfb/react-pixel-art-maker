import React from 'react';

import useStyles from './Grid.styles';

const offCell = {
  on: false,
  color: '#000000'
}

const Grid = ({ currentColor, cells, setCells }) => {
  const classes = useStyles();

  const updateCell = (i, defaultState) => (e) => {
    e.preventDefault();
    setCells(cells.map((cell, cellIndex) => {
      if (cellIndex === i) {
        if (defaultState)
          return defaultState;
        return {
          on: true,
          color: currentColor
        }
      }
      return cell;
    }))
  };

  return (
    <div className={classes.grid}>

      {cells.map((cell, i) => (
        <div
          key={i}
          style={{ background: cell.on ? cell.color : '#ffffff' }}
          className={classes.cell}
          onClick={updateCell(i)}
          onContextMenu={updateCell(i, offCell)}
        />
      ))}
    </div>
  );
};

export default Grid;