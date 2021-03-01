import React from "react";
import { Switch, Route } from "react-router";
import SellingPrices from "./selling-prices";

const Routes: React.FC<{ match: any }> = ({ match }) => (
    <>
        <Switch>
          <Route path={`${match.url}/selling-prices`} component={SellingPrices} />
        </Switch>
    </>
);

export default Routes;
