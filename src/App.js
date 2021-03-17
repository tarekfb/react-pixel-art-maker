import React, {useMemo, useState} from 'react';

import useStyles from './App.styles';
import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker'
import DarkModeToggle from "react-dark-mode-toggle";

const offCell = {
  on: false,
  color: '#000000'
}


const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const [isDarkMode, setIsDarkMode] = useState(() => false)

  const classes = useStyles();

  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );

  const chatString = useMemo(() => cells
    .map((cell) => cell.color.slice(1))
    .join(',')
    , [cells]);

  const clearGrid = () => {
    setCells(initialCells);
  };

  return (
    <div className={isDarkMode ? classes.appDark : classes.appLight}>

      <DarkModeToggle
        className={classes.darkModeToggle}
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      />

      <ColorPicker
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <div className={classes.colorSwatchContainer}>
        {
          colorSwatch.map((color => (
            <div
              key={color}
              className={classes.colorSwatch}
              style={{ background: color}}
            />
          )))
        }
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor}/>
      <button
        className={isDarkMode ? classes.buttonDark : classes.buttonLight}
        onClick={clearGrid}
      >
        Clear grid
      </button>
      <p className={classes.chatString}>{chatString}</p>
    </div>
  );
}

export default App;
