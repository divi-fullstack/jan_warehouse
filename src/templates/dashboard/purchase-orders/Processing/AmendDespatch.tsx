import React from 'react'
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {DataGrid, ColDef} from '@material-ui/data-grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';

const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Supplier GRN',
        width: 130
    }, {
        field: 'GRN_No',
        headerName: 'GRN_No',
        width: 130
    }, {
        field: 'Order_No',
        headerName: 'Order_No',
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
        field: 'Qty_Received',
        headerName: 'Qty_Received',
        width: 130
    }
];

const rows = [
    {
        id: 'I_Data',
        GRN_No: "D_Data",
        Order_No: "Q_Data",
        Stock_Code: 'DP_Data',
        Warehouse: "VR_Data",
        Bin: "NV_Data",
        Qty_Received: "QR_Data"
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

function AmendDespatch() {
    const classes = useStyles();
    const [selectedValue,
        setSelectedValue] = React.useState('');

    const handleChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setSelectedValue(event.target.value);
    };

    const specdata = () => {
        if (selectedValue === 'Single_Order') {
            return (
                <div className="">
                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label className={classes.NVlabel}>Order No :
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
                    <Button
                        style={{
                        marginTop: "35px"
                    }}
                        size="small"
                        variant="contained"
                        className={classes.buttonWrapper}>
                        Find
                    </Button>
                </div>

            )
        } else if (selectedValue === 'Single_Deliverity_Note_Supplier') {
            return (
                <div className="">
                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label className={classes.NVlabel}>Supplier Ref :
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

            )
        } else if (selectedValue === 'Single_Deliverity_Note_Internal') {
            return (
                <div className="">
                    <FormControl className={classes.formControl}>
                        <div className={classes.NVFieldWrapper}>
                            <label className={classes.NVlabel}>Internal Ref :
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

            )
        }
    }
    return (
        <div>

            <Typography
                className={classes.NVtitle}
                style={{
                margin: '10px'
            }}>Select Items To Ammend
            </Typography>
            <div className="" style={{
                display: "flex"
            }}>
                <div
                    className=""
                    style={{
                    paddingLeft: "25px",
                    paddingBottom: "10px",
                    width: "50%"
                }}>
                    <div>
                        <label
                            style={{
                            paddingRight: "0px",
                            lineHeight: 3
                        }}
                            className={classes.NVlabel}>Single Order :
                        </label>
                        <Radio
                            checked={selectedValue === 'Single_Order'}
                            onChange={handleChange}
                            value="Single_Order"
                            name="radio-button-demo"
                            inputProps={{
                            'aria-label': 'Single_Order'
                        }}/>
                    </div>

                    <div>
                        <label
                            style={{
                            paddingRight: "0px",
                            lineHeight: 3
                        }}
                            className={classes.NVlabel}>Single Deliverity Note(Supplier Ref) :
                        </label>
                        <Radio
                            checked={selectedValue === 'Single_Deliverity_Note_Supplier'}
                            onChange={handleChange}
                            value="Single_Deliverity_Note_Supplier"
                            name="radio-button-demo"
                            inputProps={{
                            'aria-label': 'Single_Deliverity_Note_Supplier'
                        }}/>
                    </div>

                    <div>
                        <label
                            style={{
                            paddingRight: "0px",
                            lineHeight: 3
                        }}
                            className={classes.NVlabel}>Single Deliverity Note(Internal Ref) :
                        </label>
                        <Radio
                            checked={selectedValue === 'Single_Deliverity_Note_Internal'}
                            onChange={handleChange}
                            value="Single_Deliverity_Note_Internal"
                            name="radio-button-demo"
                            inputProps={{
                            'aria-label': 'Single_Deliverity_Note_Internal'
                        }}/>
                    </div>

                    <div>
                        <label
                            style={{
                            paddingRight: "0px",
                            lineHeight: 3
                        }}
                            className={classes.NVlabel}>Single Supplier :
                        </label>

                        <Radio
                            checked={selectedValue === 'Single_Supplier'}
                            onChange={handleChange}
                            value="Single_Supplier"
                            name="radio-button-demo"
                            inputProps={{
                            'aria-label': 'Any'
                        }}/>
                    </div>

                </div>
                <div
                    className=""
                    style={{
                    paddingLeft: "25px",
                    paddingBottom: "10px",
                    width: "50%"
                }}>
                    {specdata()}
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
                justifyContent: "space-around"
            }}>

                <div className="col">
                    <div className={classes.NVFieldWrapper}>
                        <label className={classes.NVlabel}>
                            Description :
                        </label>
                        <TextField id="outlined-size-small" variant="outlined" size="small"/>
                    </div>
                </div>
                <div className="col">
                    <div className={classes.NVFieldWrapper}>
                        <label className={classes.NVlabel}>
                            Buying Unit :
                        </label>
                        <TextField id="outlined-size-small" variant="outlined" size="small"/>
                    </div>

                </div>

                <div className="col">
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        View Order
                    </Button>
                </div>
            </div>

            <div
                className=""
                style={{
                paddingBottom: "50px",
                paddingRight: "30px"
            }}>

                <Button variant="contained" className={classes.buttonWrapper}>
                    Save
                </Button>
                <Button variant="contained" color="primary" className={classes.buttonWrapper}>
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

export default AmendDespatch
