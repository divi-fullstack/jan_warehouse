import React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme : Theme) => createStyles({
    root: {

        margin: theme.spacing(1),
        width: '100%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
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
    },
    table: {
        minWidth: 650
    }
}),);

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

const Memo : React.FC < {} > = () => {
    const classes = useStyles();
    const [open,
        setOpen] = React.useState(false);
    const [row,setRow]=React.useState('')
    console.log(row);

    var deleteIcon = (
        <Button variant="contained" color="primary" className={classes.buttonWrapper}>
            Add Memo
        </Button>
    );

    const rowhandler = (ro : any) => {
        setRow(ro);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Typography className={classes.title}>Add New Memo :
                </Typography>
                <div className={classes.inputFieldWrapper}>
                    <label className={classes.label}>Memo Text :</label>
                    <TextField
                        className={classes.inputwraper}
                        id="code-consolidated"
                        variant="outlined"/>
                    <Button variant="contained" color="primary" className={classes.buttonWrapper}>
                        Add Memo
                    </Button>
                </div>
                <hr/>
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

                <Button variant="contained" color="primary" className={classes.buttonWrapper}>
                    Edit
                </Button>
                <Button variant="contained" color="secondary" className={classes.buttonWrapper}>
                    Delete
                </Button>

            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500
            }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>{}</label>
                <TextField id="code" label="Code" variant="outlined" />
            </div>
            <div className={classes.inputFieldWrapper}>
                <label className={classes.label}>Default name :</label>
                <TextField id="cost-center" variant="outlined" label="Default name :"/>
            </div>

                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    )
}
export default Memo