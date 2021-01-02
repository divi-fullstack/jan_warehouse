import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {},
}));
const NavItem: React.FC<{ title: String; active: Boolean; link: String }> = ({
  title,
  active,
  link,
}) => {
  const classes = useStyles();
  return (
    <li className={`${classes.root} ${active ? `active` : ``}`}>
      <Link to={link}>{title}</Link>
    </li>
  );
};
export default NavItem;
