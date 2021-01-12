import React from "react";
import { Switch, Route } from "react-router";
import Transactions from "./transactions";
const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route exact path={`${match.url}/transactions`} component={Transactions} />
    </Switch>
  </>
);

export default Routes;
