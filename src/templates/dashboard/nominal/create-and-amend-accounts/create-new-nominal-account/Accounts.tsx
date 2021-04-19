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
            margin: theme.spacing(1),
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
    }
}),);

const Accounts : React.FC < {} > = () => {
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
                <label className={classes.label}>Cost Center :</label>
                <TextField id="cost-center" variant="outlined"/>
                <Select id="cost-center-dropdown" className={classes.selectTab}>
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={'1 Sales'}>1 Sales</MenuItem>
                    <MenuItem value={'2 Sales'}>2 Sales</MenuItem>
                    <MenuItem value={'3 Sales'}>3 Sales</MenuItem>
                </Select>
            </div>
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Department :</label>
                <TextField id="department" variant="outlined"/>
                <Select id="department-dropdown" className={classes.selectTab}>
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={'1 Sales'}>1 Sales</MenuItem>
                    <MenuItem value={'2 Sales'}>2 Sales</MenuItem>
                    <MenuItem value={'3 Sales'}>3 Sales</MenuItem>
                </Select>
            </div>
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Name :</label>
                <TextField id="name" label="Name" variant="outlined"/>
            </div>
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Active Status :</label>

                <Select id="active-dropdown" className={classes.selectTabActive}>

                    <MenuItem value={'Active'}>Active</MenuItem>
                    <MenuItem value={'Hidden'}>Hidden</MenuItem>

                </Select>
            </div>
            <Typography className={classes.title}>Account Settings</Typography>
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Report Category :</label>

                <Select id="report-category-dropdown" className={classes.selectTab}>
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={'1 Sales'}>1 Sales</MenuItem>
                    <MenuItem value={'2 Sales'}>2 Sales</MenuItem>
                    <MenuItem value={'3 Sales'}>3 Sales</MenuItem>
                </Select>
                <TextField id="report-category" variant="outlined"/>
                <TextField id="report-category" variant="outlined"/>

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
            <Typography className={classes.title}>Consolidated Account</Typography>
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Code :</label>

                <Select id="code-dropdown" className={classes.selectTab}>
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={'data data data data'}>data data data data</MenuItem>
                    <MenuItem value={'data data data data'}>data data data data</MenuItem>
                    <MenuItem value={'data data data data'}>data data data data</MenuItem>
                </Select>
                <TextField id="code-consolidated" variant="outlined"/>
                <TextField id="code-consolidated" variant="outlined"/>
                <TextField id="code-consolidated" variant="outlined"/>
                <TextField id="code-consolidated" variant="outlined"/>

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
export default Accounts