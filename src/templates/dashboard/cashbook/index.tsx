import React from "react";
import { Switch, Route } from "react-router";
import SalesPayment from "../customers/enter-transactions/sales-payment";
import NominalNonVatablePayment from "../nominal/enter-transactions/nominal-non-vatable-payment";
import CashbookBankAccountList from "./bank-account-list";
import BankProcessMap from "./bank-process-map";
import InterBankTransfer from "./enter-transactions/inter-bank-transfer";
import NominalVatablePyment from "./enter-transactions/nominal-vatable-payment";
import NominalVatableReceipt from "./enter-transactions/nominal-vatable-receipt";
import PurchasePayment from "./enter-transactions/purchase-payment";
import PurchaseRecept from "./enter-transactions/purchase-receipt";
import SalesRecipt from "./enter-transactions/sales-receipt";

import AccountDetailsReport from "./bank-account-reports/account-details-report";
import AccountNotActive from "./bank-account-reports/account-not-active";
import DirectDebitAndStandingOrder from "./bank-account-reports/direct-debit-and-standing-order";
import DirectDebitAndStandingOrderDue from "./bank-account-reports/direct-debit-and-standing-order-due";
import SageBankFeedFaieldPostingReport from "./bank-account-reports/sage-bank-feed-faield-posting-report";
import SageBankFeedPostingReport from "./bank-account-reports/sage-bank-feed-posting-report";
import TransectionListing from "./bank-account-reports/transection-listing";
import TransectionListingbyPeriod from "./bank-account-reports/transection-listing-by-period";
import UnspreadCheque from "./bank-account-reports/unpresented-cheques-payment";

import CreateBankAcccount from "./create-amend-accounts/create-bank-account";
import AmendBankAccount from "./create-amend-accounts/amend-bank-account-details";
import TransactionEnquiries from "./bank-account-enquiries/transaction-enquiries";
import StandingOrderAndDebit from "./bank-account-enquiries/standing-orders-and-direct-debits-enquiry";
import BankAccountEnquiry from "./bank-account-enquiries/bank-account-enquiry";
import ShortTermCashProjection from "./bank-account-enquiries/short-term-cash-projection";
import BankTransactionEnquiry from "./bank-account-enquiries/bank-txn-enquiry";
import BankStandingOrder from "./bank-account-enquiries/bank-standing-orders-and-direct-debits";
import CashPosition from "./bank-account-enquiries/cash-position";
// route prifix "/dashboard/cashbook"
const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <Route
        exact
        path={`${match.url}/bank-account-list`}
        component={CashbookBankAccountList}
      />
      <Route exact path={`${match.url}/bank-process-map`} component={BankProcessMap} />
      <Route
        exact
        path={`${match.url}/enter-transactions/sales-receipt`}
        component={SalesRecipt}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/grouped-transactions`}
        component={NominalVatableReceipt}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/purchase-payment`}
        component={PurchasePayment}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/sales-payment`}
        component={SalesPayment}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/purchase-receipt`}
        component={PurchaseRecept}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/nominal-vatable-payment`}
        component={NominalVatablePyment}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/nominal-vatable-receipt`}
        component={NominalVatableReceipt}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/nominal-non-vatable-payment`}
        component={NominalNonVatablePayment}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/nominal-non-vatable-receipt`}
        component={NominalNonVatablePayment}
      />
      <Route
        exact
        path={`${match.url}/enter-transactions/inter-bank-transfer`}
        component={InterBankTransfer}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/account-details-report`}
        component={AccountDetailsReport}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/transection-listing`}
        component={TransectionListing}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/transection-listing-by-period`}
        component={TransectionListingbyPeriod}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/unpresented-cheques-recepts`}
        component={UnspreadCheque}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/unpresented-cheques-payment`}
        component={UnspreadCheque}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/unpresented-cheques-both`}
        component={UnspreadCheque}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/direct-debit-and-standing-order`}
        component={DirectDebitAndStandingOrder}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/direct-debit-and-standing-order-due`}
        component={DirectDebitAndStandingOrderDue}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/sage-bank-feed-posting-report`}
        component={SageBankFeedPostingReport}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/sage-bank-feed-faield-posting-report`}
        component={SageBankFeedFaieldPostingReport}
      />
      <Route
        exact
        path={`${match.url}/bank-account-report/account-not-active`}
        component={AccountNotActive}
      />

      <Route
        exact
        path={`${match.url}/create-amend-accounts/create-bank-account`}
        component={CreateBankAcccount}
      />
      <Route
        exact
        path={`${match.url}/create-amend-accounts/amend-bank-account-details`}
        component={AmendBankAccount}
      />
      <Route
        exact
        path={`${match.url}/bank-account-enquiries/bank-account-enquiry`}
        component={BankAccountEnquiry}
      />
      <Route
        exact
        path={`${match.url}/bank-account-enquiries/transaction-enquiries`}
        component={TransactionEnquiries}
      />

      <Route
        exact
        path={`${match.url}/bank-account-enquiries/standing-orders-and-direct-debits-enquiry`}
        component={StandingOrderAndDebit}
      />
      <Route
        exact
        path={`${match.url}/bank-account-enquiries/short-term-cash-projection`}
        component={ShortTermCashProjection}
      />
      <Route
        exact
        path={`${match.url}/bank-account-enquiries/bank-txn-enquiry`}
        component={BankTransactionEnquiry}
      />
      <Route
        path={`${match.url}/bank-account-enquiries/bank-standing-orders-and-direct-debits`}
        component={BankStandingOrder}
      />
      <Route
        path={`${match.url}/bank-account-enquiries/cash-position`}
        component={CashPosition}
      />
    </Switch>
  </>
);

export default Routes;
