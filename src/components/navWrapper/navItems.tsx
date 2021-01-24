import IconDashboard from "@material-ui/icons/Dashboard";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import AssignmentIcon from '@material-ui/icons/Assignment';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
export const navItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    Icon: IconDashboard,
  },
  {
    name: "Summaries",
    Icon: IconBarChart,
    items: [
      {
        name: "Sales Summary",
        link: "/dashboard/summaries/sales",
      },
      {
        name: "Purchases Summary",
        link: "/dashboard/summaries/purchases",
      },
      {
        name: "Financials Summary",
        link: "/dashboard/summaries/financials",
      },
      {
        name: "Sales Orders Summary",
        link: "/dashboard/summaries/sales-orders",
      },
      {
        name: "Purchase Orders Summary",
        link: "/dashboard/summaries/purchase-orders",
      },
      {
        name: "Stock Control Summary",
        link: "/dashboard/summaries/stock-control",
      },
    ],
  },
  {
    name: "Customers",
    Icon: IconPeople,
    items: [
      {
        name: "Customer list",
        link: "/dashboard/customers/customer-list",
      },
      {
        name: "Account Analysis",
        items: [
          {
            name: "Day Book",
            link: "/dashboard/customers/account-analysis/day-book",
          },
          {
            name: "List of Accounts",
            link: "/dashboard/customers/account-analysis/list-of-accounts",
          },
          {
            name: "Account Details",
            link: "/dashboard/customers/account-analysis/account-details",
          },
          {
            name: "Transaction Listing (Current)",
            link: "/dashboard/customers/account-analysis/txn-listing-current",
          },
          {
            name: "Trading Report (Summary)",
            link:
              "/dashboard/customers/account-analysis/trading-report-summary",
          },
          {
            name: "EC Sales List (XML)",
            link: "/dashboard/customers/account-analysis/ec-sales-list",
          },
        ],
      },
      {
        name: "Create & Amend Accounts",
        items: [
          {
            name: "Create Customer",
            link: "/dashboard/customers/create-amend-accounts/create-customer",
          },
          {
            name: "Customer Delivery Addresses",
            link:
              "/dashboard/customers/create-amend-accounts/customer-delivery-addresses",
          },
        ],
      },
      {
        name: "Customer Enquiries",
        items: [
          {
            name: "Customer Transaction Enquiry",
            link: "/dashboard/customers/enquiries/transaction-enquiry",
          },
        ],
      },
      {
        name: "Enter Transactions",
        items: [
          {
            name: "Sales Invoice",
            link: "/dashboard/customers/enter-transactions/sales-invoice",
          },
          {
            name: "Sales Credit Note",
            link: "/dashboard/customers/enter-transactions/sales-credit-note",
          },
          {
            name: "Sales Receipt",
            link: "/dashboard/customers/enter-transactions/sales-receipt",
          },
          {
            name: "Sales Payment",
            link: "/dashboard/customers/enter-transactions/sales-payment",
          },
        ],
      },
      {
        name: "Bank Account Enqueries",
        items: [
          {
            name: "Bank Account Transactions",
            link: "/dashboard/bank-account/transactions",
          },
        ],
      },
    ],
  },
  {
    name: "Cash book",
    Icon: AccountBalanceIcon,
    items: [
      {
        name: "Bank account list",
        link: "/dashboard/cashbook/bank-account-list",
      },
      {
        name: "Bank process map",
        link: "/dashboard/cashbook/bank-process-map",
      },
      {
        name: "Create & Amend Accounts",
        items: [
          {
            name: "Create Bank Account",
            link:
              "/dashboard/cashbook/create-amend-accounts/create-bank-account",
          },
          {
            name: "Amend Bank Account Details",
            link:
              "/dashboard/cashbook/create-amend-accounts/amend-bank-account-details",
          },
        ],
      },
      {
        name: "Enter Transactions",
        items: [
          {
            name: "Sales Receipt",
            link: "/dashboard/cashbook/enter-transactions/sales-receipt",
          },
          {
            name: "Purchase Payment",
            link: "/dashboard/cashbook/enter-transactions/purchase-payment",
          },
          {
            name: "Grouped Transactions",
            link: "/dashboard/cashbook/enter-transactions/grouped-transactions",
          },
          {
            name: "Sales Payment",
            link: "/dashboard/cashbook/enter-transactions/sales-payment",
          },
          {
            name: "Purchase Receipt",
            link: "/dashboard/cashbook/enter-transactions/purchase-receipt",
          },
          {
            name: "Nominal Vatable Payment",
            link:
              "/dashboard/cashbook/enter-transactions/nominal-vatable-payment",
          },
          {
            name: "Nominal Vatable Receipt",
            link:
              "/dashboard/cashbook/enter-transactions/nominal-vatable-receipt",
          },
          {
            name: "Nominal Non Vatable Payment",
            link:
              "/dashboard/cashbook/enter-transactions/nominal-non-vatable-payment",
          },
          {
            name: "Nominal Non Vatable Receipt",
            link:
              "/dashboard/cashbook/enter-transactions/nominal-non-vatable-receipt",
          },
          {
            name: "Inter Bank Transfer",
            link: "/dashboard/cashbook/enter-transactions/inter-bank-transfer",
          },
          {
            name: "Vat Return Payment",
            link: "/dashboard/cashbook/enter-transactions/vat-return-payment",
          },
          {
            name: "Process Standing Orders and Direct Debits",
            link:
              "/dashboard/cashbook/enter-transactions/process-standing-orders-and-direct-debits",
          },
        ],
      },
      {
        name: "Bank Account Enquiries",
        items: [
          {
            name: "Bank Account Transaction Enquiries",
            link:
              "/dashboard/cashbook/bank-account-enquiries/transaction-enquiries",
          },
          {
            name: "Standing Orders And Direct Debits Enquiry",
            link:
              "/dashboard/cashbook/bank-account-enquiries/standing-orders-and-direct-debits-enquiry",
          },
          {
            name: "Short term Cash Projection",
            link:
              "/dashboard/cashbook/bank-account-enquiries/short-term-cash-projection",
          },
          {
            name: "Bank Account Enquiry",
            link:
              "/dashboard/cashbook/bank-account-enquiries/bank-account-enquiry",
          },
          {
            name: "Bank Transaction Enquiry",
            link: "/dashboard/cashbook/bank-account-enquiries/bank-txn-enquiry",
          },
          {
            name: "Bank Standing Orders And Direct Debits",
            link:
              "/dashboard/cashbook/bank-account-enquiries/bank-standing-orders-and-direct-debits",
          },
          {
            name: "Cash Position",
            link: "/dashboard/cashbook/bank-account-enquiries/cash-position",
          },
        ],
      },
    ],
  },
  {
    name: "Invoicing",
    Icon: AssignmentIcon,
    items: [
      {
        name: "Invoicing List",
        link: "/dashboard/invoicing/invoicing-list",
      },
      {
        name: "Invoices",
        items: [
          {
            name: "Enter New Invoice",
            link: "/dashboard/invoicing/invoices/enter-new-invoice",
          },
          {
            name: "Amend Invoice",
            link: "/dashboard/invoicing/invoices/amend-invoice",
          },
          {
            name: "Amend Invoice Status",
            link: "/dashboard/invoicing/invoices/amend-invoice-status",
          },
          {
            name: "Print Invoices",
            link: "/dashboard/invoicing/invoices/print-invoices",
          },
        ],
      },
      {
        name: "Credit Notes",
        items: [
          {
            name: "Enter New Credit Note",
            link: "/dashboard/invoicing/credit-notes/enter-new-credit-note",
          },
          {
            name: "Amend Credit Note",
            link: "/dashboard/invoicing/credit-notes/amend-credit-note",
          },
          {
            name: "Amend Credit Note Status",
            link: "/dashboard/invoicing/credit-notes/amend-credit-note-status",
          },
          {
            name: "Print Credit Notes",
            link: "/dashboard/invoicing/credit-notes/print-credit-notes",
          },
        ],
      },
      {
        name: "Processing",
        items: [
          {
            name: "Enter VAT Only Invoice",
            link: "/dashboard/invoicing/processing/enter-vat-only-invoice",
          },
          {
            name: "Enter VAT Only Credit Note",
            link: "/dashboard/invoicing/processing/enter-vat-only-credit-note",
          },
          {
            name: "Cancel Invoices and Credit Notes",
            link:
              "/dashboard/invoicing/processing/cancel-invoices-and-credit-notes",
          },
          {
            name: "Post Invoices and Credit Notes",
            link:
              "/dashboard/invoicing/processing/post-invoices-and-credit-notes",
          },
          {
            name: "Delete Invoices and Credit Notes",
            link:
              "/dashboard/invoicing/processing/delete-invoices-and-credit-notes",
          },
        ],
      },
      {
        name: "Enquiries",
        items: [
          {
            name: "View Invoice",
            link: "/dashboard/invoicing/enquiries/view-invoice",
          },
          {
            name: "View Credit Note",
            link: "/dashboard/invoicing/enquiries/view-credit-note",
          },
          {
            name: "Customer Price Enquiry",
            link: "/dashboard/invoicing/enquiries/customer-price-enquiry",
          },
          {
            name: "View Payment Totals",
            link: "/dashboard/invoicing/enquiries/view-payment-totals",
          },
        ],
      },
    ],
  },
  {
    name: "Nominal",
    Icon: MenuBookIcon,
    items: [
      {
        name: "Nominal List",
        link: "/dashboard/nominal/nominal-list",
      },
      {
        name: "Nominal Current Transactions",
        link: "/dashboard/nominal/nominal-current-transactions",
      },
      {
        name: "Create & Amend Accounts",
        items: [
          {
            name: "Create New Nominal Account",
            link:
              "/dashboard/nominal/create-and-amend-accounts/create-new-nominal-account",
          },
          {
            name: "Generate New Nominal Account",
            link:
              "/dashboard/nominal/create-and-amend-accounts/genrate-new-nominal-account",
          },
          {
            name: "Amend Nominal Account Details",
            link:
              "/dashboard/nominal/create-and-amend-accounts/amend-nominal-account-details",
          },
          {
            name: "Create Accounts For Cost Center Department",
            link:
              "/dashboard/nominal/create-and-amend-accounts/create-accounts-for-cost-center-department",
          },
        ],
      },
      {
        name: "Nominal Enquiries",
        items: [
          {
            name: "Nominal Enquiry",
            link: "/dashboard/nominal/nominal-enquiries/nominal-enquiry",
          },
          {
            name: "Nominal Transaction Enquiry",
            link:
              "/dashboard/nominal/nominal-enquiries/nominal-transaction-enquiry",
          },
          {
            name: "Nominal Account Enquiry",
            link:
              "/dashboard/nominal/nominal-enquiries/nominal-account-enquiry",
          },
          {
            name: "Nominal Current Transaction Enquiry",
            link:
              "/dashboard/nominal/nominal-enquiries/nominal-current-transaction-enquiry",
          },
          {
            name: "Nominal Deferred Pending Postings",
            link:
              "/dashboard/nominal/nominal-enquiries/nominal-deferred-pending-postings",
          },
          {
            name: "Cash Flow Report",
            link: "/dashboard/nominal/nominal-enquiries/cash-flow-report",
          },
        ],
      },
      {
        name: "Fixed Assets",
        items: [
          {
            name: "Fixed Asset List",
            link: "/dashboard/nominal/fixed-assets/fixed-asset-list",
          },
          {
            name: "Enter New Asset",
            link: "/dashboard/nominal/fixed-assets/enter-new-asset",
          },
          {
            name: "Amend Asset",
            link: "/dashboard/nominal/fixed-assets/amend-asset",
          },
          {
            name: "Depreciate Asset",
            link: "/dashboard/nominal/fixed-assets/depreciate-asset",
          },
          {
            name: "Dispose Asset",
            link: "/dashboard/nominal/fixed-assets/dispose-asset",
          },
          {
            name: "Delete Asset",
            link: "/dashboard/nominal/fixed-assets/delete-asset",
          },
          {
            name: "Asset Enquiry",
            link: "/dashboard/nominal/fixed-assets/asset-enquiry",
          },
        ],
      },
      {
        name: "Enter Transactions",
        items: [
          {
            name: "Nominal Journal Entry",
            link: "/dashboard/nominal/enter-transactions/nominal-journal-entry",
          },
          {
            name: "Currently Held Journals",
            link:
              "/dashboard/nominal/enter-transactions/currently-held-journals",
          },
          {
            name: "Nominal Vatable Receipt",
            link:
              "/dashboard/nominal/enter-transactions/nominal-vatable-receipt",
          },
          {
            name: "Nominal Non-Vatable Receipt",
            link:
              "/dashboard/nominal/enter-transactions/nominal-non-vatable-receipt",
          },
          {
            name: "Nominal Non-Vatable Payment",
            link:
              "/dashboard/nominal/enter-transactions/nominal-non-vatable-payment",
          },
          {
            name: "Prepayment Journal Entry",
            link:
              "/dashboard/nominal/enter-transactions/prepayment-journal-entry",
          },
          {
            name: "Accrual Journal Entry",
            link: "/dashboard/nominal/enter-transactions/accrual-journal-entry",
          },
          {
            name: "Previous Year Journal Entry",
            link:
              "/dashboard/nominal/enter-transactions/previous-year-journal-entry",
          },
          {
            name: "Journal Templates",
            link: "/dashboard/nominal/enter-transactions/journal-templates",
          },
        ],
      },
      {
        name: "Budgets",
        items: [
          {
            name: "Enter New Combined Nominal Budget",
            link:
              "/dashboard/nominal/budgets/enter-new-combined-nominal-budget",
          },
          {
            name: "Amend Combined Nominal Budget",
            link: "/dashboard/nominal/budgets/amend-combined-nominal-budget",
          },
          {
            name: "Combined Nominal Budgets",
            link: "/dashboard/nominal/budgets/combined-nominal-budgets",
          },
          {
            name: "My Budgets Overview",
            link: "/dashboard/nominal/budgets/my-budgets-overview",
          },
        ],
      },
    ],
  },
  {
    name: "Price Book",
    Icon: FileCopyIcon,
    items: [
      {
        name: "Selling Prices",
        items: [
          {
            name: "Prices for Stock Item",
            link: "/dashboard/price-book/selling-prices/prices-for-stock-item",
          },
          {
            name: "Prices for Price Band",
            link: "/dashboard/price-book/selling-prices/prices-for-price-band",
          },
          {
            name: "Markup Prices",
            link: "/dashboard/price-book/selling-prices/markup-prices",
          },
        ],
      },
      {
        name: "Discounts",
        items: [
          {
            name: "Discounts For Product Group",
            link: "/dashboard/price-book/discounts/discounts-for-product-group",
          },
          {
            name: "Discounts For Stock Item",
            link: "/dashboard/price-book/discounts/discounts-for-stock-item",
          },
          {
            name: "Invoice and Order Value Discounts",
            link:
              "/dashboard/price-book/discounts/invoice-and-order-value-discounts",
          },
          {
            name: "Link discounts to a customer",
            link: "/dashboard/price-book/discounts/link-discounts-to-customer",
          },
        ],
      },
      {
        name: "Discount Groups",
        items: [
          {
            name: "Customer Discount Groups",
            link:
              "/dashboard/price-book/discount-groups/customer-discount-groups",
          },
          {
            name: "Link Customers to Group",
            link:
              "/dashboard/price-book/discount-groups/link-customers-to-group",
          },
          {
            name: "Link Discounts to Group",
            link:
              "/dashboard/price-book/discount-groups/link-discounts-to-group",
          },
          {
            name: "Link Customers to Invoice and Order Value Discount Band",
            link:
              "/dashboard/price-book/discount-groups/link-customers-to-invoice-and-order-value-discount-band",
          },
        ],
      },
      {
        name: "Enquiries",
        items: [
          {
            name: "Customer Prices",
            link: "/dashboard/price-book/enquiries/customer-prices",
          },
          {
            name: "Customer Discounts",
            link: "/dashboard/price-book/enquiries/customer-discounts",
          },
          {
            name: "Stock Item Prices",
            link: "/dashboard/price-book/enquiries/stock-item-prices",
          },
          {
            name: "Stock Item Discounts",
            link: "/dashboard/price-book/enquiries/stock-item-discounts",
          },
        ],
      },
    ],
  },
  {
    name: "Purchase Orders",
    Icon: FormatIndentIncreaseIcon,
    items: [
      {
        name: "Purchase Order List",
        link: "/dashboard/purchase-orders/purchase-order-list",
      },
      {
        name: "Purchase Order Process Map",
        link: "/dashboard/purchase-orders/purchase-order-process-map",
      },
      {
        name: "Enquiries",
        items: [
          {
            name: "View Purchase Order",
            link: "/dashboard/purchase-orders/enquiries/view-purchase-order",
          },
          {
            name: "View Purchase Order for Stock Item",
            link:
              "/dashboard/purchase-orders/enquiries/view-purchase-order-for-stock-item",
          },
          {
            name: "View Purchase Return",
            link: "/dashboard/purchase-orders/enquiries/view-purchase-return",
          },
          {
            name: "Purchase Documents",
            link: "/dashboard/purchase-orders/enquiries/purchase-documents",
          },
          {
            name: "Purchase Document Lines",
            link:
              "/dashboard/purchase-orders/enquiries/purchase-document-lines",
          },
          {
            name: "Purchase Invoices and Credits",
            link:
              "/dashboard/purchase-orders/enquiries/purchase-invoices-and-credits",
          },
        ],
      },
      {
        name: "Purchase Requisitions",
        items: [
          {
            name: "Enter Purchase Requisition",
            link:
              "/dashboard/purchase-orders/purchase-requisitions/enter-purchase-requisition",
          },
          {
            name: "Purchase Requisition Autorisation",
            link:
              "/dashboard/purchase-orders/purchase-requisitions/purchase-requisition-autorisation",
          },
          {
            name: "My Purchase Requisition",
            link:
              "/dashboard/purchase-orders/purchase-requisitions/my-purchase-requisition",
          },
          {
            name: "My Purchase Requisitions",
            link:
              "/dashboard/purchase-orders/purchase-requisitions/my-purchase-requisitions",
          },
          {
            name: "Generate Purchase Orders from Requisition Lines",
            link:
              "/dashboard/purchase-orders/purchase-requisitions/generate-purchase-orders-from-requisition-lines",
          },
          {
            name: "My Authorised Purchase Requisitions",
            link:
              "/dashboard/purchase-orders/purchase-requisitions/my-authorised-purchase-requisitions",
          },
        ],
      },
      {
        name: "Purchase Orders",
        items: [
          {
            name: "Enter New Purchase Order",
            link:
              "/dashboard/purchase-orders/purchase-orders/enter-new-purchase-order",
          },
          {
            name: "Amend Order",
            link: "/dashboard/purchase-orders/purchase-orders/amend-order",
          },
          {
            name: "Amend Order Status",
            link:
              "/dashboard/purchase-orders/purchase-orders/amend-order-status",
          },
          {
            name: "Generate Orders",
            link: "/dashboard/purchase-orders/purchase-orders/generate-orders",
          },
          {
            name: "Supplier Stock Items",
            link:
              "/dashboard/purchase-orders/purchase-orders/supplier-stock-items",
          },
        ],
      },
      {
        name: "Purchase Returns",
        items: [
          {
            name: "Enter New Purchase Return",
            link:
              "/dashboard/purchase-orders/purchase-returns/enter-new-purchase-return",
          },
          {
            name: "Amend Return",
            link: "/dashboard/purchase-orders/purchase-returns/amend-return",
          },
          {
            name: "Amend Return Status",
            link:
              "/dashboard/purchase-orders/purchase-returns/amend-return-status",
          },
        ],
      },
      {
        name: "Processing",
        items: [
          {
            name: "Authorise Orders",
            link: "/dashboard/purchase-orders/processing/authorise-orders",
          },
          {
            name: "Amend Purchase Order Notifications",
            link:
              "/dashboard/purchase-orders/processing/amend-purchase-order-notifications",
          },
          {
            name: "Purchase Order Authorisation",
            link:
              "/dashboard/purchase-orders/processing/purchase-order-authorisation",
          },
          {
            name: "Purchase Order Notifications",
            link:
              "/dashboard/purchase-orders/processing/purchase-order-notifications",
          },
          {
            name: "My Unauthorised Purchase Orders",
            link:
              "/dashboard/purchase-orders/processing/my-unauthorised-purchase-orders",
          },
          {
            name: "Print Orders",
            link: "/dashboard/purchase-orders/processing/print-orders",
          },
          {
            name: "Print Returns",
            link: "/dashboard/purchase-orders/processing/print-returns",
          },
          {
            name: "Confirm Receipt",
            link: "/dashboard/purchase-orders/processing/confirm-receipt",
          },
          {
            name: "Amend Receipt",
            link: "/dashboard/purchase-orders/processing/amend-receipt",
          },
          {
            name: "Confirm Despatch",
            link: "/dashboard/purchase-orders/processing/confirm-despatch",
          },
          {
            name: "Amend Despatch",
            link: "/dashboard/purchase-orders/processing/amend-despatch",
          },
          {
            name: "Record Purchase Invoice",
            link:
              "/dashboard/purchase-orders/processing/record-purchase-invoice",
          },
          {
            name: "Record Purchase Credit Note",
            link:
              "/dashboard/purchase-orders/processing/record-purchase-credit-note",
          },
        ],
      },
    ],
  },
  {
    name: "Sales Orders",
    Icon: FormatIndentDecreaseIcon,
    items: [
      {
        name: "Enter New Order - Rapid",
        link: "/dashboard/sales-orders/enter-new-order-rapid",
      },
      {
        name: "Enter New Order",
        link: "/dashboard/sales-orders/enter-new-order",
      },
      {
        name: "Amend Order",
        link: "/dashboard/sales-orders/amend-order",
      },
      {
        name: "Amend Order Status",
        link: "/dashboard/sales-orders/amend-order-status",
      },
      {
        name: "Repeat Order Templates",
        link: "/dashboard/sales-orders/repeat-order-templates",
      },
      {
        name: "Enquiries",
        items: [
          {
            name: "View Sales Orders",
            link: "/dashboard/sales-orders/enquiries/view-sales-orders",
          },
          {
            name: "View Sales Orders for Stock Item",
            link:
              "/dashboard/sales-orders/enquiries/view-sales-orders-for-stock-item",
          },
          {
            name: "View Sales Return",
            link: "/dashboard/sales-orders/enquiries/view-sales-return",
          },
          {
            name: "View Quotation",
            link: "/dashboard/sales-orders/enquiries/view-quotation",
          },
          {
            name: "View Proforma",
            link: "/dashboard/sales-orders/enquiries/view-proforma",
          },
          {
            name: "View Payment Totals",
            link: "/dashboard/sales-orders/enquiries/view-payment-totals",
          },
          {
            name: "Customer Price Enquiry",
            link: "/dashboard/sales-orders/enquiries/customer-price-enquiry",
          },
          {
            name: "Sales Documents",
            link: "/dashboard/sales-orders/enquiries/sales-documents",
          },
          {
            name: "Sales Document Lines",
            link: "/dashboard/sales-orders/enquiries/sales-document-lines",
          },
          {
            name: "Sales Document Status",
            link: "/dashboard/sales-orders/enquiries/sales-document-status",
          },
          {
            name: "Sales Invoice Credit Lines",
            link:
              "/dashboard/sales-orders/enquiries/sales-invoice-credit-lines",
          },
          {
            name: "SOP Payment Totals",
            link: "/dashboard/sales-orders/enquiries/sop-payment-totals",
          },
        ],
      },
      {
        name: "Returns",
        items: [
          {
            name: "Enter New Sales Return",
            link: "/dashboard/sales-orders/returns/enter-new-sales-return",
          },
          {
            name: "Amend Sales Return",
            link: "/dashboard/sales-orders/returns/amend-sales-return",
          },
          {
            name: "Amend Sales Return Status",
            link: "/dashboard/sales-orders/returns/amend-sales-return-status",
          },
        ],
      },
      {
        name: "Quotations",
        items: [
          {
            name: "New Quote",
            link: "/dashboard/sales-orders/quotations/new-quote",
          },
          {
            name: "New Quote for Prospect",
            link: "/dashboard/sales-orders/quotations/new-quote-for-prospect",
          },
          {
            name: "Amend Quote",
            link: "/dashboard/sales-orders/quotations/amend-quote",
          },
          {
            name: "Delete Quote",
            link: "/dashboard/sales-orders/quotations/delete-quote",
          },
          {
            name: "Print Quote",
            link: "/dashboard/sales-orders/quotations/print-quote",
          },
          {
            name: "Convert Quotation to Pro Forma",
            link:
              "/dashboard/sales-orders/quotations/convert-quotation-to-pro-forma",
          },
          {
            name: "Convert Quote to Sales Order",
            link:
              "/dashboard/sales-orders/quotations/convert-quote-to-sales-order",
          },
        ],
      },
      {
        name: "Proformas",
        items: [
          {
            name: "New Proforma",
            link: "/dashboard/sales-orders/proformas/new-proforma",
          },
          {
            name: "Enter New Pro Forma for Prospect",
            link:
              "/dashboard/sales-orders/proformas/enter-new-pro-forma-for-prospect",
          },
          {
            name: "Amend Proforma",
            link: "/dashboard/sales-orders/proformas/amend-proforma",
          },
          {
            name: "Delete Proforma",
            link: "/dashboard/sales-orders/proformas/delete-proforma",
          },
          {
            name: "Print Proforma",
            link: "/dashboard/sales-orders/proformas/print-proforma",
          },
          {
            name: "Convert Proforma to Order",
            link: "/dashboard/sales-orders/proformas/convert-proforma-to-order",
          },
        ],
      },
      {
        name: "Processing",
        items: [
          {
            name: "Allocate Stock",
            link: "/dashboard/sales-orders/processing/allocate-stock",
          },
          {
            name: "Amend Allocations",
            link: "/dashboard/sales-orders/processing/amend-allocations",
          },
          {
            name: "Amend Picking List",
            link: "/dashboard/sales-orders/processing/amend-picking-list",
          },
          {
            name: "Goods Despatched & Received",
            items: [
              {
                name: "Despatch",
                link:
                  "/dashboard/sales-orders/processing/goods-despatch-and-received/despatch",
              },
              {
                name: "Amend Despatch",
                link:
                  "/dashboard/sales-orders/processing/goods-despatch-and-received/amend-despatch",
              },
              {
                name: "Receipt",
                link:
                  "/dashboard/sales-orders/processing/goods-despatch-and-received/receipt",
              },
              {
                name: "Amend Receipt",
                link:
                  "/dashboard/sales-orders/processing/goods-despatch-and-received/amend-receipt",
              },
            ],
          },
          {
            name: "VAT Only Invoice",
            link: "/dashboard/sales-orders/processing/vat-only-invoice",
          },
          {
            name: "VAT Only Credit Note",
            link: "/dashboard/sales-orders/processing/vat-only-credit-note",
          },
          {
            name: "Cancel Invoice",
            link: "/dashboard/sales-orders/processing/cancel-invoice",
          },
          {
            name: "Post Invoices and Credits",
            link:
              "/dashboard/sales-orders/processing/post-invoices-and-credits",
          },
        ],
      },
      {
        name: "Document Printing",
        items: [
          {
            name: "Picking-lists",
            link: "/dashboard/sales-orders/document-printing/picking-lists",
          },
          {
            name: "Orders",
            link: "/dashboard/sales-orders/document-printing/orders",
          },
          {
            name: "Invoices",
            link: "/dashboard/sales-orders/document-printing/invoices",
          },
          {
            name: "Credit Notes",
            link: "/dashboard/sales-orders/document-printing/credit-notes",
          },
        ],
      },
    ],
  },
];
