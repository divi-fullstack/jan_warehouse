import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../ui-variables";
import BetweenSelection from "./between-selection";
import IsSelection from "./is-selection";
import FromSelection from "./from-selection";
import ToSelection from "./to-selection";
import InSelection from "./in-selection";
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
const ShortName: React.FC<{
  shortNameSelected: string;
  shortNamehandleChange: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  shortNameOptions: { name: string; value: string }[];
}> = ({ shortNameSelected, shortNamehandleChange, shortNameOptions }) => {
  const classes = useToolbarStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="short-name">
            Short Name
          </InputLabel>
          <Select
            labelId="short-name"
            id="short-name-select"
            className={classes.selectEmpty}
            value={shortNameSelected}
            onChange={shortNamehandleChange}
          >
            {shortNameOptions.map((el: { name: string; value: string }) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {shortNameSelected === "between" && <BetweenSelection />}
      {shortNameSelected === "is" && <IsSelection />}
      {shortNameSelected === "from" && <FromSelection />}
      {shortNameSelected === "to" && <ToSelection />}
      {shortNameSelected === "in" && <InSelection />}
    </Grid>
  );
};
export default ShortName;
