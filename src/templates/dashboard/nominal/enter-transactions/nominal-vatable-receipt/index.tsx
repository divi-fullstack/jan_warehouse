import React from "react"
import Grid from '@material-ui/core/Grid'
import {createStyles, makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';

const BootstrapInput = withStyles((theme : Theme) => createStyles({
    input: {
        borderRadius: 4,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '7px 26px 7px 12px',
        transition: theme
            .transitions
            .create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
    }
}),)(InputBase);

const useStyles = makeStyles((theme : Theme) => createStyles({
    NominalVatableReceipt: {
        padding: theme.spacing(2)
    },
    NVtitle: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    NVFieldWrapper: {
        padding: '10px 0'
    },
    NVlabel: {
        lineHeight: '30px',
        paddingRight: theme.spacing(2)
    },
    NVformWrapper: {
        paddingTop: theme.spacing(2)
    },
    NVtable: {
        width: '100%'
    }
}),)

// table info
function createData(code : number, cc : string, department : string, name : string, reference : string, narrative : string, transition : number, transda : string, grossvalue : number, vatco : number, rate : number, goodval : string, vatvalue : number) {
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
        vatvalue
    };
}

const rows = [createData(1011, 'dummy', 'dummy', 'dummy', 'dummy', 'dummy', 1234, 'dummy', 123, 123, 123, 'dummy', 123)];
const NominalVatableReceipt : React.FC < {} > = () => {
    const [selectedDate,
        setSelectedDate] = React.useState < Date | null > (new Date(),);

    const handleDateChange = (date : Date | null) => {
        setSelectedDate(date);
    };
    const classes = useStyles();
    const [bankaccount,
        setBankaccount] = React.useState('');
    const handleChange = (event : React.ChangeEvent < {
        value: unknown
    } >) => {
        setBankaccount(event.target.value as string);
    };
    return (
        <div className={classes.NominalVatableReceipt}>
            <Grid container spacing={3}>
                <Grid item lg={12}>
                    <Typography className={classes.NVtitle}>Bank</Typography>
                    <div className={classes.NVformWrapper}>
                        <form>
                            <div className={classes.NVFieldWrapper}>
                                <label className={classes.NVlabel}>Bank Account</label>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={bankaccount}
                                    onChange={handleChange}
                                    input={< BootstrapInput />}>
                                    <option aria-label="None" value=""/>
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                            </div>
                            <div className={classes.NVFieldWrapper}>
                                <label className={classes.NVlabel}>Account Type :</label>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                                &nbsp; &nbsp;
                                <label className={classes.NVlabel}>Currency :</label>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                                &nbsp; &nbsp;
                                <label className={classes.NVlabel}>Exchange rate to base :</label>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                            </div>
                        </form>
                    </div>
                </Grid>
                <Grid item lg={12}>
                    <Typography className={classes.NVtitle}>Transaction Details</Typography>
                    <div className={classes.NVformWrapper}>
                        <form>
                            <div className={classes.NVFieldWrapper}>
                                <label className={classes.NVlabel}>Cheque Number :</label>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <label className={classes.NVlabel}>2nd ref :</label>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                            </div>
                            <div className={classes.NVFieldWrapper}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <label
                                        style={{
                                        lineHeight: '55px'
                                    }}>Transactions Date :</label>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}/></MuiPickersUtilsProvider>
                                &nbsp;&nbsp;
                                <label className={classes.NVlabel}>Narrative :</label>
                                <TextField id="outlined-size-small" variant="outlined" size="small"/>
                            </div>
                        </form>
                    </div>
                </Grid>
                <Grid item lg={12}>
                    <Typography className={classes.NVtitle}>Nominal Transactions</Typography>
                    <TableContainer component={Paper}>
                        <Table className={classes.NVtable} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Code</TableCell>
                                    <TableCell align="right">CC</TableCell>
                                    <TableCell align="right">Dept</TableCell>
                                    <TableCell align="right">Department</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Reference</TableCell>
                                    <TableCell align='right'>Narrative</TableCell>
                                    <TableCell align='right'>Transaction</TableCell>
                                    <TableCell align='right'>Trans. Da</TableCell>
                                    <TableCell align='right'>Gross value</TableCell>
                                    <TableCell align='right'>VAT Co</TableCell>
                                    <TableCell align='right'>Rate</TableCell>
                                    <TableCell align='right'>Goods Val</TableCell>
                                    <TableCell align='right'>VAT Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.code}</TableCell>
                                        <TableCell align="right">{row.cc}</TableCell>
                                        <TableCell align="right">{row.department}</TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.reference}</TableCell>
                                        <TableCell align="right">{row.narrative}</TableCell>
                                        <TableCell align="right">{row.transition}</TableCell>
                                        <TableCell align="right">{row.transda}</TableCell>
                                        <TableCell align="right">{row.grossvalue}</TableCell>
                                        <TableCell align="right">{row.vatco}</TableCell>
                                        <TableCell align="right">{row.rate}</TableCell>
                                        <TableCell align="right">{row.goodval}</TableCell>
                                        <TableCell align="right">{row.vatvalue}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}

export default NominalVatableReceipt