import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme : Theme) => createStyles({
    root: {
        flexGrow: 1
    },
    secondGrid: {
        marginTop: theme.spacing(2)
    },
    title: {
        textAlign: 'left',
        fontSize: '17px',
        fontWeight: 'bold',
        paddingLeft: theme.spacing(2)
    },
    label: {
        fontSize: '10px',
        paddingRight: theme.spacing(3)
    },
    inputFieldWrapper: {
        marginTop: theme.spacing(2)
    },
    selectTab: {
        width: '20%',
        height: '30px',
        borderBottom: 'none',
        border: '.5px solid rgb(211,211,211,0.7)',
        marginLeft: theme.spacing(1)
    },
    selectTabActive: {
        borderBottom: 'none',
        border: '.5px solid rgb(211,211,211,0.7)',
        width: '100px'
    },
    buttonWrapper: {
        margin: theme.spacing(3)
    },
    inputwraper: {
        marginLeft: theme.spacing(0),
        width: '15ch',
        marginTop: '-10px'
    },
    budgetTable: {
        minWidth: 300
    
}}));

function createData(pn : string, originalBudget : number, budgetThisYear : number, balanceThisYear : number) {
    return {pn, originalBudget, budgetThisYear, balanceThisYear};
}

const rows = [
    createData('Frozen yoghurt', 23, 4, 5),
    createData('Ice cream sandwich', 237, 4, 4),
    createData('Eclair', 262, 3, 33),
    createData('Cupcake', 305, 33, 3),
    createData('Gingerbread', 356, 33, 33)
];

const BudgetFutureYear : React.FC < {} > = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.title}>Period Values</Typography>
                        <div className={classes.inputFieldWrapper}>
                            <label className={classes.label}>Budget Year :</label>
                            <TextField
                                className={classes.inputwraper}
                                id="code-consolidated"
                                variant="outlined"
                                margin="dense"/>
                        </div>
                           <div className={classes.inputFieldWrapper}>
                            <label className={classes.label}>Budget Type:</label>
                            <TextField
                                className={classes.inputwraper}
                                id="code-consolidated"
                                variant="outlined"
                                margin="dense"/>
                        </div>
                    </Grid>
                    <Grid item xs={6} className={classes.secondGrid}>
                     

                        <div className={classes.inputFieldWrapper}>
                            <label className={classes.label}>Annual Budget :</label>
                            <TextField
                                className={classes.inputwraper}
                                id="code-consolidated"
                                variant="outlined"
                                margin="dense"/>
                        </div>
                      
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography className={classes.title}>Budget Details</Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.budgetTable} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>PN</TableCell>
                                        <TableCell align="right">Budget Year</TableCell>
                                       
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.pn}>
                                            <TableCell component="th" scope="row">
                                                {row.pn}
                                            </TableCell>
                                            <TableCell align="right">{row.originalBudget}</TableCell>
                                      
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.title}>Budget Details</Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.budgetTable} aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                        <TableCell>PN</TableCell>
                                        <TableCell align="right">Budget This Year</TableCell>
                                        <TableCell align="right">Balance This Year</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                       <TableRow key={row.pn}>
                                            <TableCell component="th" scope="row">
                                                {row.pn}
                                            </TableCell>
                                            <TableCell align="right">{row.originalBudget}</TableCell>
                                            <TableCell align="right">{row.budgetThisYear}</TableCell>
                                           
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                  <div>
             <Button variant="contained"  className={classes.buttonWrapper}>Clear</Button>
      <Button variant="contained" color="primary"  className={classes.buttonWrapper}>
        Save
      </Button>
    </div>
            </div>
        </React.Fragment>
    )
}

export default BudgetFutureYear