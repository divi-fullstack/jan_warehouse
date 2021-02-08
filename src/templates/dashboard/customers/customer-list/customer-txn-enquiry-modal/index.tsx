import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Grid } from "@material-ui/core";
import TxnTable from "./txn-table";
import { margin } from "../../../../../ui-variables";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
    table: {
      minWidth: 650,
    },
    modal: {
      width: "80vw",
      maxHeight: "85vh",
      overflowY: "auto",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    tableWrapper: {
      marginTop: theme.spacing(2),
    },
    heading: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    modalparent: {
      display: "flex",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "center",
    },
    modalfooter: {
      display: "flex",
      justifyContent: "flex-end",
      "& > button:not(:first-child)": {
        marginLeft: 15,
      },
      marginTop: 15,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const CustomerTxnEnquiryModal: React.FC<{
  open: boolean;
  handleModal: any;
}> = ({ open, handleModal }) => {
  const classes = useStyles();

  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      onClose={() => handleModal(false)}
      open={open}
      className={classes.modalparent}
    >
      <div className={classes.modal}>
        <h3 id="title">Customer Details</h3>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <FormControl className={classes.formControl} margin={margin}>
              <InputLabel shrink id="code">
                Code
              </InputLabel>
              <Select
                labelId="code"
                id="code-select"
                className={classes.selectEmpty}
              >
                <MenuItem value={"A1D002"}>A1D002</MenuItem>
                <MenuItem value={"A1D003"}>A1D003</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} margin={margin}>
              <InputLabel shrink id="shortname">
                Short name
              </InputLabel>
              <Select
                labelId="shortname"
                id="shortname-select"
                className={classes.selectEmpty}
              >
                <MenuItem value={"A2Desig"}>A2Desig</MenuItem>
                <MenuItem value={"A3Desig"}>A3Desig</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} margin={margin}>
              <InputLabel shrink id="postcode">
                Postcode
              </InputLabel>
              <Select
                labelId="postcode"
                id="postcode-select"
                className={classes.selectEmpty}
              >
                <MenuItem value={"BP127HT"}>BP127HT</MenuItem>
                <MenuItem value={"BP138HT"}>BP138HT</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="address"
              label="Address"
              style={{ margin: 8 }}
              placeholder="Address"
              fullWidth
              margin={margin}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="creditlimit"
              label="Credit Limit £"
              style={{ margin: 8 }}
              placeholder="Credit Limit"
              fullWidth
              margin={margin}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="balance"
              label="Balance £"
              style={{ margin: 8 }}
              placeholder="Balance"
              fullWidth
              margin={margin}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.tableWrapper}>
              <TxnTable />
            </div>
          </Grid>
        </Grid>
        </div>
    </Modal>
  );
};

export default CustomerTxnEnquiryModal;
