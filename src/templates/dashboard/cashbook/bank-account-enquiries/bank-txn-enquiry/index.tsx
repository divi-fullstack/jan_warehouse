import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import NominalListTable from "./bank-account-table";
import NominalOption from "./bank-account-option";
import TransactionOption from "./transaction-option";
import TransactionTable from "./transaction-table";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#f5f5f5",
    },
    tableWrapper: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    nominalHeader: {
      backgroundColor: "#000",
    },
    BankHeaderTypo: {
      color: "#ffff",
      padding: theme.spacing(1),
      textAlign: "left",
      fontSize: "13px",
    },
    nominalOption: {},
  })
);
const BankTransactionEnquiry: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nominalHeader}>
        <Typography className={classes.BankHeaderTypo}>Bank Account Enquiry</Typography>
      </div>
      <div className={classes.nominalOption}>
        <NominalOption />
      </div>
      <div className={classes.tableWrapper}>
        <NominalListTable />
      </div>

      <div className={classes.nominalOption}>
        <TransactionOption />
      </div>
      <div className={classes.tableWrapper}>
        <TransactionTable />
      </div>
    </div>
  );
};

export default BankTransactionEnquiry;
