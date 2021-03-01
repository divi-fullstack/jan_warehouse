import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useLocation } from "react-router-dom";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import { history } from "../../utils/history"

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'


const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {
      "& .MuiListItemIcon-root":{
        minWidth:34
      },
      "& .MuiListItemText-inset":{
        paddingLeft:34
      }
    },
    menuItemIcon: {},
  }),
)

// React runtime PropTypes
export const NavItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
}


type NavItemPropTypes = PropTypes.InferProps<typeof NavItemPropTypes>
type NavItemPropsWithoutItems = Omit<NavItemPropTypes, 'items'>

// Improve child items declaration
export type NavItemProps = NavItemPropsWithoutItems & {
  items?: NavItemProps[]
}

const NavItem: React.FC<NavItemProps> = props => {
  const { name, Icon, items = [], link } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false)
  let location = useLocation();
  React.useEffect(() => {
    if(location.pathname === link) {
      setActive(true);
    }
    else {
      setActive(false);
    }
  }, [location]);

  function handleClick() {
    setOpen(!open)
  }
  function handleLinkClick(link: string) {
    history.push(link);
  }
  const MenuItemRoot = (
    <>
      {!link
        ?
        <ListItem dense button className={classes.menuItem} onClick={handleClick} selected={active} >
          {/* Display an icon if any */}
          {!!Icon && (
            <ListItemIcon className={classes.menuItemIcon}>
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText primary={name} inset={!Icon} />
          {/* Display the expand menu if the item has children */}
          {isExpandable && !open && <IconExpandMore />}
          {isExpandable && open && <IconExpandLess />}
        </ListItem> :
        <ListItem dense button className={classes.menuItem} onClick={() => handleLinkClick(link)} selected={active}>
          {/* Display an icon if any */}
          {!!Icon && (
            <ListItemIcon className={classes.menuItemIcon}>
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText primary={name} inset={!Icon} />
          {/* Display the expand menu if the item has children */}
          {isExpandable && !open && <IconExpandMore />}
          {isExpandable && open && <IconExpandLess />}
        </ListItem>}
    </>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <NavItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

NavItem.propTypes = NavItemPropTypes


export default NavItem
