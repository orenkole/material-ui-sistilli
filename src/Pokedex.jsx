import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  pokedexContainer: {
    padding: '20px 50px 0',
  }
})

const getPokemonCard = () => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>Hi</CardContent>
      </Card>
    </Grid>
  )
}

export default function Pokedex(props) {
  const classes = useStyles();

  return (<>
    <AppBar position="static">
      <Toolbar/>
    </AppBar>
    <Grid container spacing={2} className={classes.pokedexContainer}>
      {getPokemonCard()}
      {getPokemonCard()}
    </Grid>
  </>)
}