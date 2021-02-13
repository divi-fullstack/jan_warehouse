import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../ui-variables";
import OnHoldIsSelection from "./is-selection";
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
const OnHold: React.FC<{
  selectedOnHold: string;
  handleChangeOnHold: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  onHoldOptions: {
    name: string;
    value: string;
  }[];
}> = ({ selectedOnHold, handleChangeOnHold, onHoldOptions }) => {
  const classes = useToolbarStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="on-hold">
            On Hold
          </InputLabel>
          <Select
            labelId="on-hold"
            id="on-hold-select"
            value={selectedOnHold}
            onChange={handleChangeOnHold}
            className={classes.selectEmpty}
          >
            {onHoldOptions.map((el) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {selectedOnHold === "is" && <OnHoldIsSelection />}
    </Grid>
  );
};
export default OnHold;
