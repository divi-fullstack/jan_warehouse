import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { margin } from "../../../../ui-variables";
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
    },
  })
);
const OnHoldIsSelection: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [isSelected, setIsSelected] = useState(true);

  const isSelectHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(event.target.checked);
  };
  return (
    <Grid item xs={12} md={3} sm={6}>
      <FormControl className={classes.formControl} margin={margin}>
        <Checkbox
          checked={isSelected}
          onChange={isSelectHandleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </FormControl>
    </Grid>
  );
};
export default OnHoldIsSelection;
