import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/login";
import NotFound from "../components/not-found";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
