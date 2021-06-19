import {
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import classNames from "classnames";
import { useThemes } from '@material-ui/core/styles';

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
    <Typography
      color="primary"
      variant="h1"
    >Hello</Typography>
  )
}

export default TestComponent
