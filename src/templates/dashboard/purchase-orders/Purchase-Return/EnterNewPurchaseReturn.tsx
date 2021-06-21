import React from 'react'
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';
import TextField from "@material-ui/core/TextField";
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Item',
        width: 130
    }, {
        field: 'Description',
        headerName: 'Description',
        width: 130
    }, {
        field: 'Quantity',
        headerName: 'Quantity',
        width: 130
    }, {
        field: 'Unit_Price',
        headerName: 'Unit_Price',
        width: 130
    }, {
        field: 'Disc_per',
        headerName: 'Disc. %',
        width: 130
    }, {
        field: 'Vat_Rate',
        headerName: 'Vat Rate',
        width: 130
    }, {
        field: 'Net_Value',
        headerName: 'Net Value',
        width: 130
    }
];

const rows = [
    {
        id: 'I_Data',
        Description: "D_Data",
        Quantity: "Q_Data",
        Unit_Price: 'UP_Data',
        Disc_per: 'DP_Data',
        Vat_Rate: "VR_Data",
        Net_Value: "NV_Data"
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

function EnterNewPurchaseReturn() {
    const classes = useStyles();

    const [selectedDate,
        setSelectedDate] = React.useState < Date | null > (new Date());

    const [value,
        setValue] = React.useState(0);

    const handleDateChange = (date : Date | null) => {
        setSelectedDate(date);
    };
    return (
        <div>

            <div className="row" style={{
                display: 'flex'
            }}>
                <div
                    className="col"
                    style={{
                    padding: "20px",
                    width: "50%"
                }}>
                    <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Account Selection
                    </Typography>
                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "54px"
                            }}
                                className={classes.NVlabel}>Code : * &nbsp;&nbsp; &nbsp;&nbsp;
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
                                paddingRight: "22px"
                            }}
                                className={classes.NVlabel}>Short Name :&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
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
                                paddingRight: "41px"
                            }}
                                className={classes.NVlabel}>Post Code : &nbsp;&nbsp; &nbsp;&nbsp;
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
                                className={classes.NVlabel}
                                style={{
                                paddingRight: "85px"
                            }}>Name :
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
                            <label style={{scrollPaddingRight:"0px"}} className={classes.NVlabel}>By Default Supply From :
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
                    className="col"
                    style={{
                    padding: "20px",
                    width: "50%"
                }}>
                    <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Return Details
                    </Typography>

                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: "75px"
                        }}>Return No :
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
                            paddingRight: "60px"
                        }}>Return Status :
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
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <label
                                style={{
                                lineHeight: "55px",
                                paddingRight: "41px"
                            }}>
                                Document Date : &nbsp;
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

                    </div>

                    <div className={classes.NVFieldWrapper}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <label
                                style={{
                                lineHeight: "55px",
                                paddingRight: "26px"
                            }}>
                                Despatch Date : &nbsp;
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

                    </div>

                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: ""
                        }}>Supplier Reference No :
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

            <div
                style={{
                maxHeight: 400,
                minHeight: 200,
                width: '100%'
            }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>

            <div
                className="row"
                style={{
                display: 'flex',
                padding: "25px"
            }}>
                <div
                    className="col"
                    style={{
                    width: "40%"
                }}>
                    <Button size="small" variant="contained" className={classes.buttonWrapper}>
                        Add Items
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        Edit Items
                    </Button>
                    <Button size="small" variant="contained" className={classes.buttonWrapper}>
                        Delete Items
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        Move Up
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        Move Down
                    </Button>

                    <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Exchange Rate
                    </Typography>

                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: "38px"
                        }}>
                            Rate :
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
                        <label className={classes.NVlabel}>
                            Currency :
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
                <div
                    className="col"
                    style={{
                    width: "30%"
                }}>
                    <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Subtotals
                    </Typography>
                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: "37px"
                        }}>
                            Goods :
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
                            style={{
                            paddingRight: "30px"
                        }}
                            className={classes.NVlabel}>
                            Charges :
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
                        <label className={classes.NVlabel}>
                            Order Disc. :
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
                            style={{
                            paddingRight: "32px"
                        }}
                            className={classes.NVlabel}>
                            Lnd Csts :
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
                <div
                    className="col"
                    style={{
                    width: "30%"
                }}>
                    <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Totals
                    </Typography>
                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: ""
                        }}>
                            Net :
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
                        <label className={classes.NVlabel}>
                            VAT :
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
                            paddingRight: "8px"
                        }}>
                            Gross :
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

            <div className="">
                <div
                    className="col"
                    style={{
                    width: "40%",
                    paddingBottom: "30px",
                    paddingLeft: "25px"
                }}>
                    <Button variant="contained" className={classes.buttonWrapper}>
                        Save
                    </Button>
                    <Button variant="contained" color="primary" className={classes.buttonWrapper}>
                        Copy
                    </Button>
                    <Button variant="contained" className={classes.buttonWrapper}>
                        Copy Order
                    </Button>
                </div>

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
    )
}

export default EnterNewPurchaseReturn
