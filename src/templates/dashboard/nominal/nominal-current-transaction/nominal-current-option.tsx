import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DescriptionIcon from '@material-ui/icons/Description';
import LoopIcon from '@material-ui/icons/Loop';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ClearIcon from '@material-ui/icons/Clear';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
 paddingTop:theme.spacing(1),
 paddingLeft:theme.spacing(1)
  },
  buttonWrap:{
fontSize:'8px',
width:'55px'
  }
  })
);
export default function NominalCurrentOption(){

    const buttonOption = [
    {icon:<ReceiptIcon/>,data:'Amend Transaction Account'},
    {icon:<ReceiptIcon/>,data:'Correct Transactions'},
    {icon:<MenuBookIcon/>,data:'New Account'},
    {icon:<MenuBookIcon/>,data:'Amend Account'},
    {icon:<DescriptionIcon/>,data:'Day Book Report'},
    {icon:<DescriptionIcon/>,data:'Manual Journal Listing'},
    {icon:<DescriptionIcon/>,data:'Non-trading VaTable Transaction'},
    {icon:<DescriptionIcon/>,data:'Previous Year Journal Listing'},
    {icon:<DescriptionIcon/>,data:'Transaction Listing (Current)'},
    {icon:<DescriptionIcon/>,data:'URN Report (Current)'},
    {icon:<DescriptionIcon/>,data:'VAT Transactions (By Period)'},
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
                        <Grid container direction="column" alignItems="center" className={classes.buttonWrap}>
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