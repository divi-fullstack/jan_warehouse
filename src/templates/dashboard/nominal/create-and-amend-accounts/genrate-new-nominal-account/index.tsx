import React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme : Theme) => createStyles({
    root: {
        '& > *': {
            display: 'flex',
            flexDirection: 'row',
            margin: theme.spacing(2),
            width: '100%'
        }
    },
    accountsWrapper: {},
    title: {
        textAlign: 'left',
        fontSize: '17px',
        fontWeight: 'bold'
    },
    label: {
        width: '15%',
        fontSize: '15px',
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2)
    },
    inputFieldWrapper: {},
    selectTab: {
        borderBottom: 'none',
        border: '.5px solid rgb(211,211,211,0.7)',
    },
     selectTabActive: {
        borderBottom: 'none',
        border: '.5px solid rgb(211,211,211,0.7)',
        width:'100px'
    },
    buttonWrapper:{
        margin:theme.spacing(3)
    },
inputwraper: {marginLeft:theme.spacing(2)}
}),);

const GenrateNewNominal : React.FC < {} > = () => {
    const classes = useStyles();

    return (
     <>
     <div className={classes.accountsWrapper}>
        <Typography className={classes.title}>Account Selection</Typography>
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Code :</label>
                <TextField id="code" label="Code" variant="outlined"/>
            </div>
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Default name :</label>
                <TextField id="cost-center" variant="outlined" label="Default name :"/>
            </div>

            <Typography className={classes.title}>Account Option :</Typography>

             <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Default Report Category :</label>
                <TextField id="code-consolidated" variant="outlined"/>
                <Select id="code-dropdown" className={classes.selectTab}>
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={'data data data data'}>data data data data</MenuItem>
                    <MenuItem value={'data data data data'}>data data data data</MenuItem>
                    <MenuItem value={'data data data data'}>data data data data</MenuItem>
                </Select>
                <TextField className={classes.inputwraper} id="code-consolidated" variant="outlined"/>
                <TextField className={classes.inputwraper} id="code-consolidated" variant="outlined"/>
            </div>
              <div className={classes.inputFieldWrapper}>
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{
                    'aria-label': 'secondary checkbox'
                }}/>
                <Typography style={{
                    paddingTop: '10px'
                }}>Allow Manual journal Entries</Typography>

            </div>
        </form>
    <div>
             <Button variant="contained"  className={classes.buttonWrapper}>Clear</Button>
      <Button variant="contained" color="primary"  className={classes.buttonWrapper}>
        Save
      </Button>
    </div>
    </div> 
</>
    )
}
export default GenrateNewNominal