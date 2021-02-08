import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../../../../ui-variables";
import TransTypeIsSelection from "./is-selection";
import TransTypeInSelection from "./in-selection";
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // backgroundColor: "#f1f1f1",
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
const TransType: React.FC<{
  selectedTransType: string;
  handleChangeTransType: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  transTypeOptions: {
    name: string;
    value: string;
  }[];
}> = ({ selectedTransType, handleChangeTransType, transTypeOptions }) => {
  const classes = useToolbarStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="trans-type">
            Trans Type
          </InputLabel>
          <Select
            labelId="trans-type"
            id="trans-type-select"
            value={selectedTransType}
            onChange={handleChangeTransType}
            className={classes.selectEmpty}
          >
            {transTypeOptions.map((el) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {selectedTransType === "is" && <TransTypeIsSelection />}
      {selectedTransType === "in" && <TransTypeInSelection />}
    </Grid>
  );
};
export default TransType;
