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
  Document_Date: string,
  Authorised_Date:string,
  Document_No: number,
  Document_Status: string,
  Document_Print_Status:string,
  Supplier_Code: string,
  Supplier_Name: string,
  Order_Originator: number,
  Order_Created_By: number,
  Authorisation_Status: number,
  Total_Gross_Value: number,
) {
  return {
  Document_Date,
  Authorised_Date,
    Document_No,
  Document_Status,
  Document_Print_Status,
  Supplier_Code,
  Supplier_Name,
  Order_Originator,
  Order_Created_By,
  Authorisation_Status,
  Total_Gross_Value
  };
}

const rows = [
  createData(
    "03/10/2000",
    "AD_Data",
    112,
    "Req data",
    "DPS",
    "123",
    "IN_Data",
    234,
    567,
    890,
    980,
  )
];

export default function PurchaseOrderAuthorisation() {
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
          <Typography style={{marginLeft:'11px'}} className={classes.NVtitle} >My Purchase Order Authorised List
            </Typography>
      <div style={{marginLeft:'13px'}}>
          <a href="" className={classes.NVlabel}>Purchase Document Enquiry |</a> 
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
            <TableCell>Document_Date</TableCell>
            <TableCell  align="right">Authorise_Date</TableCell>
            <TableCell  align="right">Document_No</TableCell>
            <TableCell align="right">Document_Status</TableCell>
            <TableCell  align="right">Document_Print_Status</TableCell>
            <TableCell align="right">Supplier_Code</TableCell>
            <TableCell align="right">Supplier_Name</TableCell>
            <TableCell align="right">Order_Originator</TableCell>
            <TableCell align="right">Order_Created_By</TableCell>
            <TableCell align="right">Authorisation_Status</TableCell>
            <TableCell align="right">Total_Gross_Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Document_No}>
                <TableCell padding="checkbox">
          <Checkbox
          />
        </TableCell>
              <TableCell align="right">{row.Document_Date}</TableCell>
              <TableCell component="th" scope="row">{row.Authorised_Date} </TableCell>
              <TableCell component="th" scope="row">{row.Document_No} </TableCell>
              <TableCell align="right">{row.Document_Status}</TableCell>
              <TableCell align="right">{row.Document_Print_Status}</TableCell>
              <TableCell align="right">{row.Supplier_Code}</TableCell>
              <TableCell align="right">{row.Supplier_Name}</TableCell>
              <TableCell align="right">{row.Order_Originator}</TableCell>
              <TableCell align="right">{row.Order_Created_By}</TableCell>
              <TableCell align="right">{row.Authorisation_Status}</TableCell>
              <TableCell align="right">{row.Total_Gross_Value}</TableCell>
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
