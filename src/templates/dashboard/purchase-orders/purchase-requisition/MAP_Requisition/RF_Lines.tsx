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
  { field: 'id', headerName: 'Fulfilment Type', width: 150 },
  { field: 'Reference', headerName: 'Reference', width: 130 },
  { field: 'Quantity', headerName: 'Quantity', width: 130 },
  {
    field: 'Warehouse',
    headerName: 'Warehouse',
    width: 90,
  }
];

const rows = [
  { id: '1', Reference: 'REF_Data', Quantity: '1000', Warehouse: 'Warehouse'},
];

export default function RF_Lines() {
      const classes = useStyles();

  return (
      <div className="">
          <Typography style={{marginLeft:'11px'}} className={classes.NVtitle} >Requisition Fulfilment Lines
            </Typography>
      <div style={{marginLeft:'13px'}}>
          <a href="" className={classes.NVlabel}>Action |</a>
          <a href="" className={classes.NVlabel}>Export |</a>
          <a href="" className={classes.NVlabel}>Print |</a>
          <a href="" className={classes.NVlabel}>Refresh </a>
          </div>
          <br />
      
    <div style={{ minHeight: 200,maxHeight:400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    </div>
  );
}

export {}