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
  gutterBottom: {
    marginBottom: ".5rem",
  }
}))

function TestComponent(props) {

  return (
    <Paper>
      <Typography
        variant="h1"
      >Hello</Typography>
    </Paper>
  )
}

export default TestComponent
