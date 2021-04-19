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
      width: "20%",
      fontSize: "15px",
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    inputFieldWrapper: { marginBottom: theme.spacing(2), display: "flex" },

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
          <Typography className={classes.title}>Details</Typography>
          <Grid item>
            <Grid item lg={12}>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Name :</label>
                <TextField id='Name' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Address :</label>
                <TextField id='Address' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>City :</label>
                <TextField id='city' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>County :</label>
                <TextField id='county' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>PostCode :</label>
                <TextField id='postoode' variant='outlined' size='small' />
              </div>{" "}
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Country :</label>
                <TextField id='country' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Contact :</label>
                <TextField id='contact' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Telephone :</label>
                <TextField id='telephone' variant='outlined' size='small' />
              </div>
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
            Clear
          </Button>
          <Button variant='contained' color='primary' className={classes.buttonWrapper}>
            Save
          </Button>
          <Button variant='contained' className={classes.buttonWrapper}>
            Close
          </Button>
        </div>
      </div>
    </>
  );
};
export default Contacts;
