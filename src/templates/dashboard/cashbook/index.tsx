import React from "react";
import { Switch, Route } from "react-router";
import CashbookBankAccountList from "./bank-account-list";
import BankProcessMap from "./bank-process-map";
// route prifix "/dashboard/cashbook"
const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route
        exact
        path={`${match.url}/bank-account-list`}
        component={CashbookBankAccountList}
      />
      <Route
        exact
        path={`${match.url}/bank-process-map`}
        component={BankProcessMap}
      />
    </Switch>
  </>
);

export default Routes;
