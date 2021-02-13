import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../ui-variables";
import LastAmendedBetweenSelection from "./between-selection";
import LastAmendedIsSelection from "./is-selection";
import LastAmendedFromSelection from "./from-selection";
import LastAmendedToSelection from "./to-selection";

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

const LastAmended: React.FC<{
  lastAmended: string;
  handleChangeLastAmended: (
    event: React.ChangeEvent<{ value: unknown }>
  ) => void;
  lastAmendedOptions: { name: string; value: string }[];
}> = ({
  lastAmended,
  handleChangeLastAmended,
  lastAmendedOptions,
}) => {
  const classes = useToolbarStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="last-amended">
          LastAmended
          </InputLabel>
          <Select
            labelId="last-amended"
            id="last-amended-select"
            value={lastAmended}
            onChange={handleChangeLastAmended}
            className={classes.selectEmpty}
          >
            {lastAmendedOptions.map((el) => {
              return (
                <MenuItem key={el.value} value={el.value}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {lastAmended === "between" && (
        <LastAmendedBetweenSelection />
      )}
      {lastAmended === "is" && <LastAmendedIsSelection />}
      {lastAmended === "from" && <LastAmendedFromSelection />}
      {lastAmended === "to" && <LastAmendedToSelection />}
    </Grid>
  );
};
export default LastAmended;
