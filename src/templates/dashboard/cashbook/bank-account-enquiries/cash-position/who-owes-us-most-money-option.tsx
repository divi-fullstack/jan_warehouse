import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import LoopIcon from "@material-ui/icons/Loop";
import { Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  })
);
export default function TransactionOption() {
  const buttonOption = [
    { icon: <AddCircleIcon />, data: "Actions" },
    { icon: <AssignmentIcon />, data: "Exports" },
    { icon: <ReceiptIcon />, data: "Print" },
    { icon: <LoopIcon />, data: "Refresh" },
  ];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Who Owes Us Most Money</Typography>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
        {buttonOption.map((option) => {
          return (
            <Button>
              <Grid container direction='column' alignItems='center'>
                {option.icon}
                {option.data}
              </Grid>
            </Button>
          );
        })}
      </Grid>
    </div>
  );
}
