import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import BottomDrower from "../../../../../../components/bottom-navigation";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        table: {
            minWidth: 650,
        },
        heading: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: '100%',
        },

        wrapcountry : {
            display:"flex",



        },

        formControlInline :{
            margin: theme.spacing(1),
            minWidth: 150,
        },

        formControlInput :{

            
        },
        labelterms:{
            "& .MuiFormControlLabel-label" :{
   
               color: 'rgba(0, 0, 0, 0.54)',
                 fontSize:14,
       
   
            }  
           }

    }),
);
const Trading: React.FC<{}> = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                    <Grid item xs={6} md={4} sm={6}>
                        <h3 className={classes.heading}>Trading Details</h3>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="country">
                                Country Code
                    </InputLabel>
                            <Select
                                labelId="country"
                                id="country-select"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'91'}>+91</MenuItem>
                                <MenuItem value={'90'}>+90</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="country">
                                Default Vat Code
                    </InputLabel>
                            <Select
                                labelId="vat"
                                id="vat-select"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'91'}>+91</MenuItem>
                                <MenuItem value={'90'}>+90</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="vatnumber"
                            label="Vat Number"
                            style={{ margin: 8 }}
                            placeholder="vat number"
                            fullWidth
                            margin="dense"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="currency">
                                Other Priority
                    </InputLabel>
                            <Select
                                labelId="priority"
                                id="priority-select"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'priority1'}>abc</MenuItem>
                                <MenuItem value={'priority2'}>sdf</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>



                        <TextField
                            id="vatnumber"
                            label="D-U-N-S number"
                            style={{ margin: 8 }}
                            placeholder=""
                            fullWidth
                            margin="dense"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormControlLabel className={classes.labelterms}
                            control={
                                <Checkbox

                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="use VAT Code as invoice and order default"
                        />


                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} sm={6}>
                    <h3 className={classes.heading}>Default Nominal Code</h3>
                    <div className={classes.wrapcountry}> 

                 
                        <FormControl className={classes.formControlInline}>
                            <InputLabel shrink id="country">
                                Country Code
                    </InputLabel>
                            <Select
                                labelId="country"
                                id="country-select"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'91'}>+91</MenuItem>
                                <MenuItem value={'90'}>+90</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField className={(classes.formControlInput,classes.formControlInline)} id="standard-basic" label="Default" />
                        <TextField className={(classes.formControlInput,classes.formControlInline)}  id="standard-basic" label="Default" />
                        <TextField className={(classes.formControlInput,classes.formControlInline)} id="standard-basic" label="Sales North" />
                        </div>

                 
                </Grid>

                <Grid item xs={12} md={9} sm={12}>
                    <h3 className={classes.heading}>Analysis Codes</h3>
                    <Grid item xs={12} md={12} sm={12}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Value</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={0}>
                                        <TableCell component="td" scope="row">
                                            Cust. Type
                                        </TableCell>
                                        <TableCell></TableCell>

                                    </TableRow>
                                    <TableRow key={1}>
                                        <TableCell component="td" scope="row">
                                            Resp. Rep
                                        </TableCell>
                                        <TableCell></TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} sm={12}>
                    <BottomDrower>
                        <div></div>
                        <div>
                            <Button variant="contained">
                                Clear
                        </Button>
                            <Button variant="contained" color="primary">
                                Save
                        </Button>
                        </div>
                    </BottomDrower>
                </Grid>
            </Grid>

        </div>
    )
}
export default Trading