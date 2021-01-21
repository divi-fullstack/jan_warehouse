import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, TextField, InputAdornment, Checkbox, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, Button, MenuItem, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '5px',
    maxWidth: '100%',
    '& .MuiGrid-item': {
        height: 'auto',
    },
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
  },
  form: {
    display: 'flex',
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(0),
        marginBottom: theme.spacing(0),
        width: '25ch'
      },
  },
}));

const bankData = [
    {Code: '1200',AccountDescription:'Bank Current Account', ShortCode: '233434',AccountNumber: '003234234'},
    {Code: '1201',AccountDescription:'Euro Bank', ShortCode: '464564',AccountNumber: '45646456'},
    {Code: '1210',AccountDescription:'Bank Deposit Account', ShortCode: '454545',AccountNumber: '900474345'},
    {Code: '1220',AccountDescription:'Building Society Account', ShortCode: '9245454',AccountNumber: '083454358'}
]

const customerData = [
    {Code:'A1D001',ShortName:'A1 Desig', Name:'A1 Design', Postcode: 'BP127HT', Balance: '1120.92', OnHold: 'No', CreditLimit: '2000', availableCredit: '980'},
    {Code:'A1D002',ShortName:'A2 Desig', Name:'A2 Design', Postcode: 'BP127HT', Balance: '174.00', OnHold: 'No', CreditLimit: '60000', availableCredit: '59826' },
    {Code:'A1D003',ShortName:'A2 Desig', Name:'A2 Design', Postcode: 'BP127HT', Balance: '16364.99', OnHold: 'No'},
    {Code:'ABS001',ShortName:'ABS Gara', Name:'ABS Garage', Postcode: 'NE311VB', Balance: '2368.16', OnHold: 'No'},
    {Code:'ASB002',ShortName:'ABS Shop', Name:'ABS Garage', Postcode: 'NE311VB', Balance: '0.00', OnHold: 'No'}
]

const SalesReceipt: React.FC<{}> = () => {
    const classes = useStyles();
    const [code, setCode] = React.useState('');
    const [shortName, setShortName] = React.useState('');
    const [postcode, setPostcode] = React.useState('');
    const [creditLimit, setCreditLimit] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [bankAccount, setBankAccount] = React.useState('');
    const [chequeCurrency, setChequeCurrency] = React.useState('');
    const [settlementDiscount, setSettlementDiscount] = React.useState('');
    const [chequeValue, setChequeValue] = React.useState('');

    const setCustomerData = (customer:any, value: string) => {
        setCode(customer.Code||'');
        setShortName(customer.ShortName||'');
        setPostcode(customer.Postcode||'');
        setCreditLimit(customer.CreditLimit||'');
        setBalance(customer.Balance||'');
    }

    const handleBankAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if(value === '') return;
        console.log(value);
        setBankAccount(value||'');
    };

    const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if(value === '') return;
        let customer = customerData.find(row => row.Code === value);
        if(customer === undefined) return;
        setCustomerData(customer, value);
    };
    
    const handleShortNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if(value === '') return;
        let customer = customerData.find(row => row.ShortName === value);
        if(customer === undefined) return;
        setCustomerData(customer, value);
    };

    const handlePostcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if(value === '') return;
        let customer = customerData.find(row => row.Postcode === value);
        if(customer === undefined) return;
        setCustomerData(customer, value);
    };
    
    const reset = () => {
        setCode( '');
        setShortName( '');
        setCreditLimit('');
        setPostcode( '');
        setBalance( '');
        setBankAccount('');
        setChequeCurrency('');
        setSettlementDiscount('');
        setChequeValue('');
    }
    const save = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert("Saved!");
        reset();
    }

    const clear = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert("Cleared!");
        reset();
    }
    
    return (
      <div className={classes.root}>
        <Grid container justify='center'>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" align='center' style={{padding:'10px',fontWeight: 'bold'}}>
                SALES RECEIPT
            </Typography>
          </Grid>
          <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0} variant='outlined'>
                <Typography variant="h6" component="h6" align='left'>
                    Bank account details
                </Typography>
                <TextField 
                    id="bank-account" 
                    select
                    label="Bank account" 
                    variant="filled"
                    size="small"
                    value={bankAccount}
                    onChange={handleBankAccountChange}
                    style={{width:'60ch'}}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell size="small">Code</TableCell>
                            <TableCell align="right" size="small">Account description</TableCell> 
                            <TableCell align="right" size="small">Short Code</TableCell> 
                            <TableCell align="right" size="small">Account Number</TableCell> 
                        </TableRow>
                    </TableHead>
                    {bankData.map((option) => (
                        <MenuItem key={option.Code} value={option.Code} style={{padding:0,display: "table-row-group"}}>
                            <TableRow key={option.Code}>
                                <TableCell size="small">{option.Code}</TableCell>
                                <TableCell align="right" size="small">{option.AccountDescription}</TableCell>
                                <TableCell align="right" size="small">{option.ShortCode}</TableCell>
                                <TableCell align="right" size="small">{option.AccountNumber}</TableCell>
                            </TableRow>
                        </MenuItem>
                    ))}
                </TextField>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper} elevation={0} variant='outlined'>
                <Typography variant="h6" component="h6" align='left'>
                    Customer details
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid item xs={6}>
                        <TextField 
                            id="code" 
                            select label="Code" 
                            variant="filled"
                            size="small"
                            value={code}
                            onChange={handleCodeChange}
                        >
                            {customerData.map((option) => (
                                <MenuItem key={option.Code} value={option.Code}>
                                    {option.Code}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField 
                            id="short-name" 
                            select label="Short Name" 
                            variant="filled" 
                            size="small" 
                            value={shortName}
                            onChange={handleShortNameChange}>
                            {customerData.map((option) => (
                                <MenuItem key={option.ShortName} value={option.ShortName}>
                                    {option.ShortName}
                                </MenuItem>
                            ))}                                
                        </TextField>
                        <TextField 
                            id="postcode" 
                            select 
                            label="Postcode"
                            variant="filled"
                            size="small"
                            value={postcode}
                            onChange={handlePostcodeChange}>
                            {customerData.map((option) => (
                                <MenuItem key={option.Postcode} value={option.Postcode}>
                                    {option.Postcode}
                                </MenuItem>
                            ))} 
                        </TextField>   
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Credit limit"
                            id="credit-limit"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={creditLimit}
                            />
                        <TextField
                            label="Balance"
                            id="balance"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={balance}
                        />                        
                    </Grid>
                </form>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0} variant='outlined'>
                <Typography variant="h6" component="h6" align='left'>
                    Transaction details
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid item xs={12}>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2017-05-24"
                            variant="filled"
                            size="small"/>
                        <TextField
                            id="reference"
                            label="Reference"
                            variant="filled"
                            size="small"/>   
                        <TextField
                            id="sec-reference"
                            label="Second ref"
                            variant="filled"
                            size="small"/>
                    </Grid>
                </form>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0} variant='outlined'>
                <Typography variant="h6" component="h6" align='left'>
                    Receipt details
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid item xs={4}>
                        <TextField 
                            id="cheque-currency" 
                            select
                            label="Cheque currency" 
                            variant="filled"
                            size="small"
                            value={chequeCurrency}
                            onChange={(e) => setChequeCurrency(e.target.value) }
                            >
                            <MenuItem key={'EUR'} value={'EUR'}>
                                    {'EUR'}
                            </MenuItem>
                            <MenuItem key={'USD'} value={'USD'}>
                                    {'USD'}
                            </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Settlement discount"
                            id="settlement-discount"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={settlementDiscount}
                            onChange={(e) => setSettlementDiscount(e.target.value) }
                            />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Cheque value"
                            id="cheque-value"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={chequeValue}
                            onChange={(e) => setChequeValue(e.target.value) }
                        />                      
                    </Grid>
                </form>
            </Paper>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            style={{margin:'10px',marginBottom:'20px'}}
            onClick={save}
          >Save</Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ClearIcon />}
            style={{margin:'10px',marginBottom:'20px'}}
            onClick={clear}
          >Clear</Button>
        </Grid>
      </div>
    );
}
export default SalesReceipt