import * as React from 'react';
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme : Theme) => createStyles({
    NVtitle: {
        fontSize: "30px",
        fontWeight: "bold"
    },
    NVlabel: {
        lineHeight: "",
        paddingRight: theme.spacing(1),
        fontSize: '14px',
        display:'block',
        fontStyle:'bold',
        paddingTop:"5px"
    },NVA: {
        lineHeight: "",
        paddingRight: theme.spacing(1),
        fontSize: '12px',
        fontStyle:'none',
        color:'#008000'

    },formControl: {
      margin: theme.spacing(1), 
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Invoice/Credit Number',
        width: 160
    }, {
        field: 'InvoiceCredit_Type',
        headerName: 'Invoice/Credit_Type',
        width: 160
    }, {
        field: 'InvoiceCredit_Date',
        headerName: 'Invoice/Credit_Date',
        width: 160
    }, {
        field: 'OrderReturn_Number',
        headerName: 'Order/Return_Number',
        width: 160
    }, {
        field: 'Supplier_Code',
        headerName: 'Supplier_Code',
        width: 90
    }, {
        field: 'Item_Code',
        headerName: 'Item_Code',
        width: 90
    }, {
        field: 'Quantity',
        headerName: 'Quantity',
        width: 100
    }, {
        field: 'Line_Total_Value',
        headerName: 'Line_Total_Value',
        width: 160
    }
];

const rows = [
    {
        id: 'ON_Data',
        InvoiceCredit_Type: 'M_Data',
        InvoiceCredit_Date: 'SB_Data',
        OrderReturn_Number:'ORN_Data',
        Supplier_Code:'SC_Data',
        Item_Code: '03/10/2000',
        Quantity: 'DD_Data',
        Line_Total_Value: 'OT_Data',
    }
];

export const PurchaseInvoiceAndCredit = () =>
{
        const classes = useStyles();

    return(
        <div className="">
            <Typography
                style={{
                marginLeft: '11px'
            }}
                className={classes.NVtitle}>Purchase Document Lines
            </Typography>
            <div style={{
                marginLeft: '13px'
            }}>
                <a href="" className={classes.NVA}>Action |</a>
                <a href="" className={classes.NVA}>Export |</a>
                <a href="" className={classes.NVA}>Print |</a>
                <a href="" className={classes.NVA}>Refresh
                </a>
            </div>
            <br/>

            <div
                style={{
                minHeight: 200,
                maxHeight: 400,
                width: '100%'
            }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>
</div>
    )
}

