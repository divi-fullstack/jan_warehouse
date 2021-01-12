import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import dashboardJson from "../../textJsonData/dashboard.json"
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    "& .message": {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      "& h1": {
        margin: '0 0 50px 0',
      }
    }
  }
}));

const Dashboard: React.FC<{}> = () => {
  const classes = useStyles()
  return (

    <div className={classes.root}>
      <div className="message">
        <h1>{dashboardJson.dashboard.welcomeMessage}</h1>
      </div>
    </div>

  )
};
export default Dashboard;
