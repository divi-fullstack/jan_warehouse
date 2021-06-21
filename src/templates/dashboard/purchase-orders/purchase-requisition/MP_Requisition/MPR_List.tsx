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
  { field: 'id', headerName: 'Document Number', width: 150 },
  { field: 'Document_Date', headerName: 'Document Date', width: 130 },
  { field: 'Total_Net', headerName: 'Total Net', width: 130 },
  {
    field: 'Status',
    headerName: 'Status',
    width: 90,
  },
  {
    field: 'Authorization_Status',
    headerName: 'Authorization Status',
    width: 160
  },
  {
    field: 'Rejected_Status',
    headerName: 'Rejected Status',
    width: 160
  }
];

const rows = [
  { id: '1', Document_Date: '03/10/2000', Total_Net: '1000', Status: '35' ,Authorization_Status:'AS_Data',Rejected_Status:'RS_Data'},
];

export default function PR_List() {
      const classes = useStyles();

  return (
      <div className="">
          <Typography style={{marginLeft:'11px'}} className={classes.NVtitle} >My Purchase Requisition List
            </Typography>
      <div style={{marginLeft:'13px'}}>
          <a href="" className={classes.NVlabel}>New |</a> 
          <a href="" className={classes.NVlabel}>Delete |</a>
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