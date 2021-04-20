import React from "react";
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TransactionTable from "./TransactionTable";
import NominalTable from "./NominalTable";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    NEHeader: {
      padding: theme.spacing(2),
      fontWeight: "bold",
    },
    selectTab: {
      border: "0.5px solid grey",
      padding: theme.spacing(0.5),
    },
    inputFieldWrapper: { paddingLeft: theme.spacing(4) },

    label: {
      fontSize: "15px",
      paddingTop: theme.spacing(2),
    },
    tableWrapper: { padding: theme.spacing(2) },
    formControl: {
      minWidth: 300,
    },
    buttonWrapper: {
      margin: theme.spacing(3),
    },
  })
);

export default function StandingOrderAndDebit() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12}>
          <Typography className={classes.NEHeader}>Account Selection</Typography>
          <div className={classes.inputFieldWrapper}>
            <label className={classes.label}>Account :</label>
            <Select id='code-dropdown' className={classes.selectTab}>
              <MenuItem value=''></MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
            </Select>
            <TextField id='code-consolidated' variant='outlined' size='small' />
            <TextField id='code-consolidated' variant='outlined' size='small' />
            <TextField id='code-consolidated' variant='outlined' size='small' />
            <TextField id='code-consolidated' variant='outlined' size='small' />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.NEHeader}>
            Standing Order/Direct Debit Details
          </Typography>
          <div className={classes.tableWrapper}>
            <TransactionTable />
          </div>
        </Grid>
        <Grid item>
          <Typography className={classes.NEHeader}>Payments Details</Typography>
          <Grid item lg={12}>
            <div className={classes.tableWrapper}>
              <NominalTable />
            </div>
          </Grid>
        </Grid>
        <div>
          <Button variant='contained' className={classes.buttonWrapper}>
            Print
          </Button>
          <Button variant='contained' color='primary' className={classes.buttonWrapper}>
            Close
          </Button>
        </div>
      </Grid>
    </div>
  );
}
