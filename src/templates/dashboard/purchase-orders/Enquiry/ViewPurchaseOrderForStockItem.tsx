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
        headerName: 'Order/Return',
        width: 130
    },
    {
        field: 'Type',
        headerName: 'Type',
        width: 130
    }, {
        field: 'Order_Data',
        headerName: 'Order Data',
        width: 130
    }, {
        field: 'Order_Status',
        headerName: 'Order Status',
        width: 130
    }, {
        field: 'Auth',
        headerName: 'Auth',
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
        Type: 'Type',
        Order_Data: "O_Data",
        Order_Status: "OS_Data",
        Auth: 'A_Data',
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

function ViewPurchaseOrderForStockItem() {
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
                    width: "50%"
                }}>
                    
                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: ""
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
</FormControl>

                    

                    
                </div>
                <div
                    className="col"
                    style={{
                    width: "50%"}}>
                    
                    <FormControl >
                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: ""
                            }}
                                className={classes.NVlabel}>Name : 
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
                    }}>All Orders And Returns
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
                        View
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

export default ViewPurchaseOrderForStockItem
