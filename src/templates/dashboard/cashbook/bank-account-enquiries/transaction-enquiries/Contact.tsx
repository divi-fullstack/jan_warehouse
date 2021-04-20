import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField";

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

const Contacts: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.accountsWrapper}>
        <form className={classes.root} noValidate autoComplete='off'>
          <Typography className={classes.title}>Contact Informations</Typography>
          <Grid item>
            <Grid lg={12} item>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Address :</label>
                <TextField id='address' variant='outlined' size='small' rows={4} />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Contact :</label>
                <TextField id='contact' variant='outlined' size='small' />
              </div>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item lg={12}>
              <Typography className={classes.title}>Telephonic Numbers</Typography>

              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Telephone :</label>
                <TextField id='telephone' variant='outlined' size='small' />
              </div>

              <Typography className={classes.title}>Internet Addresses</Typography>

              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>E Mail :</label>
                <TextField id='email' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Website :</label>
                <TextField id='website' variant='outlined' size='small' />
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
export default Contacts;
