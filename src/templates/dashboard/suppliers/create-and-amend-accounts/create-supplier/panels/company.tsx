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
const Company: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} sm={6}>
          <h3 className={classes.heading}>Account</h3>
          <TextField
            id="code"
            label="Code"
            style={{ margin: 8 }}
            placeholder="Code"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="name"
            label="Name"
            style={{ margin: 8 }}
            placeholder="Name"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="shortname"
            label="Short Name"
            style={{ margin: 8 }}
            placeholder="Short name"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl className={classes.formControl}  margin={margin}>
            <InputLabel shrink id="currency">
              Currency
            </InputLabel>
            <Select
              labelId="currency"
              id="currency-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={"Dollar"}>Dollar</MenuItem>
              <MenuItem value={"Euro"}>Euro</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="creditlimit"
            label="Credit limit"
            style={{ margin: 8 }}
            placeholder="Credit limit"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <h3 className={classes.heading}>Company Details</h3>
          <TextField
            id="address"
            label="Address"
            style={{ margin: 8 }}
            placeholder="Address"
            multiline
            rows={4}
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="city"
            label="City"
            style={{ margin: 8 }}
            placeholder="City"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="country"
            label="Country"
            style={{ margin: 8 }}
            placeholder="Country"
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

          <FormControl className={classes.formControl}  margin={margin}>
            <InputLabel shrink id="country">
              Country
            </InputLabel>
            <Select
              labelId="country"
              id="country-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={"Europe"}>Europe</MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="telephone"
            label="Telephone"
            style={{ margin: 8 }}
            placeholder="Telephone"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="fax"
            label="Fax"
            style={{ margin: 8 }}
            placeholder="Fax"
            fullWidth
            margin={margin}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="website"
            label="Website"
            style={{ margin: 8 }}
            placeholder="Website"
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
export default Company;
