import * as React from 'react';
import {DataGrid, ColDef} from '@material-ui/data-grid';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


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
        headerName: 'Code',
        width: 100
    }, {
        field: 'Name',
        headerName: 'Name',
        width: 100
    }, {
        field: 'Stock_Unit',
        headerName: 'Stock Unit',
        width: 130
    }, {
        field: 'Qty_Required',
        headerName: 'Qty Required',
        width: 130
    }, {
        field: 'Confirmed_Qty_To_Purchase',
        headerName: 'Confirmed Qty To Purchase',
        width: 180,
    },{
        field: 'Confirmed_Value',
        headerName: 'Confirmed Value',
        width: 130,
    },{
        field: 'Confirmed_Status',
        headerName: 'Confirmed Status',
        width: 150,
    }
];

const rows = [
    {
        id: "C_Data",
        Name: 'N_Data',
        Stock_Unit: 'SU_Data',
        Qty_Required: "QR_Required",
        Confirmed_Qty_To_Purchase:"CQPT_Data",
        Confirmed_Value:"CV_Data",
        Confirmed_Status:"CS_Data"
    }
];

export default function GenerateOrders() {
        const classes = useStyles();

    return (
        <div className="">
        <div style={{
            minHeight: 200,
            maxHeight:400,
            width: '100%'
        }}>
            <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Stocks Items Requiring Re-C
                    </Typography>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>
            <div
                className=""
                style={{
                paddingBottom: "0px",
                paddingRight: "30px"
            }}>
                <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    View Details
                </Button>

                 <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Add Item
                </Button>

                 <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Delete Items
                </Button>
            </div>

            <div
                className="" style={{paddingTop:"10px"}}
                >
                <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Generate Order
                </Button>

                 <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Print
                </Button>

                 <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Update Order List
                </Button>
            </div>

            <div
                className=""
                style={{
                paddingBottom: "50px",
                paddingRight: "30px"
            }}>
                <Button
                    variant="contained"
                    style={{
                    float: "right"
                }}
                    className={classes.buttonWrapper}>
                    Close
                </Button>
            </div>
        </div>
    );
}
