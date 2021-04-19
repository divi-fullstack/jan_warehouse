import React from "react";
import { Switch, Route } from "react-router";
import SalesCreditNote from "./sales-credit-note";
import SalesInvoice from "./sales-invoice";
import SalesPayment from "./sales-payment";
import SalesReceipt from "./sales-receipt";

const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route path={`${match.url}/sales-invoice`} component={SalesInvoice} />
      <Route path={`${match.url}/sales-credit-note`} component={SalesCreditNote} />
      <Route path={`${match.url}/sales-receipt`} component={SalesReceipt} />
      <Route path={`${match.url}/sales-payment`} component={SalesPayment} />
    </Switch>
  </>
);

export default Routes;
