import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const NavWrapper: React.FC<any> = ({ children, title }) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li className="title">{title}</li>
      <>{children}</>
    </ul>
  );
};
export default NavWrapper;
