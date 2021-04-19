import React from "react"
import 'date-fns'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles((theme : Theme) => createStyles({
    root: {
        margin: theme.spacing(1),
        width: '90%'
    },
    NJTitle: {
        fontSize: '30px',
        fontWeight: 'bold'
    },
    nomialWrapper: {
        padding: theme.spacing(3)
    },
    headerWrappper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    inputFieldWrapperNomialJournal: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(3)
    },
    NomialJournaltable: {
        width: '100%'
    },
    actionWrapper: {
        marginLeft: theme.spacing(1)
    }
}),);
function createData(code : number, cc : string, dept : string, name : string, narrative : string, transaction : number, vattype : string, vatcode : number, debit : number, credit : number) {
    return {
        code,
        cc,
        dept,
        name,
        narrative,
        transaction,
        vattype,
        vatcode,
        debit,
        credit
    };
}

const rows = [createData(1101, 'dummy', 'dummy', 'dummy', 'dummy', 123, 'dummy', 123, 123, 123)];

const Nominal_journal : React.FC < {} > = () => {
    const [value,
        setValue] = React.useState('');
    const [value1,
        setValue1] = React.useState('');
    const [selectedDate,
        setSelectedDate] = React.useState < Date | null > (new Date(),);

    const handleDateChange = (date : Date | null) => {
        setSelectedDate(date);
    };
    const handleChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const handleChange1 = (event : React.ChangeEvent < HTMLInputElement >) => {
        setValue1((event.target as HTMLInputElement).value);
    };
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={3} className={classes.nomialWrapper}>
                    <Grid item xs={12} lg={6}>
                        <Typography className={classes.NJTitle}>
                            Header Details
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="headerdetails"
                                name="headerdetails"
                                value={value}
                                onChange={handleChange}
                                className={classes.headerWrappper}>
                                <FormControlLabel
                                    value="newjournalentry"
                                    control={< Radio />}
                                    label="New journal entry"/>
                                <FormControlLabel
                                    value="usetemplate"
                                    control={< Radio />}
                                    label="Use template"/>
                            </RadioGroup>
                        </FormControl>

                        <div className={classes.inputFieldWrapperNomialJournal}>
                            <TextField
                                label="Size"
                                id="outlined-size-normal"
                                defaultValue="Normal"
                                variant="outlined"/>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date picker dialog"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }}/>
                            </MuiPickersUtilsProvider>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography className={classes.NJTitle}>
                            Posting Options
                        </Typography>
                        <FormControl component="fieldset" className={classes.headerWrappper}>
                            <RadioGroup
                                aria-label="headerdetails"
                                name="headerdetails"
                                value={value1}
                                onChange={handleChange1}>
                                <FormControlLabel
                                    value="newjournalentry"
                                    control={< Radio />}
                                    label="Single Entry"/>
                                <FormControlLabel
                                    value="usetemplate"
                                    control={< Radio />}
                                    label="Reversing Entry"/>
                                <FormControlLabel
                                    value="usetemplate"
                                    control={< Radio />}
                                    label="Recurring Entry"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Typography className={classes.NJTitle}>Journal Transactions</Typography>
                        <TableContainer component={Paper} className={classes.NomialJournaltable}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Code</TableCell>
                                        <TableCell align="right">CC</TableCell>
                                        <TableCell align="right">Dept</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Narrative</TableCell>
                                        <TableCell align="right">Transactions</TableCell>
                                        <TableCell align="right">Vat Type</TableCell>
                                        <TableCell align="right">Vat Code</TableCell>
                                        <TableCell align="right">Debit</TableCell>
                                        <TableCell align="right">Credit</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.code}>
                                            <TableCell component="th" scope="row">
                                                {row.code}
                                            </TableCell>
                                            <TableCell align="right">{row.cc}</TableCell>
                                            <TableCell align="right">{row.dept}</TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.narrative}</TableCell>
                                            <TableCell align="right">{row.transaction}</TableCell>
                                            <TableCell align="right">{row.vattype}</TableCell>
                                            <TableCell align="right">{row.vatcode}</TableCell>
                                            <TableCell align="right">{row.debit}</TableCell>
                                            <TableCell align="right">{row.credit}</TableCell>
                                            <TableCell align="right">

                                                <Button variant="contained" color="secondary" className={classes.actionWrapper}>Delete</Button>
                                                <Button variant="contained" color="primary" className={classes.actionWrapper}>Clear</Button>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                    <Button variant="contained" color="primary" className={classes.actionWrapper}>Post</Button>
                    <Button variant="contained" color="primary" className={classes.actionWrapper}>Post and Attach</Button>
                    <Button variant="contained" color="primary" className={classes.actionWrapper}>Hold</Button>
                    <Button variant="contained" color="primary" className={classes.actionWrapper}>Print</Button>

                </Grid>

            </div>
        </React.Fragment>
    )
}
export default Nominal_journal