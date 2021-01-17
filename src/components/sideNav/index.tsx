import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavWrapper from "../navWrapper";
import Drawer from '@material-ui/core/Drawer';
import siteJson from "../../textJsonData/site.json";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,

  },
  drawerPaper: {
    width: 240,
    backgroundColor: "#f0f8ff"
  },
  headingWrapper: {
    padding: 16,
    display: "flex",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "& svg": {
      marginRight: 10
    },
    "& .site-title": {
      fontSize: 20,
      margin: 0,
      color: "#000000",
    }
  },
}));


const SideNav: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.headingWrapper}>
          <HomeOutlinedIcon /><h1 className="site-title">{siteJson.site.title}</h1>
        </div>
        <NavWrapper />
      </Drawer>
    </>
  );
}
export default SideNav;
