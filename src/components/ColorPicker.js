import React from "react";
import useStyles from './ColorPicker.styles';

const ColorPicker = ({ currentColor, setCurrentColor }) => {
  const classes = useStyles();

  const colorChange = (event) => {
    setCurrentColor(event.target.value);
  }

  return <input
    className={classes.colorPicker}
    type="color"
    onChange={colorChange}
    value={currentColor}
  />
};

export default ColorPicker;