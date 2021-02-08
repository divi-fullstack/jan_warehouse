import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { margin } from "../../../../../../../ui-variables";
import transactionTypes from "../../../../../../../textJsonData/transactionTypes.json";
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
const TransTypeIsSelection: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [isSelected, setIsSelected] = useState("");
  const isSelectHandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setIsSelected(event.target.value as string);
  };

  return (
    <Grid item xs={12} md={3} sm={6}>
      <FormControl className={classes.formControl} margin={margin}>
        <InputLabel shrink id="is-trans-type">
          Is Trans Type
        </InputLabel>
        <Select
          labelId="is-trans-type"
          id="is-trans-type-select"
          value={isSelected}
          onChange={isSelectHandleChange}
        >
          {transactionTypes.map((el) => {
            return (
              <MenuItem key={el.value} value={el.value}>
                {el.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};
export default TransTypeIsSelection;
