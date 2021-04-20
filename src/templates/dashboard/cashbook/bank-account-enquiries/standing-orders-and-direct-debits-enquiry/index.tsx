import React from "react";
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    NEHeader: {
      padding: theme.spacing(2),
      fontWeight: "bold",
    },
    selectTab: {
      border: "0.5px solid grey",
      padding: theme.spacing(0.5),
    },
    inputFieldWrapper: { paddingLeft: theme.spacing(4) },
    label: {
      fontSize: "15px",
      fontWeight: "bold",
      paddingTop: theme.spacing(2),
    },
    tableWrapper: {},
  })
);

export default function StandingOrderAndDebit() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.NEHeader}>Account Selection</Typography>
          <div className={classes.inputFieldWrapper}>
            <label className={classes.label}>Account :</label>
            <Select id='code-dropdown' className={classes.selectTab}>
              <MenuItem value=''></MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
            </Select>
            <TextField id='code-consolidated' variant='outlined' size='small' />
            <TextField id='code-consolidated' variant='outlined' size='small' />
            <TextField id='code-consolidated' variant='outlined' size='small' />
            <TextField id='code-consolidated' variant='outlined' size='small' />
          </div>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
}
