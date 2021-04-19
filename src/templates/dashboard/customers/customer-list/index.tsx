import React from "react";
import PageInternalHeader from "../../../../components/page-internal-header";
import CustomerListTable from "./customer-list-table";
import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#f1f1f1",
    },
    tableWrapper: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(2),
    },
  })
);
const menuItems = [{ name: "Dashboard", link: "/dashboard" }];
const CustomerList: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  return (
    <div className={classes.root}>
      <PageInternalHeader title="Customer List" menuItems={menuItems} />
      <div className={classes.tableWrapper}>
        <CustomerListTable />
      </div>
    </div>
  );
};
export default CustomerList;
