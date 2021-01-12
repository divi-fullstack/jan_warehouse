import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavWrapper from "../navWrapper";
import NavItem from "../navItem";
import siteJson from "../../textJsonData/site.json";
import sidenavJson from "../../textJsonData/navPanel.json"
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: 0,
    top: 0,
    width: 200,
    height: "100vh",
    overflowY: "hidden",
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
      }
    },
    "& .navigation-wrapper": {
      maxHeight: 'calc(100vh - 60px)',
      overflowY: 'auto',
      marginRight: -15,

    }
  },
  nestedlist: {
    paddingLeft: 23,
  }
}));


const SideNav: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <div className="heading-wrapper">
        <h1 className="site-title">{siteJson.site.title}</h1>
      </div>
      <div className="navigation-wrapper">
        {sidenavJson.sidemenu.map(((el, i) => {
          return (<NavWrapper title={el.title} key={`menu-${i}`}>

            {el.items && el.items.map((item, k) => {
              return (
                <>
                  <NavItem key={`menu-item-${k}`} title={item.name} active={false} link={item.link} />
                </>
              );
            })}

            {el.menuitem && el.menuitem.map((menuitem, l) => {
              return (
                <>
                  <li key={`menuitem-${l}`} className={classes.nestedlist}>
                    <NavWrapper title={menuitem.name} key={`menu-${i}`}>
                      {menuitem.items && menuitem.items.map((item, m) => {
                        return (
                          <>
                            <NavItem key={`menu-item-item-${m}-${l}`} title={item.name} active={false} link={item.link} />
                          </>
                        );
                      })}
                    </NavWrapper>
                  </li>
                </>
              );
            })}
          </NavWrapper>);
        }))}
      </div>
    </nav>
  );
}
export default SideNav;
