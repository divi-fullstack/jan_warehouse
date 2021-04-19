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

const Annual_budget : React.FC < {} > = () => {
    const classes = useStyles();

    const rowhandler = (ro : any) =>
    {
        console.log(ro);
    }



    function changeHandler(v : any) {
        console.log(v);
    }

    return ( <> <div className={classes.accountsWrapper}>
          <div className={classes.inputFieldWrapper}>
                    <label className={classes.label}>Annual Budget :</label>
                    <TextField
                        className={classes.inputwraper}
                        id="code-consolidated"
                        variant="outlined"/>

                </div>

                <div className={classes.inputFieldWrapper}>
                    <label className={classes.label}>Year to date Budget :</label>
                    <TextField
                        className={classes.inputwraper}
                        id="code-consolidated"
                        variant="outlined"/>

                </div>
            
                    <div
                    style={{
                    height: 400,
                    width: '100%'
                }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        onRowSelected={(row) => {
                        rowhandler(row)
                    }}/>
                </div>


    </div> </>
    )
}
export default Annual_budget