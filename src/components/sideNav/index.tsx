import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavWrapper from "../NavWrapper";
import NavItem from "../NavItem";
import siteJson from "../../textJsonData/site.json";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: 0,
    top: 0,
    width: 200,
    height: "100vh",
    overflowY: "auto",
    backgroundColor: "#c1c1c1",
    paddingLeft: 15,
    paddingRight: 15,
    "& .heading-wrapper": {
      marginLeft: -15,
      marginRight: -15,
      padding: 15,
      borderBottom: "2px solid #000",
      "& .site-title": {
        fontSize: 20,
        margin: 0,
        color: "#000000",
      },
    },
  },
}));

const SideNav: React.FC<any> = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <div className="heading-wrapper">
        <h1 className="site-title">{siteJson.site.title}</h1>
      </div>
      <div className="navigation-wrapper">
        <NavWrapper title="roottest">
          <NavItem title="Home" active={false} link="/" />
        </NavWrapper>
      </div>
    </nav>
  );
};
export default SideNav;
