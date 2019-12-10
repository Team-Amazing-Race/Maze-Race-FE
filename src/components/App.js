import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Game from '../container/Game';


export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route path="/:roomId" component={Game} />
      </Switch>
    </Router>

  );
}
