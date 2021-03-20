import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import Home from './Home.js';
import MoviePoster from './components/MoviePoster.js'
import Profile from './Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path = "/home" component = {Home} />
          <Route exact path = "/movie" component = {MoviePoster} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
