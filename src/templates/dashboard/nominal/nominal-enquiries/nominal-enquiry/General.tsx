import React from 'react'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title:{
        fontSize:'25px',
        fontWeight:'bold',
        paddingBottom:theme.spacing(2)
    },
    displayData:{
        display:'flex',
        justifyContent:'space-evenly'
    },
    Displaytitle:{
        fontSize:'20px',
        fontWeight:'bold',
        width:'50%'
    },
    displayValue:{
        fontSize:'20px',
        width:'50%'
    }
  })
)
const General : React.FC < {} > = () => {
    const classes = useStyles()
    return(
        <>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography className={classes.title} >
                General Account Information
            </Typography>
            <div className={classes.displayData}>
                <Typography className={classes.Displaytitle}>Report Category :</Typography>
                <Typography className={classes.displayValue}>502 Plant anchincery  Balance Sheet </Typography>
            </div>
            <div className={classes.displayData}>
                <Typography className={classes.Displaytitle}>Allow Manual Journal entries :</Typography>
                <Typography className={classes.displayValue}>Yes</Typography>
            </div>
            <div className={classes.displayData}>
                <Typography className={classes.Displaytitle}>Debit balance year to date :</Typography>
                <Typography className={classes.displayValue}>515.00</Typography>
            </div>
            <div className={classes.displayData}>
                <Typography className={classes.Displaytitle}>Credit balance year to date :</Typography>
                <Typography className={classes.displayValue}>4000.00</Typography>
            </div>
            <div className={classes.displayData}>
                <Typography className={classes.Displaytitle}>Balance year to date :</Typography>
                <Typography className={classes.displayValue}>-3485.00</Typography>
            </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default General
