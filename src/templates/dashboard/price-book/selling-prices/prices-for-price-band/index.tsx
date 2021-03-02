import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, MenuItem, TableContainer, Table, Paper, TableRow, TableHead, TableCell, TableBody, Checkbox, Button } from "@material-ui/core";
const stockItemsData:any[] = require('../../../../../textJsonData/priceBookData.json');

const priceBands = [
  { Name: "PUBLIC",
    Description: "Public Price list",
    Currency: "Pound sterling"
  },
  { Name: "Standard",
    Description: "Standard Price list",
    Currency: "Pound sterling"
  },
  { Name: "TRADEA",
    Description: "TRADEA Price list",
    Currency: "Pound sterling"
  },
  { 
    Name: "TRADEB",
    Description: "TRADEB Price list",
    Currency: "Pound sterling"
  }
]

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
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
      width: '10ch',
    },
    padding: '2ch'
  },
}));

const PricesForPriceBand: React.FC<{}> = () => {
  const classes = useStyles();
  const defaultPriceBand =   { 
    Name: "",
    Description: "",
    Currency: ""
  }
  const [priceBand, setPriceBand] = React.useState(defaultPriceBand);

  const handleChange = (event:any) => {
      setPriceBand(priceBands.find((option)=> option.Name === event.target.value)||defaultPriceBand )
  };

  const getStockItems = () => {
    let stockItems = stockItemsData.filter((item)=>
      item["Price Band"] === priceBand.Name
    );
    return stockItems;
  }

  return (
  <>
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h6" component="h6">
        Price Band Details
      </Typography>
      <TextField size="small"
          id="name"
          name="Name"
          select
          label="Name"
          value={priceBand.Name}
          onChange={handleChange}
          variant="filled"
        >
          {priceBands.map((option, index) => (
            <MenuItem key={index} value={option.Name}>
              {option.Name}
            </MenuItem>
          ))}
      </TextField>
      <TextField size="small" id="stockunit" variant="filled" label="Description" disabled value={priceBand.Description} />
      <TextField size="small" id="stockunit" variant="filled" label="Currency" disabled value={priceBand.Currency} />
      <Typography variant="h6" component="h6">
        Selling Prices
      </Typography>
      <TableContainer className={classes.table} component={Paper}>
      <Table size="small"stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Use std</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getStockItems().map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row["Code"]}
              </TableCell>
              <TableCell component="th" scope="row">
                {row["Name"]}
              </TableCell>
              <TableCell>
                <Checkbox
                  color="default"
                />
              </TableCell>
              <TableCell>
                <TextField size="small" value={row["Price"].toFixed(2)} ></TextField>
              </TableCell>
              <TableCell>{row["Stock Unit Name"]}</TableCell>
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

export default PricesForPriceBand;
