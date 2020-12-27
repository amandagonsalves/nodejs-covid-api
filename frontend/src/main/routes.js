import React from "react";
import { createBrowserHistory } from "history";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import Cases from "../case/All";
import LastDays from "../case/LastDays";

const history = createBrowserHistory();

export default props => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/filter' component={LastDays} />
        <Route exact path='/' component={Cases} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}