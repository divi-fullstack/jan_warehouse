import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AttachmentBalanceTable from "./AttachmentBalanceTable";
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    tableWrapper: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    title: {
      textAlign: "left",
      fontSize: "20px",
      fontWeight: "bold",
    },
  })
);
const AttachmentBalance: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Reconciled Statement Details</Typography>
      <div className={classes.tableWrapper}>
        <AttachmentBalanceTable />
      </div>
    </div>
  );
};
export default AttachmentBalance;
