import React from "react";
import { Switch, Route } from "react-router";
import AccountDetails from "./account-details";
import DayBook from "./day-book";
import ECSalesList from "./ec-sales-list";
import ListOfAccounts from "./list-of-accounts";
import TradingReportSummary from "./trading-report-summary";
import TxnListingCurrent from "./txn-listing-current";
const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route path={`${match.url}/day-book`} component={DayBook} />
      <Route path={`${match.url}/list-of-accounts`} component={ListOfAccounts} />
      <Route path={`${match.url}/account-details`} component={AccountDetails} />
      <Route path={`${match.url}/txn-listing-current`} component={TxnListingCurrent} />
      <Route path={`${match.url}/trading-report-summary`} component={TradingReportSummary} />
      <Route path={`${match.url}/ec-sales-list`} component={ECSalesList} />
    </Switch>
  </>
);

export default Routes;
