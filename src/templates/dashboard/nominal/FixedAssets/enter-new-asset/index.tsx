// import React from "react"
// import Grid from '@material-ui/core/Grid'
// import NativeSelect from '@material-ui/core/NativeSelect';
// import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography/Typography'
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import DateFnsUtils from '@date-io/date-fns';
// import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

// import Button from '@material-ui/core/Button';

// const BootstrapInput = withStyles((theme : Theme) => createStyles({
//     input: {
//         borderRadius: 4,
//         backgroundColor: theme.palette.background.paper,
//         border: '1px solid #ced4da',
//         fontSize: 16,
//         padding: '7px 26px 7px 12px',
//         transition: theme
//             .transitions
//             .create(['border-color', 'box-shadow']),
//         fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"'
//         ].join(','),
//         '&:focus': {
//             borderRadius: 4,
//             borderColor: '#80bdff',
//             boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
//         }
//     }
// }),)(InputBase);

// const useStyles = makeStyles((theme : Theme) => createStyles({
//     root: {
//         '& > *': {
//             display: 'flex',
//             flexDirection: 'row',
//             margin: theme.spacing(2),
//             width: '100%'
//         }
//     },
//     accountsWrapper: {},
//     title: {
//         textAlign: 'left',
//         fontSize: '17px',
//         fontWeight: 'bold'
//     },
//     inputFieldWrapperNomialJournal: {
//         width: '30%',
//         display: 'flex',
//         flexDirection: 'column',
//         paddingTop: theme.spacing(3)
//     },
//     label: {
//         width: '15%',
//         fontSize: '15px',
//         paddingRight: theme.spacing(2),
//         paddingTop: theme.spacing(2)
//     },
//     inputFieldWrapper: {},
//     selectTab: {
//         borderBottom: 'none',
//         border: '.5px solid rgb(211,211,211,0.7)',
//     },
//      selectTabActive: {
//         borderBottom: 'none',
//         border: '.5px solid rgb(211,211,211,0.7)',
//         width:'100px'
//     },
//     buttonWrapper:{
//         margin:theme.spacing(3)
//     },
// inputwraper: {marginLeft:theme.spacing(2)},
// input: {
//     borderRadius: 4,
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '7px 26px 7px 12px',
//     transition: theme
//         .transitions
//         .create(['border-color', 'box-shadow']),
//     fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"'
//     ].join(','),
//     '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
//     }
// }
// }),);

// const EnterNewAsset : React.FC < {} > = () => {
//     const classes = useStyles();
//     const [selectedDate,
//         setSelectedDate] = React.useState < Date | null > (new Date(),);
//         const handleDateChange = (date : Date | null) => {
//             setSelectedDate(date);
//         };

//     return (
//      <>
//      <div className={classes.accountsWrapper}>

//      <Grid item lg={12}>
//                     <Typography className={classes.NVtitle}>Bank</Typography>
//                     <div className={classes.NVformWrapper}>
//                         <form>
//                             <div className={classes.NVFieldWrapper}>
//                                 <label className={classes.NVlabel}>Bank Account</label>
//                                 <NativeSelect
//                                     id="demo-customized-select-native"
//                                     value={bankaccount}
//                                     onChange={handleChange}
//                                     input={< BootstrapInput />}>
//                                     <option aria-label="None" value=""/>
//                                     <option value={10}>Ten</option>
//                                     <option value={20}>Twenty</option>
//                                     <option value={30}>Thirty</option>
//                                 </NativeSelect>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                             </div>
//                             <div className={classes.NVFieldWrapper}>
//                                 <label className={classes.NVlabel}>Account Type :</label>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                                 &nbsp; &nbsp;
//                                 <label className={classes.NVlabel}>Currency :</label>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                                 &nbsp; &nbsp;
//                                 <label className={classes.NVlabel}>Exchange rate to base :</label>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                             </div>
//                         </form>
//                     </div>
//                 </Grid>
//                 <Grid item lg={12}>
//                     <Typography className={classes.NVtitle}>Transaction Details</Typography>
//                     <div className={classes.NVformWrapper}>
//                         <form>
//                             <div className={classes.NVFieldWrapper}>
//                                 <label className={classes.NVlabel}>Cheque Number :</label>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                                 &nbsp; &nbsp; &nbsp; &nbsp;
//                                 <label className={classes.NVlabel}>2nd ref :</label>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                             </div>
//                             <div className={classes.NVFieldWrapper}>
//                                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                                     <label
//                                         style={{
//                                         lineHeight: '55px'
//                                     }}>Transactions Date :</label>
//                                     <KeyboardDatePicker
//                                         margin="normal"
//                                         id="date-picker-dialog"
//                                         format="MM/dd/yyyy"
//                                         value={selectedDate}
//                                         onChange={handleDateChange}
//                                         KeyboardButtonProps={{
//                                         'aria-label': 'change date'
//                                     }}/></MuiPickersUtilsProvider>
//                                 &nbsp;&nbsp;
//                                 <label className={classes.NVlabel}>Narrative :</label>
//                                 <TextField id="outlined-size-small" variant="outlined" size="small"/>
//                             </div>
//                         </form>
//                     </div>
//                 </Grid>

//         <Typography className={classes.title}>Asset Details</Typography>
//         <form className={classes.root} noValidate autoComplete="off">
//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Code :</label>
//                 <TextField id="code" label="Code" variant="outlined"/>

//                 <label className={classes.label}>Initial Value :</label>
//                 <TextField id="code" label="Code" variant="outlined"/>
//             </div>
//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Code :</label>
//                 <TextField id="code" label="Code" variant="outlined"/>

//                 <label className={classes.label}>Initial Value :</label>
//                 <TextField id="code" label="Code" variant="outlined"/>
//             </div>
//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Description :</label>
//                 <TextField id="code" label="Code" variant="outlined"/>

//                 <label className={classes.label}>Date Acquired :</label>
//                 <div className={classes.inputFieldWrapperNomialJournal}>

//                             <MuiPickersUtilsProvider utils={DateFnsUtils}>

//                                 <KeyboardDatePicker
//                                     margin="normal"
//                                     id="date-picker-dialog"
//                                     // label="Date picker dialog"
//                                     format="MM/dd/yyyy"
//                                     value={selectedDate}
//                                     onChange={handleDateChange}
//                                     KeyboardButtonProps={{
//                                     'aria-label': 'change date'
//                                 }}/>
//                             </MuiPickersUtilsProvider>
//                         </div>
//             </div>
//             <div className={classes.inputFieldWrapper}>
//                  <label className={classes.label}>Last Depriciated :</label>
//                  <div className={classes.inputFieldWrapperNomialJournal}>

// <MuiPickersUtilsProvider utils={DateFnsUtils}>

//     <KeyboardDatePicker
//         margin="normal"
//         id="date-picker-dialog"
//         // label="Date picker dialog"
//         format="MM/dd/yyyy"
//         value={selectedDate}
//         onChange={handleDateChange}
//         KeyboardButtonProps={{
//         'aria-label': 'change date'
//     }}/>
// </MuiPickersUtilsProvider>
// </div>
//             </div>

//             <Typography className={classes.title}>Depritiation Details :</Typography>
//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Description Method :</label>
//                 <TextField id="code-consolidated" variant="outlined"/>
//                 <Select id="code-dropdown" className={classes.selectTab}>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                 </Select>
//             </div>
//              <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Net Book Value :</label>
//                 <TextField className={classes.inputwraper} id="code-consolidated" variant="outlined"/>
//             </div>
//              <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Balence sheet :</label>
//                 <TextField id="code-consolidated" variant="outlined"/>
//                 <Select id="code-dropdown" className={classes.selectTab}>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                 </Select>
//                 <TextField className={classes.inputwraper} id="code-consolidated" variant="outlined"/>
//                 <TextField className={classes.inputwraper} id="code-consolidated" variant="outlined"/>
//             </div>
//              <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Profit And Loss :</label>
//                 <TextField id="code-consolidated" variant="outlined"/>
//                 <Select id="code-dropdown" className={classes.selectTab}>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                 </Select>
//                 <TextField className={classes.inputwraper} id="code-consolidated" variant="outlined"/>
//                 <TextField className={classes.inputwraper} id="code-consolidated" variant="outlined"/>
//             </div>

//             <Typography className={classes.title}>Analysis Details</Typography>

//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Manager :</label>
//                 <TextField id="code-consolidated" variant="outlined"/>
//                 <Select id="code-dropdown" className={classes.selectTab}>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                 </Select>
//             </div>
//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Location :</label>
//                 <TextField id="code-consolidated" variant="outlined"/>
//                 <Select id="code-dropdown" className={classes.selectTab}>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                 </Select>
//             </div>
//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Analysis 1 :</label>
//                 <TextField id="code-consolidated" variant="outlined"/>
//                 <Select id="code-dropdown" className={classes.selectTab}>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                 </Select>
//             </div>
//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Analysis 2 :</label>
//                 <TextField id="code-consolidated" variant="outlined"/>
//                 <Select id="code-dropdown" className={classes.selectTab}>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                 </Select>
//             </div>
//             <div className={classes.inputFieldWrapper}>
//                 <label className={classes.label}>Analysis 3 :</label>
//                 <TextField id="code-consolidated" variant="outlined"/>
//                 <Select id="code-dropdown" className={classes.selectTab}>
//                     <MenuItem value=""></MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                     <MenuItem value={'data data data data'}>data data data data</MenuItem>
//                 </Select>
//             </div>

//         </form>
//     <div>
//              <Button variant="contained"  className={classes.buttonWrapper}>Clear</Button>
//       <Button variant="contained" color="primary"  className={classes.buttonWrapper}>
//         Save
//       </Button>
//     </div>
//     </div>
// </>
//     )
// }
// export default EnterNewAsset

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
const EnterNewAsset: React.FC<{}> = () => {
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
          <Typography className={classes.NVtitle}>Asset Details</Typography>
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
                <label className={classes.NVlabel}>Initial Value :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={classes.NVFieldWrapper}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <label
                    style={{
                      lineHeight: "55px",
                    }}
                  >
                    Date Acquired :
                  </label>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                &nbsp;&nbsp;
                <label className={classes.NVlabel}>Description :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>

              <div className={classes.NVFieldWrapper}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <label
                    style={{
                      lineHeight: "55px",
                    }}
                  >
                    Last Depriciated :
                  </label>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                &nbsp;&nbsp;
              </div>
            </form>
          </div>
        </Grid>

        <Grid item lg={12}>
          <Typography className={classes.NVtitle}>
            Depriciation Details
          </Typography>
          <div className={classes.NVformWrapper}>
            <form>
              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Description Method</label>
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
              </div>

              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Net book value</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>

              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Balence Sheet</label>
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

              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Profit and loss</label>
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
          <Typography className={classes.NVtitle}>Analysis Details</Typography>
          <div className={classes.NVformWrapper}>
            <form>
              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Manager :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>

              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Location :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Analysis 1 :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Analysis 2 :</label>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={classes.NVFieldWrapper}>
                <label className={classes.NVlabel}>Analysis 3 :</label>
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
      </Grid>
    </div>
  );
};

export default EnterNewAsset;
