import React from 'react'
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme : Theme) => createStyles({
    NominalVatableReceipt: {
        padding: theme.spacing(2)
    },
    NVtitle: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    NVFieldWrapper: {
        padding: "10px 0"
    },
    NVlabel: {
        lineHeight: "30px",
        paddingRight: theme.spacing(2)
    },
    NVformWrapper: {
        paddingTop: theme.spacing(2)
    },
    NVtable: {
        width: "100%"
    },
    buttonWrapper: {
        margin: theme.spacing(0.5)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    wdtset: {
        width: "150px"
    }
}));

const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Document_No',
        width: 120
    }, {
        field: 'Document_Date',
        headerName: 'Document_Date',
        width: 120
    }, {
        field: 'Document_Status',
        headerName: 'Document Status',
        width: 120
    }, {
        field: 'Supplier_Code',
        headerName: 'Supplier_Code',
        type: 'number',
        width: 120
    }, {
        field: 'Supplier_Name',
        headerName: 'Supplier Name',
        width: 120
    }, {
        field: 'Order_Originator',
        headerName: 'Order Originator',
        width: 130
    }, {
        field: 'Order_Created_By',
        headerName: 'Order Created By',
        width: 130
    }, {
        field: 'Currency_Name',
        headerName: 'Currency Name',
        width: 130
    }, {
        field: 'Currency_Symbol',
        headerName: 'Currency Symbol',
        width: 130
    }, {
        field: 'Total_Gross_Value',
        headerName: 'Total Gross Value',
        width: 140
    }, {
        field: 'Analysis_Code_1',
        headerName: 'Analysis Code 1',
        width: 130
    }, {
        field: 'Analysis_Code_2',
        headerName: 'Analysis Code 2',
        width: 130
    }, {
        field: 'Analysis_Code_3',
        headerName: 'Analysis Code 3',
        width: 130
    }, {
        field: 'Analysis_Code_4',
        headerName: 'Analysis Code 4',
        width: 130
    }, {
        field: 'Analysis_Code_5',
        headerName: 'Analysis Code 5',
        width: 130
    }
];

const rows = [
    {
        id: 1,
        Document_Date: 'DD_Data',
        Document_Status: 'DS_Data',
        Supplier_Code: 'SC_Data',
        Supplier_Name: 'SN_Data',
        Order_Originator: 'OO_Data',
        Order_Created_By: 'OCB_Data',
        Currency_Name: 'CN_Data',
        Currency_Symbol: 'CS_Data',
        Total_Gross_Value: 'TGV_Data',
        Analysis_Code_1: 'AC1_Data',
        Analysis_Code_2: 'AC2_Data',
        Analysis_Code_3: 'AC3_Data',
        Analysis_Code_4: 'AC4_Data',
        Analysis_Code_5: 'AC5_Data'
    }
];

const MyUnauthorisedPurchaseOrder = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography
                className={classes.NVtitle}
                style={{
                margin: '10px',
                fontSize: '30px'
            }}>My Purchase Document Authorisation List
            </Typography>
            <div style={{
                marginLeft: '13px'
            }}>
                <a href="" className={classes.NVlabel}>View Details |</a>
                <a href="" className={classes.NVlabel}>Actions |</a>
                <a href="" className={classes.NVlabel}>Export |</a>
                <a href="" className={classes.NVlabel}>Print |</a>
                <a href="" className={classes.NVlabel}>Refresh</a>
            </div>
            <div
                style={{
                height: 400,
                width: '100%'
            }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>
        </div>
    )
}

export default MyUnauthorisedPurchaseOrder
