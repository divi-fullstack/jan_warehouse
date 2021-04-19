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
        border: '.5px solid rgb(211,211,211,0.7)'
    },
    selectTabActive: {
        borderBottom: 'none',
        border: '.5px solid rgb(211,211,211,0.7)',
        width: '100px'
    },
    buttonWrapper: {
        margin: theme.spacing(3)
    },
    inputwraper: {
        marginLeft: theme.spacing(2)
    },table: {
    minWidth: 650,
  }
}),);

const Budget_year : React.FC < {} > = () => {
    const classes = useStyles();


    function changeHandler(v : any) {
        console.log(v);
    }

    return ( <> <div className={classes.accountsWrapper}>
        <div className={classes.accountsWrapper}>
                    <Typography className={classes.title}> Period Values :
                    </Typography>

                        <div className={classes.inputFieldWrapper}>

                <label className={classes.label}>Budget Type :</label>
                <Select
                    id="code-dropdown"
                    className={classes.selectTab}
                    onChange={(e) => {
                    changeHandler(e.target.value)
                }}>
                    {/* <MenuItem value="" >Select One</MenuItem> */}

                    <MenuItem value={'0'}>No Budget</MenuItem>
                    <MenuItem value={'1'}>Monthly Budget</MenuItem>
                    <MenuItem value={'2'}>Annual Budget</MenuItem>
                    <MenuItem value={'3'}>Profiled Budget</MenuItem>

                </Select>
            </div>
            
                    
                </div>

    </div> </>
    )
}
export default Budget_year