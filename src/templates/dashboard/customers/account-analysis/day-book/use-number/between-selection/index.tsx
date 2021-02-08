import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { margin } from "../../../../../../../ui-variables";
import TextField from "@material-ui/core/TextField";
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
  })
);
const UseNumberBetweenSelection: React.FC<{}> = () => {
  const classes = useToolbarStyles();

  return (
    <>
      <Grid item xs={12} md={3} sm={6}>
        <TextField
          id="number"
          label="From"
          placeholder="From"
          fullWidth
          type="number"
          margin={margin}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <TextField
          id="number"
          label="To"
          placeholder="To"
          fullWidth
          type="number"
          margin={margin}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </>
  );
};
export default UseNumberBetweenSelection;
