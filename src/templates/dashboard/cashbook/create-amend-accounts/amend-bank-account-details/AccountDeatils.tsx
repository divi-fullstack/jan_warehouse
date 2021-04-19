import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
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
          <Typography className={classes.title}>Account</Typography>
          <Grid item>
            <Grid lg={6} item>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Code :</label>
                <TextField id='code' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Active Status :</label>

                <Select id='active-dropdown' className={classes.selectTabActive}>
                  <MenuItem value={"Active"}>Active</MenuItem>
                  <MenuItem value={"Hidden"}>Hidden</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid lg={6} item>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Description :</label>
                <TextField id='code' variant='outlined' size='small' />
              </div>
            </Grid>
          </Grid>
          <Typography className={classes.title}>Bank Details</Typography>

          <Grid item>
            <Grid item lg={6}>
              {" "}
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Active Type :</label>

                <Select id='active-dropdown' className={classes.selectTabActive}>
                  <MenuItem value={"Current"}>Current</MenuItem>
                  <MenuItem value={"Savings"}>Savings</MenuItem>
                </Select>
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Account Number :</label>
                <TextField id='Account Number' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Sort Code :</label>
                <TextField id='Sort Code' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Account Name :</label>
                <TextField id='Account Name' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Active Currency :</label>

                <Select id='active-dropdown' className={classes.selectTabActive}>
                  <MenuItem value={"Currency 1"}>Currency 1</MenuItem>
                  <MenuItem value={"Currency 2"}>Currency 1</MenuItem>
                  <MenuItem value={"Currency 3"}>Currency 1</MenuItem>
                  <MenuItem value={"Currency 4"}>Currency 1</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item lg={6}>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Last Statement Date :</label>
                <TextField id='Last Statement Date' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Balance :</label>
                <TextField id='Balance' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Base Currency Balance :</label>
                <TextField id='Base Currency Balance' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>OverDraft Amt :</label>
                <TextField id='OverDraft Amt' variant='outlined' size='small' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>BAN :</label>
                <TextField id='Ban' size='small' variant='outlined' />
              </div>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>BICI Swift Number :</label>
                <TextField id='BICI Swift Number' variant='outlined' size='small' />
              </div>
            </Grid>
          </Grid>

          <Typography className={classes.title}>Nominal Acccounts</Typography>
          <Grid item>
            <Grid item lg={12}>
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Bank Account :</label>

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
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Bank Charges :</label>

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
              <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Exchange Differences :</label>

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
          </Grid>
        </form>

        <div>
          <Button variant='contained' className={classes.buttonWrapper}>
            Clear
          </Button>
          <Button variant='contained' color='primary' className={classes.buttonWrapper}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};
export default AccountDeatils;
