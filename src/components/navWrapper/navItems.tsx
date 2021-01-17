import IconDashboard from '@material-ui/icons/Dashboard'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'

export const navItems = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    Icon: IconDashboard,
  },
  {
    name: 'Summaries',
    Icon: IconBarChart,
    items: [
      {
        name: "Sales Summary",
        link: "/dashboard/summaries/sales"
      },
      {
        name: "Purchases Summary",
        link: "/dashboard/summaries/purchases"
      },
      {
        name: "Financials Summary",
        link: "/dashboard/summaries/financials"
      },
      {
        name: "Sales Orders Summary",
        link: "/dashboard/summaries/sales-orders"
      },
      {
        name: "Purchase Orders Summary",
        link: "/dashboard/summaries/purchase-orders"
      },
      {
        name: "Stock Control Summary",
        link: "/dashboard/summaries/stock-control"
      }
    ],
  },
  {
    name: 'Customers',
    Icon: IconPeople,
    items: [
      {
        name: "Account Analysis",
        items: [
          {
            name: "Day Book",
            link: "/dashboard/customers/account-analysis/day-book"
          },
          {
            name: "List of Accounts",
            link: "/dashboard/customers/account-analysis/list-of-accounts"
          },
          {
            name: "Account Details",
            link: "/dashboard/customers/account-analysis/account-details"
          },
          {
            name: "Transaction Listing (Current)",
            link: "/dashboard/customers/account-analysis/txn-listing-current"
          },
          {
            name: "Trading Report (Summary)",
            link: "/dashboard/customers/account-analysis/trading-report-summary"
          },
          {
            name: "EC Sales List (XML)",
            link: "/dashboard/customers/account-analysis/ec-sales-list"
          }
        ]
      },
      {
        name: "Create & Amend Accounts",
        items: [
          {
            name: "Create Customer",
            link: "/dashboard/customers/create-amend-accounts/create-customer"
          },
          {
            name: "Customer Delivery Addresses",
            link: "/dashboard/customers/create-amend-accounts/customer-delivery-addresses"
          }
        ]
      },
      {
        name: "Customer Enquiries",
        items: [
          {
            name: "Customer Transaction Enquiry",
            link: "/dashboard/customers/enquiries/transaction-enquiry"
          }
        ]
      },
      {
        name: "Enter Transactions",
        items: [
          {
            name: "Sales Invoice",
            link: "/dashboard/customers/enter-transactions/sales-invoice"
          },
          {
            name: "Sales Credit Note",
            link: "/dashboard/customers/enter-transactions/sales-credit-note"
          },
          {
            name: "Sales Receipt",
            link: "/dashboard/customers/enter-transactions/sales-receipt"
          },
          {
            name: "Sales Payment",
            link: "/dashboard/customers/enter-transactions/sales-payment"
          }
        ]
      },
      {
        name: "Bank Account Enqueries",
        items: [
          {
            name: "Bank Account Transactions",
            link: "/dashboard/bank-account/transactions"
          }
        ]
      }
    ],
  },
]
