import React from 'react'
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
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
        headerName: 'Return No',
        width: 130
    }, {
        field: 'Return_Data',
        headerName: 'Return Data',
        width: 130
    }, {
        field: 'Return_Status',
        headerName: 'Return Status',
        width: 130
    }, {
        field: 'Code',
        headerName: 'Code',
        width: 130
    }, {
        field: 'Supplier_Name',
        headerName: 'Supplier_Name',
        width: 130
    },
    {
        field: 'Supplier_Ref_No',
        headerName: 'Supplier_Ref_No',
        width: 130
    },
    {
        field: 'Value',
        headerName: 'Value',
        width: 130
    }
];

const rows = [
    {
        id: 'ON_Data',
        Return_Data: "O_Data",
        Return_Status: "OS_Data",
        Code: 'DP_Data',
        Supplier_Name: "VR_Data",
        Supplier_Ref_No: "NV_Data",
        Value:"V_Data"
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

function AmmendReturn() {
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

            <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Selection Criteria
                    </Typography>


            <div
                className="row"
                style={{
                display: 'flex'
            }}>
                <div
                    className="col"
                    style={{
                    width: "40%",
                    paddingLeft:"15px"
                }}>
                    
                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "47px"
                            }}
                                className={classes.NVlabel}>Return No :  &nbsp;&nbsp; &nbsp;&nbsp;
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

                    <div className={classes.NVFieldWrapper}>
                        <label className={classes.NVlabel}>
                            Supplier Refrence No :
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
                                lineHeight: "55px"
                            }}>
                                Return Document Date : &nbsp;
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
                </div>
                <div
                    className="col"
                    style={{
                    width: "30%",
                    paddingTop:"33px"
                }}>
                    <div className={classes.NVFieldWrapper}>
                        <label
                            className={classes.NVlabel}
                            style={{
                            paddingRight: "2px"
                        }}>
                            Credit No :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                    </div>

                    <FormControl >
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "0px"
                            }}
                                className={classes.NVlabel}>GRN No : &nbsp;&nbsp; &nbsp;&nbsp;
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


                    <Button style={{marginLeft:"90px"}} variant="contained" className={classes.buttonWrapper}>
                        Show All Returns 
                    </Button>

                    
                </div>
                <div
                    className="col"
                    style={{
                    width: "30%",
                    
                }}>
                    <FormControl >
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "34px"
                            }}
                                className={classes.NVlabel}>Code : &nbsp;&nbsp; &nbsp;&nbsp;
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

                    <FormControl >
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "0px"
                            }}
                                className={classes.NVlabel}>Short Name : &nbsp;&nbsp; &nbsp;&nbsp;
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
                        
                        <FormControl >
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "16px"
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
                        </FormControl>
                </div>
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
                    }}>All Returns
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
                
                <Button variant="contained" className={classes.buttonWrapper}>
                        Ammend Return
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

export default AmmendReturn
