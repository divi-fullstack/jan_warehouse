import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../ui-variables";
import PositioningDateBetweenSelection from "./between-selection";
import PositioningDateIsSelection from "./is-selection";
import PositioningDateFromSelection from "./from-selection";
import PositioningDateToSelection from "./to-selection";

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
const PositioningDate: React.FC<{
  positioningDateSelected: string;
  positoningDateHandleChange: (
    event: React.ChangeEvent<{ value: unknown }>
  ) => void;
  positioningDateOptions: { name: string; value: string }[];
}> = ({
  positioningDateSelected,
  positoningDateHandleChange,
  positioningDateOptions,
}) => {
  const classes = useToolbarStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="positioning-date">
            Positioning Date
          </InputLabel>
          <Select
            labelId="positioning-date"
            id="positioning-date-select"
            value={positioningDateSelected}
            onChange={positoningDateHandleChange}
            className={classes.selectEmpty}
          >
            {positioningDateOptions.map((el) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {positioningDateSelected === "between" && (
        <PositioningDateBetweenSelection />
      )}
      {positioningDateSelected === "is" && <PositioningDateIsSelection />}
      {positioningDateSelected === "from" && <PositioningDateFromSelection />}
      {positioningDateSelected === "to" && <PositioningDateToSelection />}
    </Grid>
  );
};
export default PositioningDate;
