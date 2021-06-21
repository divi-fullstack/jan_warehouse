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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Order_No',
        width: 130
    }, {
        field: 'Order_Date',
        headerName: 'Order_Data',
        width: 130
    }, {
        field: 'Code',
        headerName: 'Code',
        width: 130
    }, {
        field: 'Name',
        headerName: 'Name',
        width: 130
    }, {
        field: 'Supplier_Ref_No',
        headerName: 'Supplier_Ref_No',
        width: 130
    },
    {
        field: 'Order_Placed',
        headerName: 'Order Placed',
        width: 130
    },
    {
        field: 'Order_Origination',
        headerName: 'Order_Origination',
        width: 140
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
        Order_Date: "OD_Data",
        Code: "C_Data",
        Name: 'N_Data',
        Supplier_Ref_No: "SRN_Data",
        Order_Placed: "OP_Data",
        Order_Origination:"OO_Data",
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

function AuthoriseOrders() {
    const classes = useStyles();

    const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                    }}>Select Orders To Authorise
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
                paddingBottom: "50px",
                paddingLeft: "20px",
                paddingTop:"10px",
                paddingRight:"30px"
            }}>

                <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Include Super Authoriser orders"
      />

      <div style={{display:"flex",float:"right"}}>
                        <label style={{paddingRight:"10px",lineHeight:"2.5"}}>
                            Total To Authorise :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                    </div>
                <div
                className="" style={{paddingTop:"10px"}}
                >
                <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Authorise
                </Button>

                 <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    View Order
                </Button>

                 <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Find
                </Button>

                <Button size="small"
                    variant="contained"
                           className={classes.buttonWrapper}>
                    Query
                </Button>
            </div>


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

export default AuthoriseOrders
