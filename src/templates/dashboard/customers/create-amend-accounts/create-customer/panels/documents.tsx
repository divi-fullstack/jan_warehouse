import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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
const Documents: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4} sm={6}>
          <h3 className={classes.heading}>Stationery</h3>

          <FormControl className={classes.formControl}>
            <InputLabel shrink id="production">
              Statement production
            </InputLabel>
            <Select
              labelId="production"
              id="production-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={"paper standard"}>paper standard</MenuItem>
              <MenuItem value={"paper standard"}>paper standard</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel shrink id="saleinvoice">
              Sale invoice layout
            </InputLabel>
            <Select
              labelId="saleinvoice"
              id="saleinvoice-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={"default invoice layout"}>
                Default invoice layout
              </MenuItem>
              <MenuItem value={"default invoice layout"}>
                Default invoice layout
              </MenuItem>
              <MenuItem value={"default invoice layout"}>
                Default invoice layout
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel shrink id="creditlayout">
              Sale credit note layout
            </InputLabel>
            <Select
              labelId="creditlayout"
              id="creditlayout-select"
              className={classes.selectEmpty}
            >
              <MenuItem value={"Default credit note layout"}>
                Default credit note layout
              </MenuItem>
              <MenuItem value={"Default credit note layout"}>
                Default credit note layout
              </MenuItem>
              <MenuItem value={"Default credit note layout"}>
                Default credit note layout
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default Documents;
