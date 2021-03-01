import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, MenuItem, TableContainer, Table, Paper, TableRow, TableHead, TableCell, TableBody, Checkbox, Button } from "@material-ui/core";
const stockItemsData:any[] = require('../../../../../textJsonData/priceBookData.json');

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
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
      width: '10ch',
    },
    padding: '2ch'
  },
}));

const PricesForStockItem: React.FC<{}> = () => {
  const classes = useStyles();
  const stockItems = Array.from(new Set(stockItemsData.map((item) => {
                                                  return ({
                                                    'Code' : item['Code'],
                                                    'Name' : item['Name'],
                                                    'Stock Unit Name' : item['Stock Unit Name']
                                                  })
                                                })));
  const defaultStockItem = {
    'Code': '',
    'Name' : '',
    'Stock Unit Name': ''
  }
  const [stockItem, setStockItem] = React.useState(defaultStockItem)

  const handleChange = (event:any) => {
    if(event.target.name === "Code")
      setStockItem(stockItems.find((option)=> option.Code === event.target.value)||defaultStockItem )
    if(event.target.name === "Name")
      setStockItem(stockItems.find((option)=> option.Name === event.target.value)||defaultStockItem )
  };

  const getPriceBandValues = () => {
    let priceBands = stockItemsData.filter((item)=>
      item["Code"] === stockItem["Code"]
    );

    return priceBands;
  }

  return (
  <>
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h6" component="h6">
        Stock Item
      </Typography>
      <TextField size="small"
          id="code"
          name="Code"
          select
          label="Code"
          value={stockItem["Code"]}
          onChange={handleChange}
          variant="filled"
        >
          {stockItems.map((option, index) => (
            <MenuItem key={index} value={option.Code}>
              {option.Code}
            </MenuItem>
          ))}
      </TextField>
      <TextField size="small"
          id="name"
          name="Name"
          select
          label="Name"
          value={stockItem["Name"]}
          onChange={handleChange}
          variant="filled"
        >
          {stockItems.map((option, index) => (
            <MenuItem key={index} value={option.Name}>
              {option.Name}
            </MenuItem>
          ))}
      </TextField>
      <TextField size="small" id="stockunit" variant="filled" label="Stock Unit" disabled value={stockItem["Stock Unit Name"]} />
      <Typography variant="h6" component="h6">
        Selling Prices
      </Typography>
      <TableContainer className={classes.table} component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Price Band Name</TableCell>
            <TableCell>Use std</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getPriceBandValues().map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row["Price Band"]}
              </TableCell>
              <TableCell>
                <Checkbox
                  color="default"
                />
              </TableCell>
              <TableCell>
                <TextField size="small" value={row["Price"].toFixed(2)} ></TextField>
              </TableCell>
              <TableCell>Pound Sterling</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </form>
    <div className={classes.button} >
      <Button size="medium" variant="contained" color="primary">
        Save
      </Button>
      <Button size="medium" variant="contained" color="secondary">
        Close
      </Button>
    </div>
  </>)
};

export default PricesForStockItem;
