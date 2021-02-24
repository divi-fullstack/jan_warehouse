import React from "react";
import { Switch, Route } from "react-router";
import CreateSupplier from "./create-supplier";
const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route path={`${match.url}/create-supplier`} component={CreateSupplier} />
    </Switch>
  </>
);

export default Routes;
