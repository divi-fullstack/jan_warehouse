import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
    fullWidthPicker: {
      "& > div": {
        width: "100%",
        margin: 8,
      },
    },
    labelterms: {
      "& .MuiFormControlLabel-label": {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: 14,
      },
    },
  })
);
const Credit: React.FC<{}> = () => {
  const [acopenDate, setAcopenDate] = React.useState<Date | null>(new Date());
  const [lastCreditDate, setLastCreditDate] = React.useState<Date | null>(
    new Date()
  );
  const [nextCreditDate, setNextCreditDate] = React.useState<Date | null>(
    new Date()
  );
  const [applicantDate, setApplicantDate] = React.useState<Date | null>(
    new Date()
  );
  const [receivedDate, setReceivedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleAcopenDateChange = (date: Date | null) => {
    setAcopenDate(date);
  };
  const handleLastCreditDateChange = (date: Date | null) => {
    setLastCreditDate(date);
  };
  const handleNextCreditDateChange = (date: Date | null) => {
    setNextCreditDate(date);
  };
  const handleApplicantDateChange = (date: Date | null) => {
    setApplicantDate(date);
  };
  const handleReceivedDateChange = (date: Date | null) => {
    setReceivedDate(date);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4} sm={6} className={classes.fullWidthPicker}>
          <h3 className={classes.heading}>Credit Review</h3>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="A/C Opened"
              value={acopenDate}
              onChange={handleAcopenDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Last Credit Review"
              value={lastCreditDate}
              onChange={handleLastCreditDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Next Credit Review"
              value={nextCreditDate}
              onChange={handleNextCreditDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Application Date"
              value={applicantDate}
              onChange={handleApplicantDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date Received "
              value={receivedDate}
              onChange={handleReceivedDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>

        <Grid item xs={6} md={4} sm={6}>
          <h3 className={classes.heading}>Credit Terms</h3>

          <TextField
            id="trading"
            label="Trading terms text"
            style={{ margin: 8 }}
            placeholder=""
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="credit reference"
            label="Credit reference"
            style={{ margin: 8 }}
            placeholder=""
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <FormControl className={classes.formControl}>
            <InputLabel shrink id="bureau">
              Bureau
            </InputLabel>
            <Select
              labelId="business"
              id="business-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={"business credit sure"}>
                Business Credit Sure
              </MenuItem>
              <MenuItem value={"business credit sure"}>
                Business Credit Sure
              </MenuItem>
              <MenuItem value={"business credit sure"}>
                Business Credit Sure
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel shrink id="credit">
              Credit Position
            </InputLabel>
            <Select
              labelId="credit"
              id="credit-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={"business credit sure"}>Good</MenuItem>
              <MenuItem value={"business credit sure"}>Better</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="average"
            label="Average time to pay"
            style={{ margin: 8 }}
            placeholder="days"
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControlLabel
            className={classes.labelterms}
            control={<Checkbox name="checkedB" color="primary" />}
            label="Terms agreed"
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Credit;
