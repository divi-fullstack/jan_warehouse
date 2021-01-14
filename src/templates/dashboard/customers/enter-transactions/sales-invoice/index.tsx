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
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '5px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold
  },
  form: {
    display: 'flex',
    '& > div > *': {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(0),
      width: '25ch',
    },
  },
}));

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


const rows = [
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
    {Code: '', Name:'', Rate:'', GoodsValue:'', VATValue: '', VATDiscount: '', DiscountValue: ''},
];

const rows2 = [
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Nominee:'', TransactionAnalysis:''},
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Nominee:'', TransactionAnalysis:''},
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Nominee:'', TransactionAnalysis:''},
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Nominee:'', TransactionAnalysis:''},
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Nominee:'', TransactionAnalysis:''},
    {Code: '', CC:'', Dept:'', Name:'', GoodsValue:'', Type:'', Nominee:'', TransactionAnalysis:''},
]

const SalesInvoice: React.FC<{}> = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3} justify='center'>
          <Grid item xs={12}>
            <Typography variant="h4" component="h4" align='center'>
                Sales Invoice
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper} elevation={0} variant='outlined'>
                <Typography variant="h6" component="h6" align='left'>
                    Customer details
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid item xs={6}>
                        <TextField id="code" select label="Code" variant="filled" size="small"/>
                        <TextField id="short-name" select label="Short Name" variant="filled" size="small"/>
                        <TextField id="postcode" select label="Postcode" variant="filled" size="small"/>   
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
                        <TextField id="invoice-date" label="Invoice date" type="date" defaultValue="2017-05-24" variant="filled" size="small"/>
                        <TextField id="due-date" label="Due date" type="date" defaultValue="2017-05-24" variant="filled" size="small"/>
                        <TextField id="reference" label="Reference" variant="filled" size="small"/>   
                        <TextField id="sec-reference" label="Second ref" variant="filled" size="small"/>
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
                        />
                        <TextField 
                            id="discount-percent"
                            label="Discount percent"
                            variant="filled"
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>%</InputAdornment>,
                            }}
                            size="small"/>
                        <FormControlLabel
                            control={
                            <Checkbox
                                id="traingulated"
                                name="traingulated"
                                color="primary"
                                disabled
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
                                disabled
                            />
                            }
                            label="Settled immediately"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="dicount-days" label="Discount days" variant="filled" size="small"/>
                        <TextField
                            label="Discount value"
                            id="discount-value"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                            />
                        <TextField
                            label="VAT discount"
                            id="vat-discount"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
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
                        />  
                        <TextField
                            label="Invoice total"
                            id="invoice-total"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            label="Disc inv total"
                            id="disc-inv-total"
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>£</InputAdornment>,
                            }}
                            variant="filled"
                            size="small"
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
                    {rows.map((row) => (
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
                <TableContainer >
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
                    {rows2.map((row) => (
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
            style={{marginRight:'10px'}}
          >Save</Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ClearIcon />}
          >Clear</Button>
        </Grid>
      </div>
    );
}
export default SalesInvoice