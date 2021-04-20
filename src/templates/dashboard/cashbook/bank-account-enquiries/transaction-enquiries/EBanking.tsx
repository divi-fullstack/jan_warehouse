import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        display: "flex",
        flexDirection: "row",
        margin: theme.spacing(1),
        width: "100%",
      },
    },
    formControl: {},
    accountsWrapper: {},
    title: {
      textAlign: "left",
      fontSize: "17px",
      fontWeight: "bold",
    },
    label: {
      width: "30%",
      fontSize: "15px",
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    inputFieldWrapper: {},
    selectTab: {
      borderBottom: "none",
      border: ".5px solid rgb(211,211,211,0.7)",
    },
    selectTabActive: {
      borderBottom: "none",
      border: ".5px solid rgb(211,211,211,0.7)",
      width: "100px",
    },
    buttonWrapper: {
      margin: theme.spacing(3),
    },
  })
);

const EBanking: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.accountsWrapper}>
        <Typography className={classes.title}>E - Banking Details</Typography>
        <form className={classes.root} noValidate autoComplete='off'>
          <div className={classes.inputFieldWrapper}>
            <label className={classes.label}>E-Banking Service:</label>
            <TextField id='website' variant='outlined' size='small' />
          </div>
          <div className={classes.inputFieldWrapper}>
            <label className={classes.label}>E-Banking Functions:</label>
            <TextField id='website' variant='outlined' size='small' />
          </div>
        </form>
        <div>
          <Button variant='contained' className={classes.buttonWrapper}>
            Transaction Enquiry
          </Button>
          <Button variant='contained' color='primary' className={classes.buttonWrapper}>
            SO/DD Enquiry
          </Button>
          <Button variant='contained' className={classes.buttonWrapper}>
            Bank Feed Rule
          </Button>
          <Button variant='contained' color='primary' className={classes.buttonWrapper}>
            Close
          </Button>
        </div>
      </div>
    </>
  );
};
export default EBanking;
