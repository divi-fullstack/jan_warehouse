import React from "react";
import { Switch, Route } from "react-router";
import SupplierList from "./supplier-list"
import CreateAmendAccounts from "./create-and-amend-accounts"
const Routes: React.FC<{ match: any }> = ({ match }) => (
    <>
        <Switch>
            <div className="suppliers">
                <Route exact path={`${match.url}/supplier-list`} component={SupplierList} />
                <Route path={`${match.url}/create-and-amend-accounts`} component={CreateAmendAccounts} />
            </div>
        </Switch>
    </>
);

export default Routes;
