import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../ui-variables";
import IsSelection from "./is-selection";
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
const CountrySelection: React.FC<{
  countrySelected: string;
  countrySelectionhandleChange: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  countrySelectionOptions: { name: string; value: string }[];
}> = ({
  countrySelected,
  countrySelectionhandleChange,
  countrySelectionOptions,
}) => {
  const classes = useToolbarStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="country">
            Country
          </InputLabel>
          <Select
            labelId="country"
            id="country-select"
            className={classes.selectEmpty}
            value={countrySelected}
            onChange={countrySelectionhandleChange}
          >
            {countrySelectionOptions.map(
              (el: { name: string; value: string }) => {
                return (
                  <MenuItem key={el.value} value={el.value}>
                    {el.name}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </Grid>
      {countrySelected === "is" && <IsSelection />}
      {countrySelected === "in" && <InSelection />}
    </Grid>
  );
};
export default CountrySelection;
