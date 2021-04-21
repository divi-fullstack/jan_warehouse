import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

import SummaryTable from "./SummaryTable";
import AccountsTable from "./AccountsTable";
import TransactionTable from "./Transactiontable";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        display: "flex",
        flexDirection: "row",
        margin: theme.spacing(1),
        width: "90%",
      },
    },
    accountsWrapper: {},
    title: {
      textAlign: "left",
      fontSize: "17px",
      fontWeight: "bold",
    },
    label: {
      width: "10%",
      fontSize: "15px",
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(1),
    },
    inputFieldWrapper: { marginBottom: theme.spacing(2), display: "flex" },

    buttonWrapper: {
      margin: theme.spacing(3),
    },
    formControl: {
      minWidth: 120,
    },
    tableWrapper: {
      padding: theme.spacing(1),
    },
  })
);

const ShortTermCashProjection: React.FC<{}> = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <>
      <div className={classes.accountsWrapper}>
        <form className={classes.root} noValidate autoComplete='off'>
          <Typography className={classes.title}>Date Range</Typography>
          <Grid item>
            <Grid item lg={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={classes.inputFieldWrapper}>
                  <label className={classes.label}>Date Range :</label>
                  <FormControl className={classes.formControl}>
                    <InputLabel id='demo-simple-select-label'>Date Range</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={value}
                      onChange={handleChange}>
                      <MenuItem value={"Next 7 Days"}>Next 7 Days</MenuItem>
                      <MenuItem value={"Next 8 Days"}>Next 8 Days</MenuItem>
                      <MenuItem value={"Next 9 Days"}>Next 9 Days</MenuItem>
                    </Select>
                  </FormControl>
                  <label className={classes.label}>From :</label>
                  <KeyboardDatePicker
                    margin='normal'
                    id='date-picker-dialog'
                    format='MM/dd/yyyy'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <label className={classes.label}>To :</label>
                  <KeyboardDatePicker
                    margin='normal'
                    id='date-picker-dialog'
                    format='MM/dd/yyyy'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </div>
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </form>
        <div>
          <div className={classes.tableWrapper}>
            <Grid container spacing={1}>
              <Grid item lg={6}>
                <Typography className={classes.title}>Summary</Typography>
                <SummaryTable />
              </Grid>
              <Grid item lg={6}>
                <Typography className={classes.title}>Accounts</Typography>
                <AccountsTable />
              </Grid>
            </Grid>
          </div>
          <div className={classes.tableWrapper}>
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <Typography className={classes.title}>Transactions</Typography>
                <div className={classes.inputFieldWrapper}>
                  <label className={classes.label}>Type:</label>
                  <FormControl className={classes.formControl}>
                    <InputLabel id='demo-simple-select-label'>Type</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={value}
                      onChange={handleChange}>
                      <MenuItem value={"Next 7 Days"}>Next 7 Days</MenuItem>
                      <MenuItem value={"Next 8 Days"}>Next 8 Days</MenuItem>
                      <MenuItem value={"Next 9 Days"}>Next 9 Days</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <TransactionTable />
              </Grid>
            </Grid>
          </div>
          <Button variant='contained' className={classes.buttonWrapper}>
            Clear
          </Button>
          <Button variant='contained' color='primary' className={classes.buttonWrapper}>
            Save
          </Button>
          <Button variant='contained' className={classes.buttonWrapper}>
            Close
          </Button>
        </div>
      </div>
    </>
  );
};
export default ShortTermCashProjection;
