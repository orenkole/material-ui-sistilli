import {
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import classNames from "classnames";

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

function CoolButton(props) {
  const classes = useStyles();
  return (
    <Typography
      classes={{ gutterBottom: classes.gutterBottom }}
    >Hello</Typography>
  )
}

export default CoolButton
