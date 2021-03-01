import React from "react";
import { Switch, Route } from "react-router";
import PricesForStockItem from "./prices-for-stock-item";
import PricesForStockBand from "./prices-for-price-band";
import MarkupPrices from "./markup-prices";

const Routes: React.FC<{ match: any }> = ({ match }) => (
    <>
        <Switch>
            <div className="selling-prices">
                <Route path={`${match.url}/prices-for-stock-item`} component={PricesForStockItem} />
                <Route path={`${match.url}/prices-for-price-band`} component={PricesForStockBand} />
                <Route path={`${match.url}/markup-prices`} component={MarkupPrices} />
            </div>
        </Switch>
    </>
);

export default Routes;
