import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import BottomDrower from "../../../../../../components/bottom-navigation";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        table: {
            minWidth: 650,
        },
        heading: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },

    }),
);
const Trading: React.FC<{}> = () => {
    const classes = useStyles()
 
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} sm={12}>
                    <h3 className={classes.heading}>Analysis Codes</h3>
                    <Grid item xs={12} md={12} sm={12}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Value</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={0}>
                                        <TableCell component="td" scope="row">
                                            Cust. Type
                                        </TableCell>
                                        <TableCell></TableCell>

                                    </TableRow>
                                    <TableRow key={1}>
                                        <TableCell component="td" scope="row">
                                            Resp. Rep
                                        </TableCell>
                                        <TableCell></TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} sm={12}>
                    <BottomDrower>
                        <div></div>
                        <div>
                            <Button variant="contained">
                                Clear
                        </Button>
                            <Button variant="contained" color="primary">
                                Save
                        </Button>
                        </div>
                    </BottomDrower>
                </Grid>
            </Grid>
           
        </div>
    )
}
export default Trading