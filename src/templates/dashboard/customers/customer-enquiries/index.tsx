import React from "react";
import { Switch, Route } from "react-router";
import TransactionEnquiry from "./transaction-enquiry";

const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route path={`${match.url}/transaction-enquiry`} component={TransactionEnquiry} />
    </Switch>
  </>
);

export default Routes;
