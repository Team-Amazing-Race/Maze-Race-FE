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
  const color = ['red', 'green', 'blue', 'purple'];
  const symbols = ['√', '◊', 'Ó', ''];
  const handleSubmit = () => {
    console.log('a little sumpin sumpin');
  };

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:roomId" component={Lobby} />
        <Route path="/:roomId/game" component={Game} />
      </Switch>
    </Router>
  );
}
