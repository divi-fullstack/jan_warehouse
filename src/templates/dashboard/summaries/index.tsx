import React from "react";
import { Switch, Route } from "react-router";
import SalesSummaries from "./sales"
import PurchasesSummaries from "./purchases"
import FinancialsSummaries from "./financials";
import SalesOrdersSummaries from "./sales-orders";
import PurchaseOrdersSummaries from "./purchase-orders";
import StockControlSummaries from "./stock-control";
const Routes: React.FC<{ match: any }> = ({ match }) => (
    <>
        <Switch>
            <div className="summaries">
                <Route exact path={`${match.url}/sales`} component={SalesSummaries} />
                <Route exact path={`${match.url}/purchases`} component={PurchasesSummaries} />
                <Route exact path={`${match.url}/financials`} component={FinancialsSummaries} />
                <Route exact path={`${match.url}/sales-orders`} component={SalesOrdersSummaries} />
                <Route exact path={`${match.url}/purchase-orders`} component={PurchaseOrdersSummaries} />
                <Route exact path={`${match.url}/stock-control`} component={StockControlSummaries} />
            </div>
        </Switch>
    </>
);

export default Routes;
