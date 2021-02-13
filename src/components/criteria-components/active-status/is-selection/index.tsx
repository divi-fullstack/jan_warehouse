import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../../ui-variables";
import activeStatusTypes from "../../../../textJsonData/activeStatusTypes.json";
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
  })
);
const ActiveStatusIsSelection: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [isSelected, setIsSelected] = useState("");
  const isSelectHandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setIsSelected(event.target.value as string);
  };

  return (
    <Grid item xs={12} md={3} sm={6}>
      <FormControl className={classes.formControl} margin={margin}>
        <InputLabel shrink id="is-active-status">
          Active Status Selection
        </InputLabel>
        <Select
          labelId="is-active-status"
          id="is-active-status-select"
          value={isSelected}
          onChange={isSelectHandleChange}
        >
          {activeStatusTypes.map((el) => {
            return (
              <MenuItem key={el.value} value={el.value}>
                {el.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};
export default ActiveStatusIsSelection;
