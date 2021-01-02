import React from "react";
import SideNav from "../components/sideNav";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
  pageSection: {
    marginLeft: 230,
    height: "100vh",
    overflowY: "auto",
  },
}));

const Layout: React.FC<any> = ({ rootClasses, children }) => {
  const classes = useStyles();
  return (
    <main className={`wrapper ${rootClasses} ${classes.root}`}>
      <SideNav />
      <div className={`page-section ${classes.pageSection}`}>{children}</div>
    </main>
  );
};
export default Layout;
