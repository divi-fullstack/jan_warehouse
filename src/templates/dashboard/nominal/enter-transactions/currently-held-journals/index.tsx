import React from "react"
import 'date-fns'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme : Theme) => createStyles({
    currentHeldJournals: {
        padding: theme.spacing(2)
    },
    CHTitle: {
        fontSize: '30px',
        fontWeight: 'bold',
        paddingBottom: theme.spacing(2)
    },
    currentHeldJournalsWrapper: {
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

function createData(date : number, user : string, title : string, postingdate : number) {
    return {date, user, title, postingdate};
}

const rows = [createData(1101, 'dummy', 'dummy', 1101)];

const CurrentHeldJournals : React.FC < {} > = () => {

    const classes = useStyles();
    return (
        <div className={classes.currentHeldJournals}>
            <Grid item xs={12} lg={12}>
                <Typography className={classes.CHTitle}>Journal Transactions</Typography>
                <TableContainer
                    component={Paper}
                    className={classes.currentHeldJournalsWrapper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Code</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">User</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">PostingDate</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.date}>
                                    <TableCell component="th" scope="row">
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.user}</TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.postingdate}</TableCell>
                                    <TableCell align="right">

                                        <Button variant="contained" color="primary" className={classes.actionWrapper}>Process</Button>
                                        <Button variant="contained" color="primary" className={classes.actionWrapper}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
            <br/>

            <Button variant="contained" color="primary" className={classes.actionWrapper}>Select All</Button>
            <Button variant="contained" color="primary" className={classes.actionWrapper}>Print</Button>
            <Button variant="contained" color="primary" className={classes.actionWrapper}>Print All</Button>

        </div>
    )
}

export default CurrentHeldJournals