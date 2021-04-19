import React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';


import Button from '@material-ui/core/Button';


const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Id',
        width: 60
    }, {
        field: 'Created',
        headerName: 'Created',
        width: 130
    }, {
        field: 'Last_Updated',
        headerName: 'Last Updated',
        width: 130
    }, {
        field: 'User',
        headerName: 'User',
        width: 130
    }, {
        field: 'Text',
        headerName: 'Text',
        width: 250
    }, {
        field: 'Active',
        headerName: 'Active',
        width: 130
    }
];

const rows = [
    {
        id: 1,
        Created: 1,
        Last_Updated: 1,
        User: 'Snow',
        Text: 'Jon',
        Active: true
    }, {
        id: 2,
        Created: 2,
        Last_Updated: 2,
        User: 'Lannister',
        Text: 'Cersei',
        Active: false
    }, {
        id: 3,
        Created: 3,
        Last_Updated: 3,
        User: 'Lannister',
        Text: 'Jaime',
        Active: false
    }, {
        id: 4,
        Created: 4,
        Last_Updated: 4,
        User: 'Stark',
        Text: 'Arya',
        Active: true
    }, {
        id: 5,
        Created: 5,
        Last_Updated: 5,
        User: 'Targaryen',
        Text: 'Daenerys',
        Active: null
    }, {
        id: 6,
        Created: 6,
        Last_Updated: 6,
        User: 'Melisandre',
        Text: null,
        Active: true
    }, {
        id: 7,
        Created: 7,
        Last_Updated: 7,
        User: 'Clifford',
        Text: 'Ferrara',
        Active: false
    }, {
        id: 8,
        Created: 8,
        Last_Updated: 8,
        User: 'Frances',
        Text: 'Rossini',
        Active: true
    }, {
        id: 9,
        Created: 9,
        Last_Updated: 9,
        User: 'Roxie',
        Text: 'Harvey',
        Active: true
    }
];


const coldef : ColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 60
    }, {
        field: 'PN',
        headerName: 'PN',
        width: 130
    }, {
        field: 'budget_year',
        headerName: 'Budget Year',
        width: 130
    }, 
];

const rowdef = [
    {
        id: 1,
        PN: 10,
        Budget_year: 2010,
        
    }, {
        id: 2,
        PN: 20,
        Budget_year: 2011,
        
    },{
        id: 3,
        PN: 30,
        Budget_year: 2012,
        
    }, {
        id: 4,
        PN: 40,
        Budget_year: 2013,
        
    }, {
        id: 5,
        PN: 50,
        Budget_year: 2014,
        
    }, 
    
];



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
    inputFieldWrapper: {
        margin: '10px 10px'
    },
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
        marginLeft: theme.spacing(2),
    },table: {
    minWidth: 650,
  }
}),);

const Budget_future : React.FC < {} > = () => {
    const classes = useStyles();


    function changeHandler(v : any) {
        console.log(v);
    }

    const typechangeHandler = (v:any) =>
    {
        console.log(v);
    }

    return ( <> <div className={classes.accountsWrapper}>
        <div className={classes.accountsWrapper}>
                    <Typography className={classes.title}> Period Values :
                    </Typography>

                        <div className={classes.inputFieldWrapper}>

                <label className={classes.label}>Budget Year :</label>
                <Select
                    id="code-dropdown"
                    className={classes.selectTab}
                    onChange={(e) => {
                    changeHandler(e.target.value)
                }}>
                    {/* <MenuItem value="" >Select One</MenuItem> */}

                    <MenuItem value={'0'}>Current Year +1</MenuItem>
                    <MenuItem value={'1'}>Current Year +2</MenuItem>
                    <MenuItem value={'2'}>Current Year +3</MenuItem>
                    <MenuItem value={'3'}>Current Year +4</MenuItem>
                    <MenuItem value={'3'}>Current Year +5</MenuItem>

                </Select>
            </div>

            <div className={classes.inputFieldWrapper}>

                <label className={classes.label}>Budget Type :</label>
                <Select
                    id="code-dropdown"
                    className={classes.selectTab}
                    onChange={(e) => {
                    typechangeHandler(e.target.value)
                }}>
                    {/* <MenuItem value="" >Select One</MenuItem> */}

                    <MenuItem value={'0'}>No Budget</MenuItem>
                    <MenuItem value={'1'}>Monthly Budget</MenuItem>
                    <MenuItem value={'2'}>Annual Budget</MenuItem>

                </Select>
            </div>

            <div className={classes.inputFieldWrapper}>
                    <label className={classes.label}>Annual Budget :</label>
                    <TextField
                        className={classes.inputwraper}
                        id="code-consolidated"
                        variant="outlined"/>
                        <br/>
                    <Button variant="contained" color="primary" className={classes.buttonWrapper}>
                        Save
                    </Button>
                </div>
            
                    
                </div>
                <Typography className={classes.title}> Budget This Year :
                    </Typography>

                <div
                    style={{
                    height: 400,
                    width: '40%',
                    display: 'inline-flex'
                }}>
                    <DataGrid
                        rows={rowdef}
                        columns={coldef}
                        pageSize={5}
                        />
                </div>

                {/* <Typography className={classes.title}> Budget This Year(+1) :
                    </Typography> */}

                <div
                    style={{
                    height: 400,
                    width: '60%',
                    display: 'inline-flex'
                }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        />
                </div>

    </div> </>
    )
}
export default Budget_future