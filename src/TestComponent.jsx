import {
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useTheme } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   buttonStyles: props => ({
//     color: props.cool ? "blue" : "red",
//     backgroundColor: props.cool ? "orange" : "yellow",
//   })
// });

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "50px",
  }
}))

function TestComponent(props) {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.root }}>
      <Typography
        variant="h1"
      >Hello</Typography>
    </Paper>
  )
}

export default TestComponent
