import React from "react";
import { Switch, Route } from "react-router";
import SellingPrices from "./selling-prices";
import Discounts from "./discounts"

const Routes: React.FC<{ match: any }> = ({ match }) => (
    <>
        <Switch>
          <Route path={`${match.url}/selling-prices`} component={SellingPrices} />
          <Route path={`${match.url}/discounts`} component={Discounts} />
        </Switch>
    </>
);

export default Routes;
