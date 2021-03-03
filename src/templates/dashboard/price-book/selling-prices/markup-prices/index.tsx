import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, TableContainer, Table, Paper, TableRow, TableHead, TableCell, TableBody, Checkbox, Button } from "@material-ui/core";
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
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
      width: '10ch',
    },
    padding: '2ch'
  },
}));

const MarkupPrices: React.FC<{}> = () => {
  const classes = useStyles();
  const [markupPrices, setMarkupPrices] = React.useState(markupPricesData);
  const handleChange = (index:number) => {
    let temp = [ ...markupPrices];
    if(temp[index]["Use Markup"]==="Yes")
    {
      temp[index]["Use Markup"]="";
    }
    else{
      temp[index]["Use Markup"]="Yes";
    }
    setMarkupPrices(temp);
  }

  return (
  <>
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h6" component="h6">
        Product Groups
      </Typography>
      <TableContainer className={classes.table} component={Paper}>
      <Table size="small"stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Use markup</TableCell>
            <TableCell>Markup %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {markupPrices.map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row["Code"]}
              </TableCell>
              <TableCell component="th" scope="row">
                {row["Description"]}
              </TableCell>
              <TableCell>
                <Checkbox
                  color="default"
                  checked={row["Use Markup"]==="Yes"}
                  onChange={(e)=>handleChange(index)}
                />
              </TableCell>
              <TableCell>
                {row["Use Markup"]==="Yes"?
                  <TextField size="small" value={row["Markup %"].toFixed(2)} ></TextField>:
                  row["Markup %"].toFixed(2)
                }
              </TableCell>
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

export default MarkupPrices;
