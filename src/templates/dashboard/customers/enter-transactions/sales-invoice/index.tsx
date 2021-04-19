import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import MenuItem from '@material-ui/core/MenuItem';

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

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:nth-child(1)': {
          display: 'none',
      }
    },
  }),
)(TableRow);

const customerData = [
    {Code:'A1D001',ShortName:'A1 Desig', Name:'A1 Design', Postcode: 'BP127HT', Balance: '1120.92', OnHold: 'No'},
    {Code:'A1D002',ShortName:'A2 Desig', Name:'A2 Design', Postcode: 'BP127HT', Balance: '174.00', OnHold: 'No'},
    {Code:'A1D003',ShortName:'A2 Desig', Name:'A2 Design', Postcode: 'BP127HT', Balance: '16364.99', OnHold: 'No'},
    {Code:'ABS001',ShortName:'ABS Gara', Name:'ABS Garage', Postcode: 'NE311VB', Balance: '2368.16', OnHold: 'No'},
    {Code:'ASB002',ShortName:'ABS Shop', Name:'ABS Garage', Postcode: 'NE311VB', Balance: '0.00', OnHold: 'No'}
]

const dummyVATData = [
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
]

const VATData = [
    {Code: '1', Name:'Standard rate', Rate:'20.00', GoodsValue:'0.00', VATValue: '0.00', VATDiscount: '0.00', DiscountValue: '0.00', mappedCode: 'A1D001'},
    {Code: '2', Name:'Standard rate', Rate:'30.00', GoodsValue:'0.00', VATValue: '0.00', VATDiscount: '0.00', DiscountValue: '0.00', mappedCode: 'A1D001'}
]

const dummyNominialData = [
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Nominee:'', TransactionAnalysis:''},
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Nominee:'', TransactionAnalysis:''},
]

const NominialData = [
    {Code: '4000', CC:'', Dept:'', Name:'Sales', GoodsValue:'0.00', Type:'Posting', Nominee:'SI/AD001', TransactionAnalysis:'', mappedCode: 'A1D001'},
]

const TransactionData = [
    {
        GoodsValue: '0.00',
        DiscountPercent: '2.50',
        DiscountDays: '15',
        DiscountValue: '0.00',
        VATDiscount: '0.00',
        VATValue: '0.00',
        InvoiceTotal: '0.00',
        DiscInvTotal: '0.00',
        mappedCode: 'A1D001'
    }
]

const defaultTransactionData = {
    GoodsValue: '',
    DiscountPercent: '',
    DiscountDays: '',
    DiscountValue: '',
    VATDiscount: '',
    VATValue: '',
    InvoiceTotal: '',
    DiscInvTotal: '',
    mappedCode: ''
}

const SalesInvoice: React.FC<{}> = () => {
    const classes = useStyles();
    const [code, setCode] = React.useState('');
    const [shortName, setShortName] = React.useState('');
    const [postcode, setPostcode] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [transaction, setTransaction] = React.useState(defaultTransactionData);
    const [VATAnalysisData, setVATAnalysisData] = React.useState(dummyVATData);
    const [NominialAnalysisData, setNominialAnalysisData] = React.useState(dummyNominialData);

    const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if(value === '') return;
        let customer = customerData.find(row => row.Code === value);
        if(customer === undefined) return;
        setCode(customer.Code||'');
        setShortName(customer.ShortName||'');
        setPostcode(customer.Postcode||'');
        setBalance(customer.Balance||'');
        let vd = VATData.filter(row => row.mappedCode === value);
        let nd = NominialData.filter(row => row.mappedCode === value);
        let td = TransactionData.find(row => row.mappedCode === value);
        setTransaction(td || defaultTransactionData );
        setVATAnalysisData(vd);
        setNominialAnalysisData(nd);
    };
    
    const handleShortNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if(value === '') return;
        let customer = customerData.find(row => row.ShortName === value);
        if(customer === undefined) return;
        setCode(customer.Code||'');
        setShortName(customer.ShortName||'');
        setPostcode(customer.Postcode||'');
        setBalance(customer.Balance||'');
        let vd = VATData.filter(row => row.mappedCode === value);
        let nd = NominialData.filter(row => row.mappedCode === value);
        let td = TransactionData.find(row => row.mappedCode === value);
        setTransaction(td || defaultTransactionData );
        setVATAnalysisData(vd);
        setNominialAnalysisData(nd);
    };

    const handlePostcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if(value === '') return;
        let customer = customerData.find(row => row.Postcode === value);
        if(customer === undefined) return;
        setCode(customer.Code||'');
        setShortName(customer.ShortName||'');
        setPostcode(customer.Postcode||'');
        setBalance(customer.Balance||'');
        let vd = VATData.filter(row => row.mappedCode === value);
        let nd = NominialData.filter(row => row.mappedCode === value);
        let td = TransactionData.find(row => row.mappedCode === value);
        setTransaction(td || defaultTransactionData );
        setVATAnalysisData(vd);
        setNominialAnalysisData(nd);
    };

    const save = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert("Saved!");
        setCode( '');
        setShortName( '');
        setPostcode( '');
        setBalance( '');
        setTransaction(defaultTransactionData);
        setVATAnalysisData(dummyVATData);
        setNominialAnalysisData(dummyNominialData);
    }

    const clear = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert("Cleared!");
        setCode( '');
        setShortName( '');
        setPostcode( '');
        setBalance( '');
        setTransaction(defaultTransactionData);
        setVATAnalysisData(dummyVATData);
        setNominialAnalysisData(dummyNominialData);
    }

    return (
      <div className={classes.root}>
        <Grid container justify='center'>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" align='center' style={{padding:'10px',fontWeight: 'bold'}}>
                SALES INVOICE
            </Typography>
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
                    Invoice details
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid item xs={12}>
                        <TextField
                            id="invoice-date"
                            label="Invoice
                            date"
                            type="date"
                            defaultValue="2017-05-24"
                            variant="filled"
                            size="small"/>
                        <TextField
                            id="due-date"
                            label="Due date"
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
                    Transaction details
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid item xs={4}>
                        <TextField
                            label="Goods value"
                            id="goods-value"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={transaction?.GoodsValue||''}
                        />
                        <TextField 
                            id="discount-percent"
                            label="Discount percent"
                            variant="filled"
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>%</InputAdornment>,
                            }}
                            size="small"
                            value={transaction?.DiscountPercent ||''}
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                id="traingulated"
                                name="traingulated"
                                color="primary"
                                disabled={code===''}
                            />
                            }
                            label="Traingulated"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                id="settled"
                                name="settled"
                                color="primary"
                                disabled={code===''}
                            />
                            }
                            label="Settled immediately"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="dicount-days"
                            label="Discount days"
                            variant="filled"
                            size="small"
                            value={transaction?.DiscountDays ||''}
                        />
                        <TextField
                            label="Discount value"
                            id="discount-value"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={transaction?.DiscountValue ||''}
                            />
                        <TextField
                            label="VAT discount"
                            id="vat-discount"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={transaction?.VATDiscount ||''}
                        />                      
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="VAT value"
                            id="vat-value"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={transaction?.VATValue ||''}
                        />  
                        <TextField
                            label="Invoice total"
                            id="invoice-total"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={transaction?.InvoiceTotal ||''}
                        />
                        <TextField
                            label="Disc inv total"
                            id="disc-inv-total"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={transaction?.DiscInvTotal ||''}
                        />                        
                    </Grid>
                </form>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0} variant='outlined'>
                <Typography variant="h6" component="h6" align='left'>
                    VAT analysis
                </Typography>   
                <TableContainer >
                <Table aria-label="customized table" size="small">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Code</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Rate</StyledTableCell>
                        <StyledTableCell>Goods value</StyledTableCell>
                        <StyledTableCell>Discount value</StyledTableCell>
                        <StyledTableCell>VAT discount</StyledTableCell>
                        <StyledTableCell>VAT value</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {VATAnalysisData.map((row) => (
                        <StyledTableRow key={row.Code}>
                            <StyledTableCell component="th" scope="row">
                                {row.Code}
                            </StyledTableCell>
                            <StyledTableCell>{row.Name}</StyledTableCell>
                            <StyledTableCell>{row.Rate}</StyledTableCell>
                            <StyledTableCell>{row.GoodsValue}</StyledTableCell>
                            <StyledTableCell>{row.DiscountValue}</StyledTableCell>
                            <StyledTableCell>{row.VATDiscount}</StyledTableCell>
                            <StyledTableCell>{row.VATValue}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
          </Grid>
          <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0} variant='outlined'>
                <Typography variant="h6" component="h6" align='left'>
                    Nominial analysis
                </Typography>   
                <TableContainer>
                  <Table aria-label="customized table" size="small">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Code</StyledTableCell>
                            <StyledTableCell>CC</StyledTableCell>
                            <StyledTableCell>Dept</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Goods value</StyledTableCell>
                            <StyledTableCell>Type</StyledTableCell>
                            <StyledTableCell>Nominee</StyledTableCell>
                            <StyledTableCell>Transaction analysis</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {NominialAnalysisData.map((row) => (
                        <StyledTableRow key={row.Code}>
                            <StyledTableCell component="th" scope="row">
                                {row.Code }
                            </StyledTableCell>
                            <StyledTableCell>{row.CC}</StyledTableCell>
                            <StyledTableCell>{row.Dept}</StyledTableCell>
                            <StyledTableCell>{row.Name}</StyledTableCell>
                            <StyledTableCell>{row.GoodsValue}</StyledTableCell>
                            <StyledTableCell>{row.Type}</StyledTableCell>
                            <StyledTableCell>{row.Nominee}</StyledTableCell>
                            <StyledTableCell>{row.TransactionAnalysis}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
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
export default SalesInvoice