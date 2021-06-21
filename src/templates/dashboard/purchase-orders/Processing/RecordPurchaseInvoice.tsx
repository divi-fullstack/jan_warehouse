import React from 'react'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';

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
        headerName: 'Order NO',
        width: 130
    }, {
        field: 'Authorisation_Status',
        headerName: 'Authorisation_Status',
        width: 150
    }, {
        field: 'Code',
        headerName: 'Code',
        width: 130
    }, {
        field: 'Name',
        headerName: 'Name',
        width: 130
    }, {
        field: 'Buying_Unit',
        headerName: 'Buying_Unit',
        width: 130
    }, {
        field: 'Qty_To_Be_Involved',
        headerName: 'Qty_To_Be_Involved',
        width: 150
    }, {
        field: 'Discounted_Units',
        headerName: 'Discounted_Units',
        width: 140
    }, {
        field: 'Goods_Value',
        headerName: 'Goods_Value',
        width: 130
    }, {
        field: 'VAT_Value',
        headerName: 'VAT_Value',
        width: 130
    }
];

const rows = [
    {
        id: 'ON_Data',
        Authorisation_Status: "OD_Data",
        Code: "C_Data",
        Name: 'ACN_Data',
        Buying_Unit: 'V_Data',
        Qty_To_Be_Involved: "QTBI_Data",
        Discounted_Units: "DU_Data",
        Goods_Value: "GV_Data",
        VAT_Value: "VV_Data"
    }
];

const columns2 : ColDef[] = [
    {
        field: 'id',
        headerName: 'Supplier GRN',
        width: 130
    }, {
        field: 'Goods_Received_No',
        headerName: 'Goods_Received_No',
        width: 150
    }, {
        field: 'Date',
        headerName: 'Date',
        width: 130
    }, {
        field: 'Qty_Delievered',
        headerName: 'Qty_Delievered',
        width: 130
    }, {
        field: 'Qty_Previously_Invoiced',
        headerName: 'Qty_Previously_Invoiced',
        width: 130
    }, {
        field: 'Qty_To_Be_Invoiced',
        headerName: 'Qty_To_Be_Invoiced',
        width: 150
    }
];

const rows2 = [
    {
        id: 'ON_Data',
        Goods_Received_No: "OD_Data",
        Date: "C_Data",
        Qty_Delievered: 'QTBI_Data',
        Qty_Previously_Invoiced: 'V_Data',
        Qty_To_Be_Invoiced: "QTBI_Data"
    }
];

const RecordPurchaseInvoice = () => {
    const classes = useStyles();

    const [selectedDate,
        setSelectedDate] = React.useState < Date | null > (new Date());

    const handleDateChange = (date : Date | null) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <div
                className="row"
                style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <div className="col">
                    <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Select Supplier Account
                    </Typography>

                    <div className={classes.NVFieldWrapper}>
                        <label
                            style={{
                            paddingRight: "49px"
                        }}
                            className={classes.NVlabel}>Code :
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

                    <div className={classes.NVFieldWrapper}>
                        <label
                            style={{
                            paddingRight: ""
                        }}
                            className={classes.NVlabel}>Short Name :
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

                    <div className={classes.NVFieldWrapper}>
                        <label
                            style={{
                            paddingRight: "30px"
                        }}
                            className={classes.NVlabel}>PostCode :
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

                </div>
                <div className="col">
                    <Typography
                        className={classes.NVtitle}
                        style={{
                        marginTop: '10px'
                    }}>Invoice Details
                    </Typography>
                    <div className={classes.NVFieldWrapper}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <label
                                style={{
                                lineHeight: "55px",
                                paddingRight: "26px"
                            }}>
                                Invoice Date :
                            </label>
                            <KeyboardDatePicker
                                style={{
                                maxWidth: '150px'
                            }}
                                margin="normal"
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}/>
                        </MuiPickersUtilsProvider>

                        <div className={classes.NVFieldWrapper}>
                            <label
                                className={classes.NVlabel}
                                style={{
                                paddingRight: ""
                            }}>Exchange Rate :
                            </label>
                            <TextField
                                style={{
                                width: "150px"
                            }}
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"/>
                        </div>

                        <div className={classes.NVFieldWrapper}>
                            <label
                                className={classes.NVlabel}
                                style={{
                                paddingRight: "43px"
                            }}>Reference :
                            </label>
                            <TextField
                                style={{
                                width: "150px"
                            }}
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"/>
                            <Button size="small" variant="contained" className={classes.buttonWrapper}>
                                Check
                            </Button>
                        </div>

                    </div>
                </div>
                <div
                    className="col"
                    style={{
                    paddingTop: "44px"
                }}>
                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: ""
                        }}>Goods Value :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                    </div>

                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: "35px"
                        }}>Vat Value :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                    </div>

                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: "19px"
                        }}>Invoice Total :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                    </div>
                </div>
            </div>

            <Typography
                className={classes.NVtitle}
                style={{
                margin: '10px'
            }}>Select Order Items To Match Invoice
            </Typography>

            <div
                style={{
                maxHeight: 400,
                minHeight: 200,
                width: '100%'
            }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>

            <div
                className=""
                style={{
                display: "flex",
                float: "left"
            }}>
                <Button size="small" variant="contained" className={classes.buttonWrapper}>
                    Find
                </Button>

                <Button size="small" variant="contained" className={classes.buttonWrapper}>
                    View Order
                </Button>
            </div>

            <Typography
                style={{
                padding: "10px",
                paddingTop: "40px"
            }}
                className={classes.NVtitle}>GRNS For Order Items
            </Typography>

            <div
                style={{
                maxHeight: 400,
                minHeight: 200,
                width: '100%'
            }}>
                <DataGrid rows={rows2} columns={columns2} pageSize={5} checkboxSelection/>
            </div>

            <div className="" style={{padding:"25px"}}>
                <Button size="small" variant="contained" className={classes.buttonWrapper}>
                    Post Invoice
                </Button>

                <Button size="small" variant="contained" className={classes.buttonWrapper}>
                    Clear
                </Button>

                <Button
                    size="small"
                    variant="contained"
                    style={{
                    float: "right"
                }}
                    className={classes.buttonWrapper}>
                    Close
                </Button>

            </div>
        </div>
    )
}

export default RecordPurchaseInvoice
