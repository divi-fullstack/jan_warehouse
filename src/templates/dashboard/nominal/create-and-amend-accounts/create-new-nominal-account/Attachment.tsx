import React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {DataGrid, ColDef} from '@material-ui/data-grid';
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
        field: 'filename',
        headerName: 'Filename',
        width: 110
    }, {
        field: 'description',
        headerName: 'Description',
        width: 130
    }, {
        field: 'status',
        headerName: 'Status',
        width: 80
    }, {
        field: 'filetype',
        headerName: 'Filetype',
        width: 85
    }, {
        field: 'filesize',
        headerName: 'Filesize',
        width: 85
    }, {
        field: 'date',
        headerName: 'Date Modified',
        width: 120
    }, {
        field: 'time',
        headerName: 'Time Modified',
        width: 120
    }, {
        field: 'link',
        headerName: 'Link',
        width: 70
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
    }
];

const Attachment : React.FC < {} > = () => {
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
                <Typography className={classes.title}>Attachment :
                </Typography>
                
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

                <Button   component="label" variant="contained" className={classes.buttonWrapper}>
  Upload File
  <input
    type="file"
    hidden
  />
               </Button>
                <Button   component="label" variant="contained" color="primary" className={classes.buttonWrapper}>
  Upload Link
  <input
    type="file"
    hidden
  />
               </Button>
               <Button   component="label" variant="contained" color="secondary" className={classes.buttonWrapper}>
  Upload Folder
  <input
    type="file"
    hidden
  />
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
                        <h4>Modal</h4>
            
                    </div>
                </Fade>
            </Modal>

            
        </React.Fragment>
    )
}
export default Attachment