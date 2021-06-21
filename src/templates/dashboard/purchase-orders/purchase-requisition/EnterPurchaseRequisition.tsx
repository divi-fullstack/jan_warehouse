import React from 'react'
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';





interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}


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
        margin: theme.spacing(3)
    }
}));

function createData(Item: string, Supplier: string, Nominal_AC: string, Warehouse: string, Deliver_By: string,quantity:number,Net_Unit_price:number,Sub_total:number,Remove:string) {
  return { Item, Supplier, Nominal_AC, Warehouse, Deliver_By ,quantity,Net_Unit_price,Sub_total,Remove};
}

const rows = [
  createData('Frozen', 'yoghurt','acc','ware','deliver', 159, 6.0, 24, 'remove'),
];

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function EnterPurchaseRequisition() {


    const [selectedDate,
        setSelectedDate] = React.useState < Date | null > (new Date());

          const [value, setValue] = React.useState(0);


    const handleDateChange = (date : Date | null) => {
        setSelectedDate(date);
    };

const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.NVtitle} style={{margin:'10px'}}>Enter Purchase Requisition
            </Typography>
            <div className="row" style={{
                display: 'flex'
            }}>
                
                <div
                    className="col"
                    style={{
                    maxWidth: '35%',
                    border: '2px solid #c2c2c2',
                    padding: '20px',
                    margin:'20px'
                }}>
                    <Typography className={classes.NVtitle}>Add Line</Typography>
                    <div className={classes.NVFieldWrapper}>
                        <label className={classes.NVlabel}>Item : * &nbsp;&nbsp; &nbsp;&nbsp;
                        </label>
                        <TextField id="outlined-size-small" variant="outlined" size="small"/>
                    </div>

                    <div className={classes.NVFieldWrapper}>
                        <label className={classes.NVlabel}>Quantity : *</label>
                        <TextField id="outlined-size-small" variant="outlined" size="small"/>
                    </div>

                    <div className={classes.NVFieldWrapper}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <label
                                style={{
                                lineHeight: "55px"
                            }}>
                                Date Acquired : &nbsp;
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
                        <br/>
                        <label className={classes.NVlabel}>Supplier : &nbsp;&nbsp;</label>
                        <TextField id="outlined-size-small" variant="outlined" size="small"/>
                    </div>

                    <div className={classes.NVFieldWrapper}>
                        <label className={classes.NVlabel}>Nominal Account :
                        </label>
                        <TextField id="outlined-size-small" variant="outlined" size="small"/>
                    </div>

                    <div className={classes.NVFieldWrapper}>
                        <label className={classes.NVlabel}>Net Unit Price (£) :
                        </label>
                        <br/>
                        <TextField id="outlined-size-small" variant="outlined" size="small"/>
                        <Button variant="contained">
                            Calculate Net
                        </Button>
                    </div>

                    <div className="classes.NVFieldWrapper">
                        <label className={classes.NVlabel}>Warehouse (£) :
                        </label>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select">
                            <MenuItem value={10}>Home</MenuItem>
                            <MenuItem value={20}>Supplied Direct</MenuItem>
                            <MenuItem value={30}>Warehouse</MenuItem>
                            <MenuItem value={40}>Workshop</MenuItem>
                        </Select>
                    </div>
                    <Button variant="contained" className={classes.buttonWrapper}>
                        Clear
                    </Button>
                    <Button variant="contained" color="primary" className={classes.buttonWrapper}>
                        Save
                    </Button>
                </div>
                <div
                    className="col"
                    style={{
                    marginTop: '21px',
                    maxWidth: '65%'
                }}>
                    <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item Lines" {...a11yProps(0)} />
          <Tab label="Comments" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="">
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Supplier</TableCell>
            <TableCell align="right">Nominal A/C</TableCell>
            <TableCell align="right">Warehouse</TableCell>
            <TableCell align="right">Deliver By</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Net Unit Price</TableCell>
            <TableCell align="right">Sub Total</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Item}>
              <TableCell component="th" scope="row">
                {row.Item}
              </TableCell>
              <TableCell align="right">{row.Supplier}</TableCell>
              <TableCell align="right">{row.Nominal_AC}</TableCell>
              <TableCell align="right">{row.Warehouse}</TableCell>
              <TableCell align="right">{row.Deliver_By}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        <Button variant="contained" className={classes.buttonWrapper}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.buttonWrapper}>
                        Save Draft
                    </Button>
                    <Button variant="contained" color="primary" className={classes.buttonWrapper}>
                        Submit
                    </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <label style={{fontSize:'20px'}}>Enter A Comment Below</label>
          <div className="">
        <TextareaAutosize style={{minWidth:'550px'}} aria-label="minimum height" rowsMin={20} />
        <div className="">
            <Button variant="contained" className={classes.buttonWrapper}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.buttonWrapper}>
                        Save Draft
                    </Button>
                    <Button variant="contained" color="primary" className={classes.buttonWrapper}>
                        Submit
                    </Button>
        </div>
        </div>
        
      </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default EnterPurchaseRequisition
