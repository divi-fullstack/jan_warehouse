import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, TableContainer, Table, Paper, TableRow, TableHead, TableCell, TableBody, Checkbox, Button, MenuItem, Modal, FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { AnyARecord, AnyAaaaRecord } from "dns";
const markupPricesData:any[] = require('../../../../../textJsonData/markupPrices.json');

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    padding: '2ch'
  },
  table: {
    minWidth: 950,
    maxHeight: 400,
    '& .selectedRow' : {
        backgroundColor: theme.palette.grey[300],
    },
    '& .MuiTableBody-root > .MuiTableRow-root :hover': {
        backgroundColor: theme.palette.grey[300],
        cursor: 'pointer'
    }
  },
  table2: {
    minWidth: 700,
    maxHeight: 300,
    margin: '2ch',
    marginLeft: '4ch',
  },
  button: {
    '& > *': {
      margin: theme.spacing(1)
    },
    padding: '2ch',
    paddingTop: '0',
  },
  discountForm: {
    width: 800,
    padding: '5ch',
    '& > .MuiFormControl-root': {
        margin: theme.spacing(1),
        marginLeft: '2ch',
        width: '50ch',        
    },
    margin: 'auto',
    marginTop: '5%'
  },
  discountFlatVal: {
    margin: '1ch',
    marginLeft: '4ch',
    width: '50ch',  
  }
}));

const MarkupPrices: React.FC<{}> = () => {
  const classes = useStyles();
  const [pgcode, setPgcode] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [markupPrices, setMarkupPrices] = React.useState(markupPricesData);
  const [selectedDiscountRow, setSelectedDiscountRow] = React.useState('');
  const [open, handleOpen] = React.useState(false);
  const handleDescChange = () => {
    let pg = markupPrices.find((option)=>option.Code===pgcode);
    setDescription(pg?pg["Description"]:'');
  }
  return (
  <>
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h6" component="h6">
            Product Group Details
      </Typography>
      <TextField size="small"
          id="code"
          name="Code"
          select
          label="Code"
          variant="filled"
          value={pgcode}
          onChange={(e)=>{setPgcode(e.target.value);handleDescChange();}}
        >
          {markupPrices.map((option, index) => (
            <MenuItem key={index} value={option.Code}>
              {option.Code}
            </MenuItem>
          ))}
      </TextField>
      <TextField label="Description" disabled value={description}></TextField>
      <Typography variant="h6" component="h6">
        Discounts
      </Typography>
      <Typography variant="subtitle1" style={{width:'100%'}} >
        <i>The following discounts apply to all products in this product group.</i>
      </Typography>
      <TableContainer className={classes.table} component={Paper}>
      <Table size="small"stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={0} className={selectedDiscountRow==='0'?'selectedRow':''}  onClick={() => setSelectedDiscountRow('0')}>
              <TableCell component="th" scope="row">
                    First Discount
              </TableCell>
            </TableRow>
            <TableRow key={1} className={selectedDiscountRow==='1'?'selectedRow':''}  onClick={() => setSelectedDiscountRow('1')}>
              <TableCell component="th" scope="row">
                    Second Discount
              </TableCell>
            </TableRow>
            <TableRow key={3} className={selectedDiscountRow==='3'?'selectedRow':''}  onClick={() => setSelectedDiscountRow('3')}>
              <TableCell component="th" scope="row">
                    Third Discount
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </form>
    <div className={classes.button} >
      <Button size="medium" variant="contained" color="primary" onClick={()=>handleOpen(true)} >
        Add
      </Button>
      <Button size="medium" variant="contained" color="primary">
        Edit
      </Button>
      <Button size="medium" variant="contained" color="primary">
        Duplicate
      </Button>
      <Button size="medium" variant="contained" color="primary">
        Remove
      </Button>
      <Button size="medium" variant="contained" color="primary">
        Link to groups
      </Button>
    </div>
    <Modal
        open={open}
        onClose={()=>handleOpen(false)}
    >
        <Paper className={classes.discountForm}>
            <Typography variant="h6" component="h6">
                    Discount Details
            </Typography>
            <TextField label="Name" ></TextField>
            <Typography variant="h6" component="h6">
                    Discount
            </Typography> 
            <TextField size="small"
                label="Type"
                variant="filled"
                value={'Percentage'}
                select
                disabled
                >
                <MenuItem value={'Percentage'}>
                {'Percentage'}
                </MenuItem>
                <MenuItem value={'Value'}>
                {'Value'}
                </MenuItem>
            </TextField>
            <FormControl component="fieldset">
                <RadioGroup name="discounttype" defaultValue='Flat rate discount' >
                    <FormControlLabel value='Flat rate discount' control={<Radio />} label="Flat rate discount" />
                    <TextField className={classes.discountFlatVal} label="Value" ></TextField>
                    <FormControlLabel value='Quantity break discounts' control={<Radio />} label="Quantity break discounts" />
                    <TableContainer className={classes.table2} component={Paper}>
                    <Table size="small"stickyHeader >
                        <TableHead>
                        <TableRow>
                            <TableCell>Quantity of or More than</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell>Modifier</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={0}>
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell component="th" scope="row">
                                </TableCell>
                            </TableRow>
                            <TableRow key={1}>
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell component="th" scope="row">
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </RadioGroup>
            </FormControl>
            <div className={classes.button} >
                <Button size="medium" variant="contained" color="primary" onClick={()=>handleOpen(false)}>
                    Save
                </Button>
                <Button size="medium" variant="contained" color="secondary" onClick={()=>handleOpen(false)} >
                    Cancel
                </Button>
            </div>                       
        </Paper>
    </Modal>
  </>)
};

export default MarkupPrices;
