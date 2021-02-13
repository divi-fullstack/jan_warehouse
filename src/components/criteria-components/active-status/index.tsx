import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../ui-variables";
import ActiveStatusIsSelection from "./is-selection";
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
const ActiveStatus: React.FC<{
  selectedActiveStatus: string;
  handleChangeActiveStatus: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  activeStatusOptions: {
    name: string;
    value: string;
  }[];
}> = ({ selectedActiveStatus, handleChangeActiveStatus, activeStatusOptions }) => {
  const classes = useToolbarStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="active-status">
            Active Status
          </InputLabel>
          <Select
            labelId="active-status"
            id="active-status-select"
            value={selectedActiveStatus}
            onChange={handleChangeActiveStatus}
            className={classes.selectEmpty}
          >
            {activeStatusOptions.map((el) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {selectedActiveStatus === "is" && <ActiveStatusIsSelection />}
    </Grid>
  );
};
export default ActiveStatus;
