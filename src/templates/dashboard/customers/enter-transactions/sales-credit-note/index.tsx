import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, TextField, InputAdornment, Checkbox, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, Button, MenuItem, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

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
      '&:nth-child(1)': {
          display: 'none',
      }
    },
  }),
)(TableRow);

const customerData = [
    {Code:'A1D001',ShortName:'A1 Desig', Name:'A1 Design', Postcode: 'BP127HT', Balance: '1120.92', OnHold: 'No', CreditLimit: '2000', availableCredit: '980'},
    {Code:'A1D002',ShortName:'A2 Desig', Name:'A2 Design', Postcode: 'BP127HT', Balance: '174.00', OnHold: 'No', CreditLimit: '60000', availableCredit: '59826' },
    {Code:'A1D003',ShortName:'A2 Desig', Name:'A2 Design', Postcode: 'BP127HT', Balance: '16364.99', OnHold: 'No'},
    {Code:'ABS001',ShortName:'ABS Gara', Name:'ABS Garage', Postcode: 'NE311VB', Balance: '2368.16', OnHold: 'No'},
    {Code:'ASB002',ShortName:'ABS Shop', Name:'ABS Garage', Postcode: 'NE311VB', Balance: '0.00', OnHold: 'No'}
]

const dummyVATData = [
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
]

const VATData = [
    {Code: '1', Name:'Standard rate', Rate:'20.00', GoodsValue:'20.00', VATValue: '0.00', VATDiscount: '0.00', DiscountValue: '0.00', mappedCode: 'A1D001'},
    {Code: '2', Name:'Standard rate', Rate:'30.00', GoodsValue:'60.00', VATValue: '0.00', VATDiscount: '0.00', DiscountValue: '0.00', mappedCode: 'A1D001'},
    {Code: '1', Name:'Standard rate', Rate:'20.00', GoodsValue:'0.00', VATValue: '0.00', VATDiscount: '0.00', DiscountValue: '0.00', mappedCode: 'A1D002'}
]

const dummyNominialData = [
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Narrative:'', TransactionAnalysis:''},
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Narrative:'', TransactionAnalysis:''},
]

const NominialData = [
    {Code: '4000', CC:'', Dept:'', Name:'Sales', GoodsValue:'0.00', Type:'Posting', Narrative:'SI/AD001', TransactionAnalysis:'', mappedCode: 'A1D001'},
    {Code: '4000', CC:'ADM', Dept:'4', Name:'Sales North.', GoodsValue:'0.00', Type:'Posting', Narrative:'SI/AD002', TransactionAnalysis:'', mappedCode: 'A1D002'},
]

const TransactionData = [
    {
        GoodsValue: '0.00',
        DiscountPercent: '2.50',
        DiscountDays: '15',
        DiscountValue: '0.00',
        VATDiscount: '0.00',
        VATValue: '0.00',
        CreditNoteTotal: '0.00',
        DiscCreditTotal: '0.00',
        mappedCode: 'A1D001'
    },
    {
        GoodsValue: '0.00',
        DiscountPercent: '0.00',
        DiscountDays: '15',
        DiscountValue: '0.00',
        VATDiscount: '0.00',
        VATValue: '0.00',
        CreditNoteTotal: '0.00',
        DiscCreditTotal: '0.00',
        mappedCode: 'A1D002'
    },
]

const defaultTransactionData = {
    GoodsValue: '',
    DiscountPercent: '',
    DiscountDays: '',
    DiscountValue: '',
    VATDiscount: '',
    VATValue: '',
    CreditNoteTotal: '',
    DiscCreditTotal: '',
    mappedCode: ''
}

const SalesCreditNote: React.FC<{}> = () => {
    const classes = useStyles();
    const [code, setCode] = React.useState('');
    const [shortName, setShortName] = React.useState('');
    const [postcode, setPostcode] = React.useState('');
    const [creditLimit, setCreditLimit] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [availableCredit, setAvailableCredit] = React.useState('');
    const [transaction, setTransaction] = React.useState(defaultTransactionData);
    const [VATAnalysisData, setVATAnalysisData] = React.useState(dummyVATData);
    const [NominialAnalysisData, setNominialAnalysisData] = React.useState(dummyNominialData);

    const setCustomerData = (customer:any, value: string) => {
        reset();
        setCode(customer.Code||'');
        setShortName(customer.ShortName||'');
        setPostcode(customer.Postcode||'');
        setCreditLimit(customer.CreditLimit||'');
        setBalance(customer.Balance||'');
        setAvailableCredit(customer.availableCredit||'');
        let vd = VATData.filter(row => row.mappedCode === value);
        let nd = NominialData.filter(row => row.mappedCode === value);
        let td = TransactionData.find(row => row.mappedCode === value);
        setTransaction(td || defaultTransactionData );
        setVATAnalysisData(vd);
        setNominialAnalysisData(nd);
    }
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
        setAvailableCredit('');
        setTransaction(defaultTransactionData);
        setVATAnalysisData(dummyVATData);
        setNominialAnalysisData(dummyNominialData);
    }
    const save = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert("Saved!");
        reset();
    }

    const clear = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert("Cleared!");
        reset();
    }
    
    const NAGoodsValueTotal = () => {
        let total=0;
        if(NominialAnalysisData===dummyNominialData) return 0;
        for(let i=0;i<NominialAnalysisData.length;i++)
        {
            total+=parseFloat(NominialAnalysisData[i].GoodsValue);
        }
        return total;
    }

    const VATotals = () => {
        let GoodsValue=0, DiscountValue=0, VATDiscount=0, VATValue=0;
        if(VATAnalysisData===dummyVATData) return { GoodsValue, DiscountValue, VATDiscount, VATValue };
        for(let i=0;i<VATAnalysisData.length;i++)
        {
            GoodsValue+=parseFloat(VATAnalysisData[i].GoodsValue);
            DiscountValue+=parseFloat(VATAnalysisData[i].DiscountValue);
            VATDiscount+=parseFloat(VATAnalysisData[i].VATDiscount);
            VATValue+=parseFloat(VATAnalysisData[i].VATValue);
        }
        return { GoodsValue, DiscountValue, VATDiscount, VATValue };
    }

    return (
      <div className={classes.root}>
        <Grid container justify='center'>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" align='center' style={{padding:'10px',fontWeight: 'bold'}}>
                SALES CREDIT NOTE
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
                        <TextField
                            label="Available credit"
                            id="balance"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={availableCredit}
                        />                             
                    </Grid>
                </form>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0} variant='outlined'>
                <Typography variant="h6" component="h6" align='left'>
                    Credit Note details
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid item xs={12}>
                        <TextField
                            id="credit-note-date"
                            label="Credit note date"
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
                            label="Credit note total"
                            id="credit-note-total"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={transaction?.CreditNoteTotal ||''}
                        />
                        <TextField
                            label="Disc credit total"
                            id="disc-credit-total"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            value={transaction?.DiscCreditTotal ||''}
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
                    {/* <IconButton size="small">
                        <AddIcon />
                    </IconButton> */}
                    <TableFooter style={{borderTop:'2px solid rgba(0,0,0,0.3)'}}>
                        <TableRow>
                            <StyledTableCell>
                                Totals
                            </StyledTableCell>
                            <StyledTableCell/>
                            <StyledTableCell/>
                            <StyledTableCell>
                                {VATotals().GoodsValue}
                            </StyledTableCell>
                            <StyledTableCell>
                                {VATotals().DiscountValue}
                            </StyledTableCell>
                            <StyledTableCell>
                                {VATotals().VATDiscount}
                            </StyledTableCell>
                            <StyledTableCell>
                                {VATotals().VATValue}
                            </StyledTableCell>
                        </TableRow>
                    </TableFooter>
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
                            <StyledTableCell>Narrative</StyledTableCell>
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
                            <StyledTableCell>{row.Narrative}</StyledTableCell>
                            <StyledTableCell>{row.TransactionAnalysis}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                    <TableFooter style={{borderTop:'2px solid rgba(0,0,0,0.3)'}}>
                        <TableRow>
                            <StyledTableCell>
                                Totals
                            </StyledTableCell>
                            <StyledTableCell/>
                            <StyledTableCell/>
                            <StyledTableCell/>
                            <StyledTableCell>
                                {NAGoodsValueTotal()}
                            </StyledTableCell>
                            <StyledTableCell/>
                            <StyledTableCell/>
                            <StyledTableCell/>
                        </TableRow>
                    </TableFooter>
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
export default SalesCreditNote