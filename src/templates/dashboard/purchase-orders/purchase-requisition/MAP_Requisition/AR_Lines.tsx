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
        fontSize: "30px",
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
  Document_No: number,
  Document_Date: string,
  Requester: string,
  Combines_Budget: number,
  Item_Code: string,
  Item_Name: string,
  quantity: number,
  Buying_Unit: number,
  Currency: number,
  Unit_Buying_Price: number,
  Unit_Buying_Price_Base: number,
  Total_Net_value: number,
  Total_Net_value_Base: number,
  Tax_Rate: number,
  Supplier_Code: string,
  Supplier_Name: string,
  Requested_By_Date: string,
  Nominal_Code: string,
  Nominal_Account_Name: string
  ) {
  return {
    Document_No,
  Document_Date,
  Requester,
  Combines_Budget,
  Item_Code,
  Item_Name,
  quantity,
  Buying_Unit,
  Currency,
  Unit_Buying_Price,
  Unit_Buying_Price_Base,
  Total_Net_value,
  Total_Net_value_Base,
  Tax_Rate,
  Supplier_Code,
  Supplier_Name,
  Requested_By_Date,
  Nominal_Code,
  Nominal_Account_Name
    };
}

const rows = [
  createData(
    112,
    "03/10/2000",
    "Req data",
    123,
    "Ic_Data",
    "IN_Data",
    234,
    567,
    890,
    980,
    999,
    111,
    222,
    202,
    "SC_Data",
    "SN_data",
    "RBD_data",
    "NC_Data",
    "NAN_Data",
  )
];

export default function AR_Lines() {
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
          <Typography style={{marginLeft:'11px'}} className={classes.NVtitle} >Authorised Requisition Lines
            </Typography>
      <div style={{marginLeft:'13px'}}>
          <a href="" className={classes.NVlabel}>Actions |</a>
          <a href="" className={classes.NVlabel}>Export |</a>
          <a href="" className={classes.NVlabel}>Print |</a>
          <a href="" className={classes.NVlabel}>Refresh</a>
          </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Document_No</TableCell>
            <TableCell align="right">Document_Date</TableCell>
            <TableCell align="right">Requester</TableCell>
            <TableCell align="right">Combines_Budget</TableCell>
            <TableCell align="right">Item Code</TableCell>
            <TableCell align="right">Item Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Buying Unit</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">Unit_Buying_Price</TableCell>
            <TableCell align="right">Unit_Buying_Price_Base</TableCell>
            <TableCell align="right">Total_Net_value</TableCell>
            <TableCell align="right">Total_Net_value_Base</TableCell>
            <TableCell align="right">Tax Rate</TableCell>
            <TableCell align="right">Supplier_Code</TableCell>
            <TableCell align="right">Supplier_Name</TableCell>
            <TableCell align="right">Requested_By_Date</TableCell>
            <TableCell align="right">Nominal_Code</TableCell>
            <TableCell align="right">Nominal_Account_Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Document_No}>
                <TableCell padding="checkbox">
          <Checkbox
          />
        </TableCell>
              <TableCell component="th" scope="row">
                {row.Document_No}
              </TableCell>
              <TableCell align="right">{row.Document_Date}</TableCell>
              <TableCell align="right">{row.Requester}</TableCell>
              <TableCell align="right">{row.Combines_Budget}</TableCell>
              <TableCell align="right">{row.Item_Code}</TableCell>
              <TableCell align="right">{row.Item_Name}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.Buying_Unit}</TableCell>
              <TableCell align="right">{row.Currency}</TableCell>
              <TableCell align="right">{row.Unit_Buying_Price}</TableCell>
              <TableCell align="right">{row.Unit_Buying_Price_Base}</TableCell>
              <TableCell align="right">{row.Total_Net_value}</TableCell>
              <TableCell align="right">{row.Total_Net_value_Base}</TableCell>
              <TableCell align="right">{row.Tax_Rate}</TableCell>
              <TableCell align="right">{row.Supplier_Code}</TableCell>
              <TableCell align="right">{row.Supplier_Name}</TableCell>
              <TableCell align="right">{row.Requested_By_Date}</TableCell>
              <TableCell align="right">{row.Nominal_Code}</TableCell>
              <TableCell align="right">{row.Nominal_Account_Name}</TableCell>
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
