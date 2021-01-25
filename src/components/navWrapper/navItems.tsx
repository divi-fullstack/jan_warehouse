import IconDashboard from "@material-ui/icons/Dashboard";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@material-ui/icons/FormatIndentIncrease";
import StorageIcon from "@material-ui/icons/Storage";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import summariesItemsJson from "../../textJsonData/sideNavJson/summariesItems.json";
import customersItemsJson from "../../textJsonData/sideNavJson/customersItems.json";
import cashBookItemsJson from "../../textJsonData/sideNavJson/cashBookItems.json";
import invoicingItemsJson from "../../textJsonData/sideNavJson/invoicingItems.json";
import nominalItemsJson from "../../textJsonData/sideNavJson/nominalItems.json";
import priceBookItemsJson from "../../textJsonData/sideNavJson/priceBookItems.json";
import purchaseOrdersItemsJson from "../../textJsonData/sideNavJson/purchaseOrdersItems.json";
import salesOrdersItemsJson from "../../textJsonData/sideNavJson/salesOrdersItems.json";
import stockControlItemsJson from "../../textJsonData/sideNavJson/stockControlItems.json";
import suppliersItemsJson from "../../textJsonData/sideNavJson/suppliersItems.json";
import settingsItemsJson from "../../textJsonData/sideNavJson/settingsItems.json";
export const navItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    Icon: IconDashboard,
  },
  {
    name: "Summaries",
    Icon: IconBarChart,
    items: summariesItemsJson,
  },
  {
    name: "Customers",
    Icon: IconPeople,
    items: customersItemsJson,
  },
  {
    name: "Cash book",
    Icon: AccountBalanceIcon,
    items: cashBookItemsJson,
  },
  {
    name: "Invoicing",
    Icon: AssignmentIcon,
    items: invoicingItemsJson,
  },
  {
    name: "Nominal",
    Icon: MenuBookIcon,
    items: nominalItemsJson,
  },
  {
    name: "Price Book",
    Icon: FileCopyIcon,
    items: priceBookItemsJson,
  },
  {
    name: "Purchase Orders",
    Icon: FormatIndentIncreaseIcon,
    items: purchaseOrdersItemsJson,
  },
  {
    name: "Sales Orders",
    Icon: FormatIndentDecreaseIcon,
    items: salesOrdersItemsJson,
  },
  {
    name: "Stock Control",
    Icon: StorageIcon,
    items: stockControlItemsJson,
  },
  {
    name: "Suppliers",
    Icon: PeopleAltIcon,
    items: suppliersItemsJson,
  },
  {
    name: "Settings",
    Icon: SettingsIcon,
    items: settingsItemsJson,
  },
];
