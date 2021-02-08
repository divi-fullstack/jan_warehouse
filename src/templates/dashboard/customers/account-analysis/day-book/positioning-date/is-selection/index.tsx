import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { margin } from "../../../../../../../ui-variables";
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
const PositioningDateIsSelection: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [date, setDate] = React.useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setDate(date);
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
            label="Date"
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </>
  );
};
export default PositioningDateIsSelection;
