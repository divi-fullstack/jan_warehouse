import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';
import LoopIcon from '@material-ui/icons/Loop';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ClearIcon from '@material-ui/icons/Clear';
import DescriptionIcon from '@material-ui/icons/Description';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PrintIcon from '@material-ui/icons/Print';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PostAddIcon from '@material-ui/icons/PostAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
 paddingTop:theme.spacing(1),
 paddingLeft:theme.spacing(1)
  }
  })
);
export default function PurchaseOrderOptions(){

    const buttonOption = [
    {icon:<AddCircleIcon/>,data:'New Order'},
    {icon:<AddCircleIcon/>,data:'New Return'},
    {icon:<CreateIcon/>,data:'Amend'},
    {icon:<CreateIcon/>,data:'Amend Order Status'},
    {icon:<CreateIcon/>,data:'Amend Return Status'},
    {icon:<SupervisorAccountIcon/>,data:'Authorise'},
    {icon:<CreateIcon/>,data:'Amend Purchase Order Notification'},
    {icon:<PrintIcon/>,data:'Print Orders'},
    {icon:<PrintIcon/>,data:'Print Returns'},
    {icon:<CheckBoxIcon/>,data:'Confirm Goods Received'},
    {icon:<LocalShippingIcon/>,data:'Dispatch'},
    {icon:<PostAddIcon/>,data:'Post'},
    {icon:<VisibilityIcon/>,data:'View'},
    {icon:<DescriptionIcon/>,data:'Enquiries'},
    {icon:<DescriptionIcon/>,data:'Reports'},
    {icon:<LoopIcon/>,data:'Refresh List'},
    {icon:<SwapVertIcon/>,data:'Swap'},
    {icon:<ClearIcon/>,data:'Clear'}
    ]
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    {buttonOption.map(option=>{
                        return(
                            <Button>
                        <Grid container direction="column" alignItems="center">
                           {option.icon}
                            {option.data} 
                        </Grid>
                     </Button>
                        )
                    })}
             </Grid>
        </div>
    );
}
