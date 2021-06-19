import {
  Button,
  makeStyles,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  buttonStyles: props => ({
    color: props.cool ? "blue" : "red",
    backgroundColor: props.cool ? "orange" : "yellow",
  })
});

function CoolButton(props) {
  const classes = useStyles(props);
  return (
    <Button className={classes.buttonStyles}>
      The button
    </Button>
  )
}

export default CoolButton
