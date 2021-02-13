import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { margin } from "../../../../ui-variables";
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
    internalBlock: {
      "& > div": {
        width: "100%",
      },
    },
  })
);
const LastTransactionBetweenSelection: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date); 
  };
  return (
    <>
      <Grid item xs={12} md={3} sm={6} className={classes.internalBlock}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin={margin}
            id="date-picker-inline"
            label="Start date" 
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              "aria-label": "start date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} md={3} sm={6} className={classes.internalBlock}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy" 
            margin={margin}
            id="date-picker-inline"
            label="End date" 
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              "aria-label": "end date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </>
  );
};
export default LastTransactionBetweenSelection;
