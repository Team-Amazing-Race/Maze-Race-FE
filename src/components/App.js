import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../container/Home';
import Lobby from '../container/Lobby';
import Game from '../container/Game';
import PlayerSelection from '../components/users/PlayerSelection';

import About from './users/About';
import aboutProps from '../components/users/AboutProps.json';

export default function App() {
  return (
    <Router>
      <Switch>
        <About name={aboutProps.name} img={aboutProps.image} desc={aboutProps.desc} />
        <Route exact path="/" component={Home} />
        <Route path="/:roomId" component={Lobby} />
        <Route path="/:roomId/game" component={Game} />
      </Switch>
    </Router>
  );
}
