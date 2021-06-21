import React from 'react'
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';
import TextField from "@material-ui/core/TextField";
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'From',
        width: 300
    }, {
        field: 'Subject',
        headerName: 'Subject',
        width: 300
    }, {
        field: 'Date',
        headerName: 'Date',
        width: 300
    },
];

const rows = [
    {
        id: 'F_Data',
        Subject: "S_Data",
        Date: "D_Data",
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

function AmendPurchaseOrderNotification() {
    const classes = useStyles();

    const [state, setState] = React.useState({
    checkedB: true,
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
                    }}>POP Order Details
                    </Typography>

                    <div style={{display:"flex",marginBottom:"15px",justifyContent:"space-around"}}>
                        <span>
                            <label style={{paddingRight:"10px",lineHeight:"2.5"}}>
                            Order No :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                        </span>

                        <span>
                            <label style={{paddingRight:"10px",lineHeight:"2.5"}}>
                            Value :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                        </span>

                        <span>
                            <label style={{paddingRight:"10px",lineHeight:"2.5"}}>
                            Authorisation Status :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                        </span>
                        
                    </div>

            <div
                style={{
                    
                maxHeight: 400,
                minHeight: 200,
                width: '100%',
                margin:"5px"
            }}>

                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>

            <Typography
                        className={classes.NVtitle}
                        style={{
                        margin: '10px'
                    }}>Details
                    </Typography>

                    <div style={{display:"flex",marginBottom:"15px",justifyContent:"space-around"}}>
                        <span>
                            <label style={{paddingRight:"10px",lineHeight:"2.5"}}>
                            From :
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
                        </span>

                        <span>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <label
                                style={{
                                lineHeight: "55px"
                            }}>
                                Due Date : &nbsp;
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
                        </span>
                        
                    </div>

                    <div style={{display:"flex",marginBottom:"15px",paddingLeft:"151px"}}>
                        <span>
                            <label style={{paddingRight:"10px",lineHeight:"2.5"}}>
                            Order No :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                        </span>
                        
                    </div>

                    <div style={{display:"flex",marginBottom:"15px",justifyContent:"space-around"}}>
                        <span>
                            <label style={{paddingRight:"10px",lineHeight:"2.5"}}>
                            Order No :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                        </span>

                        <span>
                            <label style={{paddingRight:"10px",lineHeight:"2.5"}}>
                            Value :
                        </label>
                        <TextField
                            style={{
                            width: "150px"
                        }}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"/>
                        </span>
                        
                    </div>

                    <Button
                    variant="contained"
                    style={{
                    float: "left",
                    marginLeft:"20px"
                }}
                    className={classes.buttonWrapper}>
                    New Notification
                </Button>
                    
                    <Button
                    variant="contained"
                    style={{
                    float: "right",
                    marginRight:"20px"
                }}
                    className={classes.buttonWrapper}>
                    Close
                </Button>
                    </div>
    )
}

export default AmendPurchaseOrderNotification
