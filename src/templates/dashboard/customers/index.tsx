import React from "react";
import { Switch, Route } from "react-router";
import AccountAnalysis from "./account-analysis"
import CreateAmendAccounts from "./create-amend-accounts"
import CustomarEnquiries from "./customer-enquiries"
import EnterTransactions from "./enter-transactions"
const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route path={`${match.url}/account-analysis`} component={AccountAnalysis} />
      <Route path={`${match.url}/create-amend-accounts`} component={CreateAmendAccounts} />
      <Route path={`${match.url}/enquiries`} component={CustomarEnquiries} />
      <Route path={`${match.url}/enter-transactions`} component={EnterTransactions} />
    </Switch>
  </>
);

export default Routes;
