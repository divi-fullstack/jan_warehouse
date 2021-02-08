import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../../../../../ui-variables";
import customerData from "../../../../../../../textJsonData/salesData.json";
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
const FromSelection: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [selected, setSelected] = React.useState("");
  const fromSelectionHandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelected(event.target.value as string);
  };
  return (
    <>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="account">
            A/C
          </InputLabel>
          <Select
            labelId="account"
            id="account-select"
            className={classes.selectEmpty}
            value={selected}
            onChange={fromSelectionHandleChange}
          >
            {customerData.map((el) => {
              return (
                <MenuItem key={el.Code} value={el.Code}>
                  {el.Code}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};
export default FromSelection;
