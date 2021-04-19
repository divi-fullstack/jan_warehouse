import React from "react";
import { Switch, Route } from "react-router";
import NominalList from "./nominal-list";
import NominalCurrentTransaction from "./nominal-current-transaction";
import GenrateNewNominal from "./create-and-amend-accounts/genrate-new-nominal-account";
import CreateAccountDepartment from "./create-and-amend-accounts/create-accounts-for-cost-center-department";
import AmendNominalAccount from "./create-and-amend-accounts/amend-nominal-account-details";
import CreateNewNominalAccount from "./create-and-amend-accounts/create-new-nominal-account";

import NominalEnquiry from "./nominal-enquiries/nominal-enquiry";
import CashFlow from './nominal-enquiries/cash-flow-report'
import NominalDeferred from './nominal-enquiries/nominal-deferred-pending-postings'
import NominalAccountEnquiry from './nominal-enquiries/nominal-account-enquiry'
import NominalTransactionEnquiry from './nominal-enquiries/nominal-transaction-enquiry'
import NominalCurrentTransactionEnquiry from './nominal-enquiries/nominal-current-transaction-enquiry'
import Nominaljournal from "./enter-transactions/nominal-journal-entry";
import CurrentHeldJournals from "./enter-transactions/currently-held-journals";
import NominalVatableReceipt from "./enter-transactions/nominal-vatable-receipt";
import Nominal_non_vatable_receipt from "./enter-transactions/nominal-non-vatable-receipt";
import NominalNonVatablePayment from "./enter-transactions/nominal-non-vatable-payment";
import PrepaymentJournalEntry from "./enter-transactions/prepayment-journal-entry";
import AccrualJournalEntry from "./enter-transactions/accrual-journal-entry";
import PreviousYearJournalEntry from "./enter-transactions/previous-year-journal-entry";
import JournalTemplates from "./enter-transactions/journal-templates";

import CombinedNominalBudgets from "./Budgets/combined-nominal-budgets";
import AmendCombinedNominalBudget from "./Budgets/amend-combined-nominal-budget";

import FixedAssetList from "./FixedAssets/fixed-asset-list";
import EnterNewAsset from "./FixedAssets/enter-new-asset";
import AmendAsset from "./FixedAssets/amend-asset";
import DepreciateAsset from "./FixedAssets/depreciate-asset";
import DeleteAsset from "./FixedAssets/delete-asset";
import DisposeAsset from "./FixedAssets/dispose-asset";

const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <div className='nominals'>
        <Route exact path={`${match.url}/nominal-list`} component={NominalList} />
        <Route
          exact
          path={`${match.url}/nominal-current-transactions`}
          component={NominalCurrentTransaction}
        />
        <Route
          exact
          path={`${match.url}/create-and-amend-accounts/create-new-nominal-account`}
          component={CreateNewNominalAccount}
        />
        <Route
          exact
          path={`${match.url}/create-and-amend-accounts/genrate-new-nominal-account`}
          component={GenrateNewNominal}
        />
        <Route
          exact
          path={`${match.url}/create-and-amend-accounts/create-accounts-for-cost-center-department`}
          component={CreateAccountDepartment}
        />
        <Route
          exact
          path={`${match.url}/create-and-amend-accounts/amend-nominal-account-details`}
          component={AmendNominalAccount}
        />

        <Route
          exact
          path={`${match.url}/nominal-enquiries/nominal-enquiry`}
          component={NominalEnquiry}
        />
        <Route exact path={`${match.url}/nominal-enquiries/cash-flow-report`} component={CashFlow}/>
        <Route exact path={`${match.url}/nominal-enquiries/nominal-deferred-pending-postings`} component={NominalDeferred}/>
        <Route exact path={`${match.url}/nominal-enquiries/nominal-account-enquiry`} component={NominalAccountEnquiry}/>
        <Route exact path={`${match.url}/nominal-enquiries/nominal-transaction-enquiry`} component={NominalTransactionEnquiry}/>
        <Route exact path={`${match.url}/nominal-enquiries/nominal-current-transaction-enquiry`} component={NominalCurrentTransactionEnquiry}/>
        
        
        <Route
          exact
          path={`${match.url}/enter-transactions/nominal-journal-entry`}
          component={Nominaljournal}
        />
        <Route
          exact
          path={`${match.url}/enter-transactions/currently-held-journals`}
          component={CurrentHeldJournals}
        />
        <Route
          exact
          path={`${match.url}/enter-transactions/nominal-vatable-receipt`}
          component={NominalVatableReceipt}
        />
        <Route
          exact
          path={`${match.url}/enter-transactions/nominal-non-vatable-receipt`}
          component={Nominal_non_vatable_receipt}
        />
        <Route
          exact
          path={`${match.url}/enter-transactions/nominal-non-vatable-payment`}
          component={NominalNonVatablePayment}
        />
        <Route
          exact
          path={`${match.url}/enter-transactions/prepayment-journal-entry`}
          component={PrepaymentJournalEntry}
        />
        <Route
          exact
          path={`${match.url}/enter-transactions/accrual-journal-entry`}
          component={AccrualJournalEntry}
        />
        <Route
          exact
          path={`${match.url}/enter-transactions/previous-year-journal-entry`}
          component={PreviousYearJournalEntry}
        />
        <Route
          exact
          path={`${match.url}/enter-transactions/journal-templates`}
          component={JournalTemplates}
        />
        <Route
          exact
          path={`${match.url}/budgets/enter-new-combined-nominal-budget`}
          component={CombinedNominalBudgets}
        />
        <Route
          exact
          path={`${match.url}/budgets/amend-combined-nominal-budget`}
          component={AmendCombinedNominalBudget}
        />

        <Route
          exact
          path={`${match.url}/fixed-assets/fixed-asset-list`}
          component={FixedAssetList}
        />
        <Route
          exact
          path={`${match.url}/fixed-assets/enter-new-asset`}
          component={EnterNewAsset}
        />
        <Route
          exact
          path={`${match.url}/fixed-assets/amend-asset`}
          component={AmendAsset}
        />
        <Route
          exact
          path={`${match.url}/fixed-assets/depreciate-asset`}
          component={DepreciateAsset}
        />
        <Route
          exact
          path={`${match.url}/fixed-assets/delete-asset`}
          component={DeleteAsset}
        />
        <Route
          exact
          path={`${match.url}/fixed-assets/dispose-asset`}
          component={DisposeAsset}
        />
      </div>
    </Switch>
  </>
);

export default Routes;
