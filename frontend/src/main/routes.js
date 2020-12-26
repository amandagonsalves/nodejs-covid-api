import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Header from '../layout/Header';

const history = createBrowserHistory();

export default props => {
  return (
    <Router history={history}>
      <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
    </Router>
  )
}