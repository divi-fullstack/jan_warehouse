import React from "react";
import { Switch, Route } from "react-router";
import discountsForProductGroup from "./discounts-for-product-group"

const Routes: React.FC<{ match: any }> = ({ match }) => (
    <>
        <Switch>
            <div className="discounts">
                <Route path={`${match.url}/discounts-for-product-group`} component={discountsForProductGroup} />
            </div>
        </Switch>
    </>
);

export default Routes;
