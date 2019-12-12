import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../container/Home';
import Lobby from '../container/Lobby';
import Game from '../container/Game';

import About from './users/About';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId/game" component={Game} />
        <Route path="/:roomId" component={Lobby} />
      </Switch>
    </Router>
  );
}
