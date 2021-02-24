import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import BottomDrower from "../../../../../../components/bottom-navigation";
import Button from "@material-ui/core/Button";
import {size, margin} from "../../../../../../ui-variables"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
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
const Bank: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} sm={6}>
          <h3 className={classes.heading}>Bank Details</h3>
          <TextField
            id="sort-code"
            label="Sort code"
            style={{ margin: 8 }}
            placeholder="xx-xx-xx"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="account-number"
            label="Account number"
            style={{ margin: 8 }}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="account-name"
            label="Account name"
            style={{ margin: 8 }}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="bank-payment-ref"
            label="Bank payment reference"
            style={{ margin: 8 }}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <h3 className={classes.heading}>Additional Bank Details</h3>
          <TextField
            id="iban"
            label="IBAN"
            style={{ margin: 8 }}
            placeholder=""
            multiline
            rows={4}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="bic-swift-number"
            label="BIC/Swift number"
            style={{ margin: 8 }}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="roll-number"
            label="Roll number"
            style={{ margin: 8 }}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="postcode"
            label="Postcode"
            style={{ margin: 8 }}
            placeholder="Postcode"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="bacs-reference"
            label="BACS reference"
            style={{ margin: 8 }}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="additional-refernce"
            label="Additional refernce"
            style={{ margin: 8 }}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="non-uk-sort-code"
            label="Non UK sort code"
            style={{ margin: 8 }}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8} sm={12}>
          <BottomDrower>
            <div></div>
            <div>
              <Button variant="contained" size={size}>Clear</Button>
              <Button variant="contained" size={size} color="primary">
                Save
              </Button>
            </div>
          </BottomDrower> 
        </Grid>
      </Grid>
    </div>
  );
};
export default Bank;
