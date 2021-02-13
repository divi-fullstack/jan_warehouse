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
const BalanceSelection: React.FC<{
  selectedBalance: string;
  handleChangeBalance: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  balanceOptions: {
    name: string;
    value: string;
  }[];
}> = ({ selectedBalance, handleChangeBalance, balanceOptions }) => {
  const classes = useToolbarStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="balance">
           Balance
          </InputLabel>
          <Select
            labelId="balance"
            id="balance-select"
            value={selectedBalance}
            onChange={handleChangeBalance}
            className={classes.selectEmpty}
          >
            {balanceOptions.map((el) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {selectedBalance === "between" && <UseNumberBetweenSelection />}
      {selectedBalance === "is" && <UseNumberIsSelection />}
      {selectedBalance === "from" && <UseNumberFromSelection />}
      {selectedBalance === "to" && <UseNumberToSelection />}
    </Grid>
  );
};
export default BalanceSelection;
