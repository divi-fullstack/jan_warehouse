import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import BankListTable from "./bank-link-table";
import BankListOption from "./bank-list-option";
import TransactionOption from "./who-owes-us-most-money-option";
import TransactionTable from "./who-owes-us-most-money-table";
import DoWeOweMostOption from "./why-do-we-owe-most-option";
import DoWeOweMostTable from "./why-do-we-owe-most-tabe";
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
const CashPosition: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nominalHeader}>
        <Typography className={classes.BankHeaderTypo}>Cash Position</Typography>
      </div>
      <div className={classes.nominalOption}>
        <BankListOption />
      </div>
      <div className={classes.tableWrapper}>
        <BankListTable />
      </div>

      <div className={classes.nominalOption}>
        <TransactionOption />
      </div>
      <div className={classes.tableWrapper}>
        <TransactionTable />
      </div>
      <div className={classes.nominalOption}>
        <DoWeOweMostOption />
      </div>
      <div className={classes.tableWrapper}>
        <DoWeOweMostTable />
      </div>
    </div>
  );
};

export default CashPosition;
