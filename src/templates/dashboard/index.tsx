import React from "react";
import { Switch, Route } from "react-router";
import InitialDashboard from "./dashboard";
const Routes:React.FC<any> = ({ match }) => (
  <>
    <Switch>
      <Route exact path={`${match.url}/`} component={InitialDashboard} />
    </Switch>
  </>
);

export default Routes;
