import React from 'react'
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {DataGrid, ColDef} from '@material-ui/data-grid';
import TextField from "@material-ui/core/TextField";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Code',
        width: 80
    }, {
        field: 'Supplier_Stock_Qty',
        headerName: 'Supplier Stock Quantity',
        width: 160
    }, {
        field: 'Last_Order_price',
        headerName: 'Last Order price',
        width: 130
    }, {
        field: 'Last_Order_Data',
        headerName: 'Last_Order_Data',
        width: 130
    }, {
        field: 'Supplier_List_Price',
        headerName: 'Supplier List Price',
        width: 140
    }, {
        field: 'List_Price_Updted',
        headerName: 'List Price Updted',
        width: 130
    },
    {
        field: 'List_Price_Exin',
        headerName: 'List Price Exin',
        width: 130
    },
    {
        field: 'Price_Source',
        headerName: 'Price Source',
        width: 130
    }
];

const rows = [
    {
        id: 'C_Data',
        Supplier_Stock_Qty: "SOQ_Data",
        Last_Order_price: "LOP_Data",
        Last_Order_Data: 'LOD_Data',
        Supplier_List_Price: 'SLP_Data',
        List_Price_Updted: "LPU_Data",
        List_Price_Exin: "LPE_Data",
        Price_Source:"PS_Data"
    }
];

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

function SupplierStockItems() {
    const classes = useStyles();

    const [selectedDate,
        setSelectedDate] = React.useState < Date | null > (new Date());


    const handleDateChange = (date : Date | null) => {
        setSelectedDate(date);
    };
    return (
        <div>

            <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Supplier Account
                    </Typography>


                <div
                    className="col"
                    style={{
                    width: "40%"
                }}>
                    
                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "47px"
                            }}
                                className={classes.NVlabel}>Code :  &nbsp;&nbsp; &nbsp;&nbsp;
                            </label>
                            <Select
                                className={classes.wdtset}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select">
                                <MenuItem value={1}>
                                    one
                                </MenuItem>

                                <MenuItem value={1}>
                                    two
                                </MenuItem>

                            </Select>
                        </div>
</FormControl>

                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "47px"
                            }}
                                className={classes.NVlabel}>Short Name :  &nbsp;&nbsp; &nbsp;&nbsp;
                            </label>
                            <Select
                                className={classes.wdtset}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select">
                                <MenuItem value={1}>
                                    one
                                </MenuItem>

                                <MenuItem value={1}>
                                    two
                                </MenuItem>

                            </Select>
                        </div>
</FormControl>

                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "47px"
                            }}
                                className={classes.NVlabel}>Postcode : &nbsp;&nbsp;
                            </label>
                            <Select
                                className={classes.wdtset}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select">
                                <MenuItem value={1}>
                                    one
                                </MenuItem>

                                <MenuItem value={1}>
                                    two
                                </MenuItem>

                            </Select>
                        </div>
</FormControl>
                </div>
                        


            <div
                style={{
                maxHeight: 400,
                minHeight: 200,
                width: '100%'
            }}>

                <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Stock Items
                    </Typography>

                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>

            <div
                className=""
                style={{
                paddingBottom: "50px",
                paddingRight: "30px",
                paddingTop:"50px"
            }}>
                
                <div
                className="" style={{paddingTop:"10px"}}
                >
                <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Add
                </Button>

                 <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Edit
                </Button>

                 <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Remove
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
        </div>
    )
}

export default SupplierStockItems
