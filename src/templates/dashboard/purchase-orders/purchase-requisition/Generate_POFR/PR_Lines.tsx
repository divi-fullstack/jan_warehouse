import * as React from 'react';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme : Theme) => createStyles({
  NVtitle: {
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


const columns: ColDef[] = [
  { field: 'id', headerName: 'Combined Budget', width: 140 },
  { field: 'Supplier_Code', headerName: 'Supplier Code', width: 130 },
  { field: 'Supplier_Name', headerName: 'Supplier_Name', width: 130 },
  {
    field: 'Requested_By_Date',
    headerName: 'Requested By Date',
    width: 140,
  },
  {
    field: 'Item_Code',
    headerName: 'Item Code',
    width: 160
  },
  {
    field: 'Item_Name',
    headerName: 'Item Name',
    width: 160
  },
  {
    field: 'Warehouse',
    headerName: 'Warehouse',
    width: 160
  },
  {
    field: 'Quantity',
    headerName: 'Quantity',
    width: 160
  },
  {
    field: 'Unit_Buying_price',
    headerName: 'Unit_Buying_price',
    width: 160
  },
  {
    field: 'Total_Net_Value',
    headerName: 'Total_Net_Value',
    width: 160
  },
{
    field: 'Tax_Rate',
    headerName: 'Tax_Rate',
    width: 160
  },
  {
    field: 'Nominal_Code',
    headerName: 'Nominal_Code',
    width: 160
  },
{
    field: 'Nominal_Account_name',
    headerName: 'Nominal_Account_name',
    width: 180
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 160
  }
];

const rows = [
  { id: '1', Supplier_Code: 'SC_Data', Supplier_Name: 'SN_Data', Requested_By_Date: '03/10/2000' ,Item_Code:'AS_Data',Item_Name:'IN_Data',Warehouse:'warehouse',Quantity:'111',Unit_Buying_price:'123',Total_Net_Value:'1234',Tax_Rate:'12',Nominal_Code:'NC_DATA',Nominal_Account_name:'NAN_Data',Status:'sts'},
];

export default function PR_Lines() {
          const classes = useStyles();

  return (
      <div className="">
          <Typography style={{marginLeft:'11px'}} className={classes.NVtitle} >My Purchase Requisition List
            </Typography>
      <div style={{marginLeft:'13px'}}>
          <a href="" className={classes.NVlabel}>Action |</a>
          <a href="" className={classes.NVlabel}>Export |</a>
          <a href="" className={classes.NVlabel}>Print |</a>
          <a href="" className={classes.NVlabel}>Refresh </a>
          </div>
          <br />
      
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    </div>
  );
}

export {}