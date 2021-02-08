import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../../../../ui-variables";
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
const ACRef: React.FC<{
  acRefSelected: string;
  acRefhandleChange: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  acRefOptions: { name: string; value: string }[];
}> = ({ acRefSelected, acRefhandleChange, acRefOptions }) => {
  const classes = useToolbarStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="ac_ref">
            A/C ref
          </InputLabel>
          <Select
            labelId="ac_ref"
            id="ac_ref-select"
            className={classes.selectEmpty}
            value={acRefSelected}
            onChange={acRefhandleChange}
          >
            {acRefOptions.map((el: { name: string; value: string }) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {acRefSelected === "between" && <BetweenSelection />}
      {acRefSelected === "is" && <IsSelection />}
      {acRefSelected === "from" && <FromSelection />}
      {acRefSelected === "to" && <ToSelection />}
      {acRefSelected === "in" && <InSelection />}
    </Grid>
  );
};
export default ACRef;
