import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red',
  },
  buttonStyles: {
    color: 'green',
    border: 0,
  },
})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography
        className={classes.helloThereStyle}
        variant="h1"
        color="primary"
      >
        Hello there
      </Typography>
      <Button color="secondary">My first button</Button>
    </div>
  );
}

export default App;
