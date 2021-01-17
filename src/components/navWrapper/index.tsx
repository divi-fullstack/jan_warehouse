import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { navItems } from "./navItems"
import NavItem from "../navItem"
const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: 240,
    },
    menuItem: {
      width: 240,
    },

  }),
)
const NavWrapper: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {navItems.map((item, index) => (
        <NavItem {...item} key={index} />
      ))}
    </List>
  )
}

export default NavWrapper