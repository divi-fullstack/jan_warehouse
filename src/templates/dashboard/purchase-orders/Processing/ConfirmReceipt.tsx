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
import Radio from '@material-ui/core/Radio';


const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Order No',
        width: 130
    }, {
        field: 'Order_Date',
        headerName: 'Order_Date',
        width: 130
    }, {
        field: 'Status',
        headerName: 'Status',
        width: 130
    }, {
        field: 'Auth',
        headerName: 'Auth',
        width: 130
    }, {
        field: 'Stock_Code',
        headerName: 'Stock Code',
        width: 130
    }, {
        field: 'Warehouse',
        headerName: 'Vat Rate',
        width: 130
    }, {
        field: 'Bin',
        headerName: 'Bin',
        width: 130
    }, {
        field: 'Qty_Outstand',
        headerName: 'Qty_Outstand',
        width: 130
    }, {
        field: 'Qty_Received',
        headerName: 'Qty_Received',
        width: 130
    }
];

const rows = [
    {
        id: 'I_Data',
        Order_Date: "D_Data",
        Status: "Q_Data",
        Auth: 'UP_Data',
        Stock_Code: 'DP_Data',
        Warehouse: "VR_Data",
        Bin: "NV_Data",
        Qty_Outstand:"QO_Data",
        Qty_Received:"QR_Data"
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

function ConfirmReceipt() {
    const classes = useStyles();

    const [selectedDate,
        setSelectedDate] = React.useState < Date | null > (new Date());


    const handleDateChange = (date : Date | null) => {
        setSelectedDate(date);
    };


    const [selectedValue,
        setSelectedValue] = React.useState('');

    const handleChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setSelectedValue(event.target.value);
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
                        marginTop: '10px'
                    }}>Supplier Goods Receive Note Details
                    </Typography>

                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: ""
                        }}>Reference No :
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
                                paddingRight: "57px"
                            }}>
                                Date : &nbsp;
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
                            paddingRight: "42px"
                        }}>Narrative :
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
                    }}>Receiving Warehouse
                    </Typography>
                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "54px"
                            }}
                                className={classes.NVlabel}>Warehouse : &nbsp;&nbsp; &nbsp;&nbsp;
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
                        marginTop: '10px'
                    }}>Stock Code
                    </Typography>

                    <div className="" style={{
                display: 'flex',
                justifyContent:'space-around'
            }}>
                <span>
                <label
                    style={{
                    paddingRight: "0px",
                    lineHeight: 3
                }}
                    className={classes.NVlabel}>Show Stock Code :
                </label>
                <Radio
                    checked={selectedValue === 'Unprinted'}
                    onChange={handleChange}
                    value="Unprinted"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'Unprinted'
                }}/>
                </span>

                <span>
                <label
                    style={{
                    paddingRight: "0px",
                    lineHeight: 3
                }}
                    className={classes.NVlabel}>Show Supplier Stock Code :
                </label>
                <Radio
                    checked={selectedValue === 'Printed'}
                    onChange={handleChange}
                    value="Printed"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'Printed'
                }}/>
                </span>


                
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
                    className=""
                    style={{float:"right"}}>
                    
                    <Button size="small" variant="contained" className={classes.buttonWrapper}>
                        Select All
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        Reset
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        Receive Select
                    </Button>
                    </div>

                                    <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Order Line Details
                    </Typography>

            <div
                className="row"
                style={{
                display: 'flex',
                padding: "25px",
                justifyContent:"space-around"
            }}>


                <div
                    className="col">
                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            >
                            Description :
                        </label>
                        <TextField
                            
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                    </div>
                </div>
                <div
                    className="col">
                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            >
                            Buying Unit :
                        </label>
                        <TextField
                            
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                    </div>



                    
                </div>

                <div
                    className="col">
                                                                <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        View Order
                    </Button>
                    </div>
                </div>

                                <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Options
                    </Typography>

            <div className="" style={{
                display: 'flex',
                justifyContent:'space-around'
            }}>
                <span>
                <label
                    style={{
                    paddingRight: "0px",
                    lineHeight: 3
                }}
                    className={classes.NVlabel}>Allocate :
                </label>
                <Radio
                    checked={selectedValue === 'Unprinted'}
                    onChange={handleChange}
                    value="Unprinted"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'Unprinted'
                }}/>
                </span>

                <span>
                <label
                    style={{
                    paddingRight: "0px",
                    lineHeight: 3
                }}
                    className={classes.NVlabel}>Attach Document :
                </label>
                <Radio
                    checked={selectedValue === 'Printed'}
                    onChange={handleChange}
                    value="Printed"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'Printed'
                }}/>
                </span>

                 <span>
                <label
                    style={{
                    paddingRight: "0px",
                    lineHeight: 3
                }}
                    className={classes.NVlabel}>Record Invoice :
                </label>
                <Radio
                    checked={selectedValue === 'Printed'}
                    onChange={handleChange}
                    value="Printed"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'Printed'
                }}/>
                </span>


                
            </div>

            <div
                    className=""
                    style={{
                        paddingBottom: "50px",
                paddingRight: "30px"
                    }}
                    >
                    
                    <Button variant="contained" className={classes.buttonWrapper}>
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        Find
                    </Button>

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

export default ConfirmReceipt
