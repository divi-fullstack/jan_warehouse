import React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

// importing all three child components
import Cost_Center from './Cost_Center'
import Costcenter_Department from './Costcenter_Department'
import Department from './Department'
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
        width:'20%',
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
    },
    table: {
    minWidth: 650,
    },
    renderWrapper:{
        padding:theme.spacing(3)
    }
}),);

const CreateAccountDepartment : React.FC < {} > = () => {
    const classes = useStyles();
    const [render,setRender]=React.useState('0')

    function changeHandler(){
        if(render=='0'){
            return <Cost_Center/>
        }
        else if(render=='1'){
            return <Department/>
        }
        else if(render=='2'){
            return <Costcenter_Department/>
        }
    }

    return ( <> <div className={classes.accountsWrapper}>
        <Typography className={classes.title}>Generate Type :
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Generate For :</label>
                <Select
                    id="code-dropdown"
                    className={classes.selectTab}
                    onChange={(e) => {
                    setRender((e.target as any).value)
                }}>
                    <MenuItem value={'0'}>Cost Centre</MenuItem>
                    <MenuItem value={'1'}>Department</MenuItem>
                    <MenuItem value={'2'}>Cost Centre And Department</MenuItem>
                </Select>
            </div>
                
        </form>

        <div className={classes.renderWrapper}>
            {changeHandler()}
        </div>

        <div>
            <Button variant="contained" className={classes.buttonWrapper}>Ok</Button>
            <Button variant="contained" color="primary" className={classes.buttonWrapper}>
                Cancel
            </Button>
        </div>
    </div> </>
    )
}
export default CreateAccountDepartment