import React from "react";
import { Switch, Route } from "react-router";
import DashboardLayout from "../../dashboardLayout";
import InitialDashboard from "./dashboard";
import BankAccount from "./bank-account";
import Summaries from "./summaries";
import Customers from "./customers";
import Cashbook from "./cashbook";
import Nominal from "./nominal";
const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <DashboardLayout rootClasses='dashboard-main'>
        <Route exact path={`${match.url}/`} component={InitialDashboard} />
        <Route path={`${match.url}/summaries`} component={Summaries} />
        <Route path={`${match.url}/bank-account`} component={BankAccount} />
        <Route path={`${match.url}/customers`} component={Customers} />
        <Route path={`${match.url}/cashbook`} component={Cashbook} />
        <Route path={`${match.url}/nominal`} component={Nominal} />
      </DashboardLayout>
    </Switch>
  </>
);

export default Routes;
