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
    costCentre: {},
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
    inputFieldWrapper: {
        marginTop:theme.spacing(2)
    },
    selectTab: {
        borderBottom: 'none',
        border: '.5px solid rgb(211,211,211,0.7)',
        width:'15%',
        height:'30px',
        paddingLeft:theme.spacing(1)
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
    }
}),);

const Cost_Center : React.FC < {} > = () => {
        const classes = useStyles();
        
return (
    
    <>
    
        <div className={classes.costCentre}>
                    <Typography className={classes.title}>Cost Centre Details :
                    </Typography>

                    <div className={classes.inputFieldWrapper}>
                        <label className={classes.label}>Code :</label>
                        <TextField
                            className={classes.inputwraper}
                            id="code-consolidated"
                            variant="outlined"/>
                    </div>

                    <div className={classes.inputFieldWrapper}>
                        <label className={classes.label}>Name :</label>
                        <TextField
                            className={classes.inputwraper}
                            id="code-consolidated"
                            variant="outlined"/>
                    </div>

            <div className={classes.inputFieldWrapper}>

                <label className={classes.label}>Source :</label>
                <Select
                    id="code-dropdown"
                    className={classes.selectTab}>
                    <MenuItem value={'ADM'}>Administration</MenuItem>
                    <MenuItem value={'BIR'}>Birmingham</MenuItem>
                    <MenuItem value={'INS'}>Installation/De</MenuItem>
                    <MenuItem value={'LON'}>London</MenuItem>
                    <MenuItem value={'MAN'}>Manchester</MenuItem>
                    <MenuItem value={'RFT'}>Retail Outlet</MenuItem>
                    <MenuItem value={'SAI'}>Factory Warehouse</MenuItem>
                    <MenuItem value={'SCO'}>Scotland</MenuItem>
                </Select>
            </div>
        </div>
    </>
)
};

export default Cost_Center;
