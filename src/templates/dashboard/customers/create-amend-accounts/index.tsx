import React from "react";
import { Switch, Route } from "react-router";
import CreateCustomer from "./create-customer";
import customerDeliveryAddresses from "./customer-delivery-addresses"
const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route path={`${match.url}/create-customer`} component={CreateCustomer} />
      <Route path={`${match.url}/customer-delivery-addresses`} component={customerDeliveryAddresses} />
    </Switch>
  </>
);

export default Routes;
