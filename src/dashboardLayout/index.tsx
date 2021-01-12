import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideNav from "../components/sideNav";
const useStyles = makeStyles((theme) => ({
  root: {},
  pageSection: {
    marginLeft: 230,
    height: "100vh",
    overflowY: "auto",
  },
}));
  
const DashboardLayout: React.FC<{ rootClasses: string, children: React.ReactNode }> = ({ rootClasses, children }) => {
  const classes = useStyles();
  return (
    <main className={`wrapper ${rootClasses} ${classes.root}`}>
      <SideNav/>
      <div className={`page-section ${classes.pageSection}`}>{children}</div>
    </main>
  );
};
export default DashboardLayout;
