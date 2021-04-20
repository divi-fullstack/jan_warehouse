import React from "react";
import AttachmentsTable from "./AttachmentsTable";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    tableWrapper: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    title: {
      textAlign: "left",
      fontSize: "20px",
      fontWeight: "bold",
    },
    buttonWrapper: {
      margin: theme.spacing(3),
    },
  })
);
const Attachments: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Memos</Typography>
      <div className={classes.tableWrapper}>
        <AttachmentsTable />
      </div>
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
  );
};
export default Attachments;
