import React from "react";
import CustomerListTable from "./CustomerListTable";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
const Memos: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Memos</Typography>
      <div className={classes.tableWrapper}>
        <CustomerListTable />
      </div>
    </div>
  );
};
export default Memos;
