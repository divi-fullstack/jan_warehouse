import React from 'react'
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid'
import { InputLabel } from '@material-ui/core';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:  {
        margin: theme.spacing(4),
    },
    InputFieldWrapper:{
        display:'flex'
    },
    InputLabel:{
        color:'#000',
        marginTop:'10px',
        lineHeight:'4',
        paddingRight:theme.spacing(2),
        fontSize:'20px',
        width:'10%'
    },
    ButtonRoot:{
        '& > *': {
            margin: theme.spacing(1),
          },
    }
  }),
);
const CashFlow:React.FC<{}>=()=>{
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );
    
      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };
    const classes = useStyles();
    return(
        <div className={classes.root}>
           <Grid spacing={3}>
               <Grid item xs={12}>
                   <form>
                       <div className={classes.InputFieldWrapper}>
                       <InputLabel className={classes.InputLabel} style={{marginTop:'-20px'}}>Layout :</InputLabel>
               <TextField
        
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
                       </div>
                       <div className={classes.InputFieldWrapper}>
                       <InputLabel className={classes.InputLabel}>End Period :</InputLabel>
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
                       <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
                       </MuiPickersUtilsProvider>

         
                       </div>
                       <div className={classes.InputFieldWrapper}>
                       <InputLabel className={classes.InputLabel}>Start Period :</InputLabel>
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
                       <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
                       </MuiPickersUtilsProvider>

                       </div>
                   </form>
               </Grid>
               <div className={classes.ButtonRoot}>
      <Button variant="contained" color="primary">OK</Button>
      <Button variant="contained" color="primary">
        Cancel
      </Button>
      
    </div>
        </Grid> 

        </div>
    )
}

export default CashFlow