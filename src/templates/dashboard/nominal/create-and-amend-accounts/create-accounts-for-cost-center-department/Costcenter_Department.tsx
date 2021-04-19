import React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme : Theme) => createStyles({
    root: {
        '& > *': {
            display: 'flex',
            flexDirection: 'row',
            margin: theme.spacing(2),
            width: '100%'
        }
    },
    title: {
        textAlign: 'left',
        fontSize: '17px',
        fontWeight: 'bold',
        paddingLeft: theme.spacing(2)
    },
    label: {
        width: '15%',
        fontSize: '15px',
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(3)
    },
    inputFieldWrapper: {
        marginTop: theme.spacing(2)
    },
    selectTab: {
        width: '20%',
        height: '30px',
        borderBottom: 'none',
        border: '.5px solid rgb(211,211,211,0.7)',
        marginLeft:theme.spacing(1)
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

const Costcenter_Department : React.FC < {} > = () => {
    const classes = useStyles();
    return (
 <>
     <div>
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
            <Select id="code-dropdown" className={classes.selectTab}>
                <MenuItem value={'1'}>Sales</MenuItem>
                <MenuItem value={'2'}>Purchasing</MenuItem>
                <MenuItem value={'3'}>Accounts</MenuItem>
                <MenuItem value={'4'}>Admin</MenuItem>
                <MenuItem value={'5'}>Marketing</MenuItem>
                <MenuItem value={'6'}>Installation</MenuItem>
                <MenuItem value={'7'}>Workshop</MenuItem>
            </Select>
        </div>
        <Typography className={classes.title}>Department Details :
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
            <Select id="code-dropdown" className={classes.selectTab}>
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

export default Costcenter_Department;