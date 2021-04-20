import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import Grid from "@material-ui/core/Grid";
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
    inputFieldWrapper: {
      marginBottom: theme.spacing(2),
      display: "flex",
    },
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

const AccountDeatils: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.accountsWrapper}>
        <form className={classes.root} noValidate autoComplete='off'>
          <Typography className={classes.title}>Account Details</Typography>
          <Grid item>
            <Grid lg={12} item>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Account Number :</label>
                <TextField id='AccountNumber' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Account Name :</label>
                <TextField id='AccountName' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Account Type :</label>
                <TextField id='AccountType' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Account Currency :</label>
                <TextField id='Accountcurrency' variant='outlined' size='small' />
              </div>{" "}
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>IBAN :</label>
                <TextField id='Iban' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>BIC/Swift Number :</label>
                <TextField id='swift number' variant='outlined' size='small' />
              </div>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item lg={6}>
              <Typography className={classes.title}>Balance Information</Typography>

              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Account Balance :</label>
                <TextField id='AccountBalance' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Base Currency Balance :</label>
                <TextField id='baseCurrency' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Overdraft Lmt :</label>
                <TextField id='OverdraftLmt' variant='outlined' size='small' />
              </div>
            </Grid>
            <Grid item lg={6}>
              <Typography className={classes.title}>Nominal Account</Typography>

              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Bank Account :</label>
                <TextField id='bankaccount' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Bank Charges :</label>
                <TextField id='Bankcharges' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Exchange difference :</label>
                <TextField id='exchange difference' variant='outlined' size='small' />
              </div>
            </Grid>
          </Grid>
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
export default AccountDeatils;
