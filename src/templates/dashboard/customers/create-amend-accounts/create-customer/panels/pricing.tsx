import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { margin } from "../../../../../../ui-variables";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
  })
);
const Pricing: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4} sm={6}>
          <h3 className={classes.heading}>Discounts</h3>
          <TextField
            id="invoicediscount"
            label="Invoice Discount"
            style={{ margin: 8 }}
            placeholder="%"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="linediscount"
            label="Line discount"
            style={{ margin: 8 }}
            placeholder="days"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={6} md={4} sm={6}>
          <h3 className={classes.heading}>Discount Details</h3>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="discountgroup">
              Discount group
            </InputLabel>
            <Select
              labelId="discountgroup"
              id="discountgroup-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={""}></MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="discountgroup">
              Invoice and order value discount
            </InputLabel>
            <Select
              labelId="invoiceorder"
              id="invoiceorder-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={""}></MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={5} sm={6}>
          <h3 className={classes.heading}>Price Brand Details</h3>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="pricebrand">
              Price Brand
            </InputLabel>
            <Select
              labelId="pricebrand"
              id="pricebrand-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={"standard"}>Standard</MenuItem>
              <MenuItem value={""}></MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default Pricing;
