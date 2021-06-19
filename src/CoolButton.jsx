import {
  Button,
  makeStyles,
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
  buttonStyles: {
    color: "red",
    [theme.breakpoints.up("sm")]: {
      color: "blue",
    }
  },
  textBackground: {
    backgroundColor: "red",
  }
}))

function CoolButton(props) {
  const classes = useStyles();
  return (
    <Button className={classNames(classes.buttonStyles, classes.textBackground)}>
      The button
    </Button>
  )
}

export default CoolButton
