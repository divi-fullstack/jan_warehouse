import React, { useState } from 'react'
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
        modal: {
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        heading: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },

    }),
);

const Attachments: React.FC<{}> = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={6}>
                    <h3 className={classes.heading}>Attachments</h3>
                    <Grid item xs={12} md={12} sm={12}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>File Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                        <TableCell align="right">File type</TableCell>
                                        <TableCell align="right">File size</TableCell>
                                        <TableCell align="right">Date time modified</TableCell>
                                        <TableCell align="right">Link</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={'row.name'}>                                     
                                        <TableCell>Test file</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell align="right">saved</TableCell>
                                        <TableCell align="right">pdf</TableCell>
                                        <TableCell align="right">456 M</TableCell>
                                        <TableCell align="right">15 Jan 21</TableCell>
                                        <TableCell align="right">Link</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <BottomDrower>
                        <div></div>
                        <div>
                            <Button variant="contained">
                                Add File
                        </Button>
                            <Button variant="contained" color="primary">
                                Add Link
                        </Button>
                            <Button variant="contained" color="primary">
                                Add Folder
                        </Button>
                        </div>
                    </BottomDrower>
                </Grid>
            </Grid>

        </div>
    )
}
export default Attachments