import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

function App() {
  return (<>
    <span>hello</span>
    <Switch>
      <Route exact path="/" render={props => <Pokedex {...props} />}/>
      <Route exact path="/:pokemonId" render={props => <Pokemon {...props} />}/>
    </Switch>
  </>);
}

export default App;
