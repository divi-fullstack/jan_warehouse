import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
    root: {
        width: "100%",
        justifyContent:"space-between",
        "& > div > button:not(:first-child)":{
            marginLeft:15
        }
    },
});
const BottomDrower: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const classes = useStyles();

    return (<BottomNavigation className={classes.root}>
        {children}
    </BottomNavigation>)
}
export default BottomDrower