import {
  Button,
  makeStyles,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  buttonStyles: {
    color: props => (props.cool ? "blue" : "red")
  }
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
