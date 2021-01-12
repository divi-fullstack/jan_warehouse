import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  menutitle: {
    padding: '0',
    fontWeight: 600,
    cursor: 'pointer',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 13,
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
      fontSize: 18,
      cursor: 'inherit',
    }
  }
}));
const NavWrapper: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <ul className={classes.root}>
      <li className={classes.menutitle} onClick={handleCollapse} title={title}>{!collapsed ? <FolderIcon /> : <FolderOpenIcon />}<label>{title}</label></li>
      {collapsed && <>{children}</>}
    </ul>
  );
};
export default NavWrapper;
