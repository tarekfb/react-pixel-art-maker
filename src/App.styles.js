import { createUseStyles } from "react-jss"

export default createUseStyles({

  // if reusing this file:
  // a better way to handle darkmode is to append dark / light to className
  // and use base class for the css that doesn't change
  app: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  appLight: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: "black",
    background: "linear-gradient(to right, #F8FFAE, #43C6AC)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

},
  appDark: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: "white",
    background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

},
  colorSwatchContainer: {
    display: "flex"
  },
  colorSwatch: {
    margin: '1rem',
    padding: 0,
    width: '25px',
    height: '25px',
    outline: 'none',
    border: 'none',
    cursor: "pointer",
  },
  chatString: {
    maxWidth: "50%",
    fontFamily: "monospace",
    wordWrap: "break-word"
  },
  buttonLight: {
    border: "none",
    padding: ".75em 1.5em",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
    fontSize: "20px",
    fontStyle: "bold",
    margin: "1em",
    backgroundImage: "linear-gradient(to right, #0f0c29 0%, #302b63  51%, #24243e  100%)",
    backgroundSize: "200% auto",
    borderRadius: "10px",
  },
  buttonDark: {
    border: "none",
    padding: ".75em 1.5em",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "black",
    fontSize: "20px",
    fontStyle: "bold",
    margin: "1em",
    backgroundSize: "200% auto",
    borderRadius: "10px",
    backgroundImage: "linear-gradient(to right, #F8FFAE, #43C6AC)",
  },
  darkModeToggle: {
    position: "absolute",
    top: "20px",
    right: "20px",
  }
});

