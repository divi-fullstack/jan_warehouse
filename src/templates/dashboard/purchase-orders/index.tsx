import React from 'react'
import { Switch, Route } from "react-router";
import PuchseOrderList from './PurchaseOrderList'
import EnterPurchaseRequision from './purchase-requisition/EnterPurchaseRequisition'
import Purchase_Requisition_Authorization from './purchase-requisition/Purchase_Requisition_Authorization'
import Generate_POFR from './purchase-requisition/Generate_POFR'
import MAP_Requisition from './purchase-requisition/MAP_Requisition'
import MP_Requisition from './purchase-requisition/MP_Requisition'
import EnterNewPurchaseOrder from './purchase-order-tab/EnterNewPurchaseOrder';
import AmmendOrder from './purchase-order-tab/AmmendOrder';
import AmmendOrderStatus from './purchase-order-tab/AmendOrderStatus';
import GenerateOrders from './purchase-order-tab/GenerateOrders';
import SupplierStockItems from './purchase-order-tab/SupplierStockItems';
import EnterNewPurchaseReturn from './Purchase-Return/EnterNewPurchaseReturn';
import AmmendReturn from './Purchase-Return/AmendReurn';
import AmmendReturnStatus from './Purchase-Return/AmendReturnStatus';
import AuthoriseOrders from './Processing/AuthoriseOrders';
import AmendPurchaseOrderNotification from './Processing/AmendPurchaseOrderNotification';
import POA from './Processing/POA'
import PurchaseOrderNotification from './Processing/PurchaseOrderNotification';
import MyUnauthorisedPurchaseOrder from './Processing/MyUnauthorisedPurchaseOrder';
import Print_Orders from './Processing/Print_Orders';
import PrintReturns from './Processing/PrintReturns';
import ConfirmReceipt from './Processing/ConfirmReceipt';
import AmendReceipt from './Processing/AmendReceipt';
import ConfirmDispatch from './Processing/ConfiemDispatch';
import AmendDespatch from './Processing/AmendDespatch';
import RecordPurchaseInvoice from './Processing/RecordPurchaseInvoice';
import RecordPurchaseCreditNote from './Processing/RecordPurchaseCreditNote'
import ViewPurchaseOrder from './Enquiry/ViewPurchaseOrder';
import ViewPurchaseOrderForStockItem from './Enquiry/ViewPurchaseOrderForStockItem';
import PurchaseDocuments from './Enquiry/PurchaseDocuments';
import PurchaseDocumentLineEnquiry from './Enquiry/PurchaseDocumentLineEnquiry';
import { PurchaseInvoiceAndCredit } from './Enquiry/PurchaseInvoiceAndCredit';
import ViewPurchaseReturn from './Enquiry/ViewPurchaseReturn';

const Routes: React.FC<{ match: any }> = ({ match }) => (
  <>
    <Switch>
      <div className='Purchase Orders'>
        <Route exact path={`${match.url}/purchase-order-list`} component={PuchseOrderList} />
        <Route exact path={`${match.url}/purchase-requisitions/enter-purchase-requisition`} component={EnterPurchaseRequision} />
        <Route exact path={`${match.url}/purchase-requisitions/purchase-requisition-autorisation`} component ={Purchase_Requisition_Authorization}/>
        <Route exact path={`${match.url}/purchase-requisitions/generate-purchase-orders-from-requisition-lines`} component ={Generate_POFR}/>
        <Route exact path={`${match.url}/purchase-requisitions/my-authorised-purchase-requisitions`} component ={MAP_Requisition}/>
        <Route exact path={`${match.url}/purchase-requisitions/my-purchase-requisition`} component ={MP_Requisition}/>
        <Route exact path={`${match.url}/purchase-orders/enter-new-purchase-order`} component ={EnterNewPurchaseOrder}/>
        <Route exact path={`${match.url}/purchase-orders/amend-order`} component ={AmmendOrder}/>
        <Route exact path={`${match.url}/purchase-orders/amend-order-status`} component ={AmmendOrderStatus}/>
        <Route exact path={`${match.url}/purchase-orders/generate-orders`} component ={GenerateOrders}/>
        <Route exact path={`${match.url}/purchase-orders/supplier-stock-items`} component ={SupplierStockItems}/>
        <Route exact path={`${match.url}/purchase-returns/enter-new-purchase-return`} component ={EnterNewPurchaseReturn}/>
        <Route exact path={`${match.url}/purchase-returns/amend-return`} component ={AmmendReturn}/>
        <Route exact path={`${match.url}/purchase-returns/amend-return-status`} component ={AmmendReturnStatus}/>
        <Route exact path={`${match.url}/processing/authorise-orders`} component ={AuthoriseOrders}/>
        <Route exact path={`${match.url}/processing/amend-purchase-order-notifications`} component ={AmendPurchaseOrderNotification}/>
        <Route exact path={`${match.url}/processing/purchase-order-authorisation`} component ={POA}/>
        <Route exact path={`${match.url}/processing/purchase-order-notifications`} component ={PurchaseOrderNotification}/>
        <Route exact path={`${match.url}/processing/my-unauthorised-purchase-orders`} component ={MyUnauthorisedPurchaseOrder}/>
        <Route exact path={`${match.url}/processing/print-orders`} component ={Print_Orders}/>
        <Route exact path={`${match.url}/processing/print-returns`} component ={PrintReturns}/>
        <Route exact path={`${match.url}/processing/confirm-receipt`} component ={ConfirmReceipt}/>
        <Route exact path={`${match.url}/processing/amend-receipt`} component ={AmendReceipt}/>
        <Route exact path={`${match.url}/processing/confirm-despatch`} component ={ConfirmDispatch}/>
        <Route exact path={`${match.url}/processing/amend-despatch`} component ={AmendDespatch}/>
        <Route exact path={`${match.url}/processing/record-purchase-invoice`} component ={RecordPurchaseInvoice}/>
        <Route exact path={`${match.url}/processing/record-purchase-credit-note`} component ={RecordPurchaseCreditNote}/>
        <Route exact path={`${match.url}/enquiries/view-purchase-order`} component ={ViewPurchaseOrder}/>
        <Route exact path={`${match.url}/enquiries/view-purchase-order-for-stock-item`} component ={ViewPurchaseOrderForStockItem}/>
        <Route exact path={`${match.url}/enquiries/view-purchase-return`} component ={ViewPurchaseReturn}/>
        <Route exact path={`${match.url}/enquiries/purchase-documents`} component ={PurchaseDocuments}/>
        <Route exact path={`${match.url}/enquiries/purchase-document-lines`} component ={PurchaseDocumentLineEnquiry}/>
        <Route exact path={`${match.url}/enquiries/purchase-invoices-and-credits`} component ={PurchaseInvoiceAndCredit}/> 
      </div>
    </Switch>
  </>
);

export default Routes;
