import React from 'react'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import Typography from "@material-ui/core/Typography";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';


const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Return No',
        width: 195
    }, {
        field: 'Return_Date',
        headerName: 'Return_Date',
        width: 195
    }, {
        field: 'Code',
        headerName: 'Code',
        width: 195
    }, {
        field: 'AC_Name',
        headerName: 'A/C_Name',
        width: 195
    }, {
        field: 'Value',
        headerName: 'Value',
        width: 195
    }, 
];

const rows = [
    {
        id: 'ON_Data',
        Return_Date: "OD_Data",
        Code: "C_Data",
        AC_Name: 'ACN_Data',
        Value: 'V_Data',
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

function PrintReturns() {
    const classes = useStyles();

    const [selectedValue,
        setSelectedValue] = React.useState('');

    const handleChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setSelectedValue(event.target.value);
    };

    const [selected_Value,
        setSelected_Value] = React.useState('');

    const handle_Change = (event : React.ChangeEvent < HTMLInputElement >) => {
        setSelected_Value(event.target.value);
    };
    
    const extradta = () =>
    {
        if(selected_Value === 'All_Orders_for_a_supplier')
        {
            return(
                <>
                <FormControl className={classes.formControl}>

                    <div className={classes.NVFieldWrapper}>
                            <label style={{paddingRight:"83px"}} className={classes.NVlabel}>Code :
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
                                className={classes.NVlabel}>Post Code :&nbsp;&nbsp; &nbsp;&nbsp;
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
                </>
            )
        }

        else if(selected_Value === 'Single_Order')
        {
            return(
                <>
                <FormControl className={classes.formControl}>

                        <div className={classes.NVFieldWrapper}>
                            <label
                                style={{
                                paddingRight: "41px"
                            }}
                                className={classes.NVlabel}>Return No : &nbsp;&nbsp; &nbsp;&nbsp;
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
                                        <Button style={{marginTop:"37px"}} size="small" variant="contained" className={classes.buttonWrapper}>
                        Find
                    </Button>
                </>
            )
        }
    }

    return (
        <div>
            <Typography
                className={classes.NVtitle}
                style={{
                margin: '10px'
            }}>Select Return Print Status
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
                    className={classes.NVlabel}>UnPrinted :
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
                    className={classes.NVlabel}>Printed :
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
                    className={classes.NVlabel}>Amended Since Printed :
                </label>
                <Radio
                    checked={selectedValue === 'Amended_Since_Printed'}
                    onChange={handleChange}
                    value="Amended_Since_Printed"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'Amended_Since_Printed'
                }}/>
                </span>


                <span>
                <label
                    style={{
                    paddingRight: "0px",
                    lineHeight: 3
                }}
                    className={classes.NVlabel}>Any :
                </label>

                <Radio
                    checked={selectedValue === 'Any'}
                    onChange={handleChange}
                    value="Any"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'Any'
                }}/>
                </span>

            </div>

            <Typography
                className={classes.NVtitle}
                style={{
                margin: '10px'
            }}>Select Returns
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
                    className={classes.NVlabel}>All Returns :
                </label>
                <Radio
                    checked={selected_Value === 'All_Orders'}
                    onChange={handle_Change}
                    value="All_Orders"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'All_Orders'
                }}/>
                </span>

                <span>
                <label
                    style={{
                    paddingRight: "0px",
                    lineHeight: 3
                }}
                    className={classes.NVlabel}>All Returns for a supplier :
                </label>
                <Radio
                    checked={selected_Value === 'All_Orders_for_a_supplier'}
                    onChange={handle_Change}
                    value="All_Orders_for_a_supplier"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'All_Orders_for_a_supplier'
                }}/>
                </span>


                <span>
                <label
                    style={{
                    paddingRight: "0px",
                    lineHeight: 3
                }}
                    className={classes.NVlabel}>Single Return :
                </label>
                <Radio
                    checked={selected_Value === 'Single_Order'}
                    onChange={handle_Change}
                    value="Single_Order"
                    name="radio-button-demo"
                    inputProps={{
                    'aria-label': 'Single_Order'
                }}/>
                </span>

                <Button
                size="small"
                    variant="contained"
                    style={{
                    float: "right"
                }}
                    className={classes.buttonWrapper}>
                    Display
                </Button>

            </div>
            {extradta()}

            <div
                style={{
                maxHeight: 400,
                minHeight: 200,
                width: '100%'
            }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>
            <div
                    className="col"
                    style={{
                    width: "40%"
                }}>
                    <Button size="small" variant="contained" className={classes.buttonWrapper}>
                        Print
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        Print All
                    </Button>
                    <Button size="small" variant="contained" className={classes.buttonWrapper}>
                        Select All
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.buttonWrapper}>
                        Deselect All
                    </Button>
                    </div>
                    <div
                className=""
                style={{
                paddingBottom: "50px",
                paddingRight: "30px",
                marginTop:"0px"
            }}>
                <Button
                size="small"
                    variant="contained"
                    style={{
                    float: "right",
                    marginTop:'0px'
                }}
                    className={classes.buttonWrapper}>
                    Close
                </Button>
            </div>
        </div>
    )
}

export default PrintReturns
