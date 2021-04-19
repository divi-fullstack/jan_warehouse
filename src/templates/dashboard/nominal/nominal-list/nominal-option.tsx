import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';
import LoopIcon from '@material-ui/icons/Loop';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ClearIcon from '@material-ui/icons/Clear';
import DescriptionIcon from '@material-ui/icons/Description';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
 paddingTop:theme.spacing(1),
 paddingLeft:theme.spacing(1)
  }
  })
);
export default function NominalOption(){

    const buttonOption = [
    {icon:<AddCircleIcon/>,data:'New Account'},
    {icon:<CreateIcon/>,data:'Amend Account'},
    {icon:<AssignmentIcon/>,data:'Journal'},
    {icon:<ImportContactsIcon/>,data:'Account Enquiry'},
    {icon:<ReceiptIcon/>,data:'Transaction Enquiry'},
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