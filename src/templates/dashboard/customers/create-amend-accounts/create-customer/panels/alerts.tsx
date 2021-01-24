import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import BottomDrower from "../../../../../../components/bottom-navigation";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    table: {
      minWidth: 650,
    },
    modal: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    heading: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  })
);
const Alerts: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} sm={6}>
          <h3 className={classes.heading}>Alerts</h3>
          <Grid item xs={12} md={12} sm={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Created </TableCell>
                    <TableCell>Last Updates</TableCell>
                    <TableCell align="right">User</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Active</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={"row.name"}>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <BottomDrower>
            <div />
            <div>
              <Button variant="contained">Add</Button>
              <Button variant="contained" color="primary">
                Edit
              </Button>
              <Button variant="contained" color="primary">
                Delete
              </Button>
              <Button variant="contained" color="primary">
                Set as Active
              </Button>
            </div>
          </BottomDrower>
        </Grid>
      </Grid>
    </div>
  );
};
export default Alerts;
