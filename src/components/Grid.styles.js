import { createUseStyles } from "react-jss"

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '35vw',
    height: '20vw',
    outline: '2px solid black'
  },
  cell: {
    cursor: 'pointer',
    border: '2px solid black',
    backgroundColor: 'white',
    transition: 'all 150ms linear',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  }
});

