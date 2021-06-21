import React from "react";
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';




const useStyles = makeStyles((theme : Theme) => createStyles({
  table: {
    minWidth: 650
  },NVtitle: {
        fontSize: "20px",
        fontWeight: "bold"
    },NVlabel: {
        lineHeight: "20px",
        paddingRight: theme.spacing(1),
        fontSize:'12px',
        fontStyle:'none',
        color:'#008000'
    }
})
);

function createData(
  Order_No: string,
  Message:string,
  Sent_By: string,
  Date: string,
  Due_Date:string,
  Order_Tracker: string,
  Order_Originator: string,
  Sent: string,
  Type: string,
) {
  return {
  Order_No,
  Message,
    Sent_By,
  Date,
  Due_Date,
  Order_Tracker,
  Order_Originator,
  Sent,
  Type,
  };
}

const rows = [
  createData(
    "03/10/2000",
    "AD_Data",
    "112",
    "Req data",
    "DPS",
    "123",
    "IN_Data",
    "234",
    "567",
  )
];

export default function PurchaseOrderNotification() {
  const classes = useStyles();
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [page, setPage] = React.useState(0);

    const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  return (
      <div className="">
          <Typography style={{marginLeft:'11px'}} className={classes.NVtitle} >Purchase Order Notification List
            </Typography>
      <div style={{marginLeft:'13px'}}>
          <a href="" className={classes.NVlabel}>View Details |</a>
          <a href="" className={classes.NVlabel}>Authorise Orders |</a> 
          <a href="" className={classes.NVlabel}>Query Order |</a>
        <a href="" className={classes.NVlabel}>Actions |</a>
          <a href="" className={classes.NVlabel}>Export |</a>
          <a href="" className={classes.NVlabel}>Print |</a>
          <a href="" className={classes.NVlabel}>Refresh</a>
          </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell padding="checkbox">
          <Checkbox
          />
        </TableCell>
            <TableCell>Order_No</TableCell>
            <TableCell  align="right">Authorise_Date</TableCell>
            <TableCell  align="right">Sent_By</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell  align="right">Due_Date</TableCell>
            <TableCell align="right">Order_Tracker</TableCell>
            <TableCell align="right">Order_Originator</TableCell>
            <TableCell align="right">Sent</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Sent_By}>
                <TableCell padding="checkbox">
          <Checkbox
          />
        </TableCell>
              <TableCell align="right">{row.Order_No}</TableCell>
              <TableCell component="th" scope="row">{row.Message} </TableCell>
              <TableCell component="th" scope="row">{row.Sent_By} </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Due_Date}</TableCell>
              <TableCell align="right">{row.Order_Tracker}</TableCell>
              <TableCell align="right">{row.Order_Originator}</TableCell>
              <TableCell align="right">{row.Sent}</TableCell>
              <TableCell align="right">{row.Type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
<TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />    </TableContainer>
    </div>
  );
}
