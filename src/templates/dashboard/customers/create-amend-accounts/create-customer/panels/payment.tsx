import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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

    labelterms: {
      "& .MuiFormControlLabel-label": {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: 14,
      },
    },
  })
);
const Payment: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} sm={6}>
            <h3 className={classes.heading}>Payment Terms</h3>

            <FormControl className={classes.formControl}>
              <InputLabel shrink id="country">
                Default Vat Code
              </InputLabel>
              <Select
                labelId="vat"
                id="vat-select"
                className={classes.selectEmpty}
              >
                <MenuItem value={"91"}>+91</MenuItem>
                <MenuItem value={"90"}>+90</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="discount"
              label="Settlement Discount"
              style={{ margin: 8 }}
              placeholder="%"
              fullWidth
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="paid"
              label="If paid within"
              style={{ margin: 8 }}
              placeholder="days"
              fullWidth
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="payment"
              label="Payment terms"
              style={{ margin: 8 }}
              placeholder="days"
              fullWidth
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={6} md={12} sm={6}>
            <h3 className={classes.heading}>Invoice payment</h3>
            <FormControlLabel
              className={classes.labelterms}
              control={<Checkbox name="checkedB" color="primary" />}
              label="Synchronise coustmer with invoice payment"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Payment;
