import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      padding: '3px 15px 3px 23px',
      textDecoration: "none",
      fontWeight: 400,
      color: "#313131",
      marginBottom: 1,
      fontSize: 12,
      display: 'flex',
      alignItems: 'center',
      "& label": {
        marginLeft: 5,
        cursor: 'inherit',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      "& svg": {
        fontSize: 20,
        cursor: 'inherit',
      }
    },
    "& a:hover": {
      fontWeight: 500,
    },
  },
  nestedlist:{
    paddingLeft:23,
  }
}));
const NavItem: React.FC<{ title?: string; active?: boolean; link?: string, children?: React.ReactNode }> = ({
  title,
  active,
  link,
  children
}) => {
  const classes = useStyles();
  return (
    <>
      {!children && link ? <li className={`${classes.root} ${active ? `active` : ``}`}>
        <Link to={link} title={title}><PlaylistAddCheckIcon /> <label>{title}</label></Link>
      </li> :
        <li className={classes.nestedlist}>{children}</li>}
    </>
  );
};
export default NavItem;
