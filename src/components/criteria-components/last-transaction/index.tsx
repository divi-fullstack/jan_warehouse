import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../ui-variables";
import LastTransactionBetweenSelection from "./between-selection";
import LastTransactionIsSelection from "./is-selection";
import LastTransactionFromSelection from "./from-selection";
import LastTransactionToSelection from "./to-selection";

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

const LastTransaction: React.FC<{
  lastTransaction: string;
  handleChangeLastTransaction: (
    event: React.ChangeEvent<{ value: unknown }>
  ) => void;
  lastTransactionOptions: { name: string; value: string }[];
}> = ({
  lastTransaction,
  handleChangeLastTransaction,
  lastTransactionOptions,
}) => {
  const classes = useToolbarStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="last-transaction">
          Last Transaction
          </InputLabel>
          <Select
            labelId="last-transaction"
            id="last-transaction-select"
            value={lastTransaction}
            onChange={handleChangeLastTransaction}
            className={classes.selectEmpty}
          >
            {lastTransactionOptions.map((el) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {lastTransaction === "between" && (
        <LastTransactionBetweenSelection />
      )}
      {lastTransaction === "is" && <LastTransactionIsSelection />}
      {lastTransaction === "from" && <LastTransactionFromSelection />}
      {lastTransaction === "to" && <LastTransactionToSelection />}
    </Grid>
  );
};
export default LastTransaction;
