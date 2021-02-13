import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../../ui-variables";
import customerData from "../../../../textJsonData/salesData.json";
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
const BetweenSelection: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [selectedFirstInput, setSelectedFirstInput] = React.useState("");
  const [selectedSecondInput, setSelectedSecondInput] = React.useState("");
  const fromSelectionFirstInputHandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedFirstInput(event.target.value as string);
  };
  const fromSelectionSecondInputHandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedSecondInput(event.target.value as string);
  };
  return (
    <>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="shortname">
            First Shortname
          </InputLabel>
          <Select
            labelId="shortname"
            id="shortname-select"
            value={selectedFirstInput}
            onChange={fromSelectionFirstInputHandleChange}
            className={classes.selectEmpty}
          >
            {customerData.map((el) => {
              return <MenuItem value={el.Code}>{el.Code}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <FormControl className={classes.formControl} margin={margin}>
          <InputLabel shrink id="shortname">
           Second Shortname
          </InputLabel>
          <Select
            labelId="shortname"
            id="shortname-select"
            value={selectedSecondInput}
            onChange={fromSelectionSecondInputHandleChange}
            className={classes.selectEmpty}
          >
            {customerData.map((el) => {
              return <MenuItem value={el.Code}>{el.Code}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};
export default BetweenSelection;
