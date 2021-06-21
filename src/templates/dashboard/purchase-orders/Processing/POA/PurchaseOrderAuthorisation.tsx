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
  Document_No: number,
  Document_Status: string,
  Supplier_Code: string,
  Supplier_Name: string,
  Currency_Symbol: string,
  Total_Gross_Value: number,
  Order_Originator: string,
  Order_Created_By: string,
  Require_Super_Authority: string
) {
  return {
  Document_Date,
    Document_No,
  Document_Status,
  Supplier_Code,
  Supplier_Name,
  Currency_Symbol,
  Total_Gross_Value,
  Order_Originator,
  Order_Created_By,
  Require_Super_Authority
  };
}

const rows = [
  createData(
    "03/10/2000",
    112,
    "Req data",
    "123",
    "Ic_Data",
    "IN_Data",
    234,
    "567",
    "890",
    "980"
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
          <Typography style={{marginLeft:'11px'}} className={classes.NVtitle} >Purchase Orders to Authorise
            </Typography>
      <div style={{marginLeft:'13px'}}>
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
            <TableCell align="right">Document_Date</TableCell>
            <TableCell>Document_No</TableCell>
            <TableCell align="right">Document_Status</TableCell>
            <TableCell align="right">Supplier_Code</TableCell>
            <TableCell align="right">Item Code</TableCell>
            <TableCell align="right">Item Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Buying Unit</TableCell>
            <TableCell align="right">Order_Created_By</TableCell>
            <TableCell align="right">Require_Super_Authority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          
          {rows.map((row) => (
            <TableRow key={row.Document_No}>
                <TableCell padding="checkbox">
          <Checkbox
          />
        </TableCell>
              <TableCell align="right" >
                {row.Document_No} </TableCell>
              <TableCell align="right">{row.Document_Date}</TableCell>
              <TableCell align="right">{row.Document_Status}</TableCell>
              <TableCell align="right">{row.Supplier_Code}</TableCell>
              <TableCell align="right">{row.Supplier_Name}</TableCell>
              <TableCell align="right">{row.Currency_Symbol}</TableCell>
              <TableCell align="right">{row.Total_Gross_Value}</TableCell>
              <TableCell align="right">{row.Order_Originator}</TableCell>
              <TableCell align="right">{row.Order_Created_By}</TableCell>
              <TableCell align="right">{row.Require_Super_Authority}</TableCell>
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
