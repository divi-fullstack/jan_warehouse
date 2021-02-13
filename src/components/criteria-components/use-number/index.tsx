import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../ui-variables";
import UseNumberBetweenSelection from "./between-selection";
import UseNumberIsSelection from "./is-selection";
import UseNumberToSelection from "./to-selection";
import UseNumberFromSelection from "./from-selection";
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
const UseNumber: React.FC<{
  selectedUseNumber: string;
  handleChangeUseNumber: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  useNumberOptions: {
    name: string;
    value: string;
  }[];
}> = ({ selectedUseNumber, handleChangeUseNumber, useNumberOptions }) => {
  const classes = useToolbarStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="use-number">
            Use Number
          </InputLabel>
          <Select
            labelId="use-number"
            id="use-number-select"
            value={selectedUseNumber}
            onChange={handleChangeUseNumber}
            className={classes.selectEmpty}
          >
            {useNumberOptions.map((el) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {selectedUseNumber === "between" && <UseNumberBetweenSelection />}
      {selectedUseNumber === "is" && <UseNumberIsSelection />}
      {selectedUseNumber === "from" && <UseNumberFromSelection />}
      {selectedUseNumber === "to" && <UseNumberToSelection />}
    </Grid>
  );
};
export default UseNumber;
