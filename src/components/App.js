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
        <Route path="/:roomId" component={Lobby} />
        <Route path="/:roomId/game" component={Game} />
      </Switch>
    </Router>
  );
}
