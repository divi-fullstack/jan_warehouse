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
import AddContactModal from './modals/add-contacts';

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
const Contacts: React.FC<{}> = () => {
    const classes = useStyles()

    const [addContactModal, setAddContactModal] = useState(false)

    const handleAddContactModal = (action: boolean) => {
        setAddContactModal(action)
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={6}>
                    <h3 className={classes.heading}>Contacts</h3>
                    <Grid item xs={12} md={12} sm={12}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Default</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Telephone</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Mobile</TableCell>
                                        <TableCell align="right">Fax</TableCell>
                                        <TableCell align="right">Website</TableCell>
                                        <TableCell align="right">Roles</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={'row.name'}>
                                        <TableCell component="th" scope="row">
                                            Yes
                                        </TableCell>
                                        <TableCell>Dakota Rice</TableCell>
                                        <TableCell align="right">+1-9999999999</TableCell>
                                        <TableCell align="right">dakota@email.com</TableCell>
                                        <TableCell align="right">+1-9999999999</TableCell>
                                        <TableCell align="right">9999999999</TableCell>
                                        <TableCell align="right">www.dakota.com</TableCell>
                                        <TableCell align="right">Not assigned</TableCell>
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
                                Clear
                        </Button>
                            <Button variant="contained" color="primary" onClick={() => handleAddContactModal(true)}>
                                Add
                        </Button>
                            <Button variant="contained" color="primary">
                                Save
                        </Button>
                        </div>
                    </BottomDrower>
                </Grid>
            </Grid>
            <AddContactModal addContactModal={addContactModal} handleAddContactModal={handleAddContactModal} />
        </div>
    )
}
export default Contacts