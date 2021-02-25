import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import './App.css';

function App() {
  return (
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/dashboard">
            <h1>Hello</h1>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
