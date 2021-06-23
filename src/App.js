import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import WebcamExercise from './screens/WebcamExercise';
import ThankYou from './screens/ThankYou';

function App() {
  return (
    <div className="App">
      <header>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/exercise" component={WebcamExercise} exact />
          <Route path="/thanks" component={ThankYou} exact />
        </Switch>
      </header>
    </div>
  );
}

export default App;
