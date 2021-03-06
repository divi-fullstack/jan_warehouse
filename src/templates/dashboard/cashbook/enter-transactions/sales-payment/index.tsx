import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "7px 26px 7px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NominalVatableReceipt: {
      padding: theme.spacing(2),
    },
    NVtitle: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    NVFieldWrapper: {
      padding: "10px 0",
    },
    NVlabel: {
      lineHeight: "30px",
      paddingRight: theme.spacing(2),
    },
    NVformWrapper: {
      paddingTop: theme.spacing(2),
    },
    NVtable: {
      width: "100%",
    },
    buttonWrapper: {
      margin: theme.spacing(3),
    },
  })
);

// table info
function createData(
  code: number,
  cc: string,
  department: string,
  name: string,
  reference: string,
  narrative: string,
  transition: number,
  transda: string,
  grossvalue: number,
  vatco: number,
  rate: number,
  goodval: string,
  vatvalue: number
) {
  return {
    code,
    cc,
    department,
    name,
    reference,
    narrative,
    transition,
    transda,
    grossvalue,
    vatco,
    rate,
    goodval,
    vatvalue,
  };
}

const rows = [
  createData(
    1011,
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    1234,
    "dummy",
    123,
    123,
    123,
    "dummy",
    123
  ),
];
const SalesPayment: React.FC<{}> = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  const [bankaccount, setBankaccount] = React.useState("");
  const handleChange = (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => {
    setBankaccount(event.target.value as string);
  };
  return (
    <div className={classes.NominalVatableReceipt}>
      <Grid container spacing={3}>

        <Grid item lg={12}>
          <Typography className={classes.NVtitle}>
            Bank Account Details
          </Typography>
          <div className={classes.NVformWrapper}>
            <form>

              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Bank account</label>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={bankaccount}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
            </form>
          </div>
        </Grid>

        <Grid item lg={12}>
          <Typography className={classes.NVtitle}>Customer Details</Typography>
          <div className={classes.NVformWrapper}>
            <form>
              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Code :</label>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={bankaccount}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <label className={classes.NVlabel}>Credit Limit :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <label className={classes.NVlabel}>Date :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>

              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Short name :</label>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={bankaccount}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <label className={classes.NVlabel}>Balencr :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <label className={classes.NVlabel}>Reference :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
              
              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Post Code :</label>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={bankaccount}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <label className={classes.NVlabel}>Second Reference :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
            </form>
          </div>
        </Grid>

        <Grid item lg={12}>
          <Typography className={classes.NVtitle}>Receipt Details</Typography>
          <div className={classes.NVformWrapper}>
            <form>
              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Check curency :</label>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={bankaccount}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;
                <label className={classes.NVlabel}>Chaque Value :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>

              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Sattelment Amount :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
             </form>
          </div>
        </Grid>

        <Button variant="contained" className={classes.buttonWrapper}>
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonWrapper}
        >
          Save
        </Button>
        <Button variant="contained" className={classes.buttonWrapper}>
          Save & Allocate
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonWrapper}
        >
          Close
        </Button>
      </Grid>
    </div>
  );
};

export default SalesPayment;

