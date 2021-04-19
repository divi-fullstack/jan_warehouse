import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FormLabel, Grid,Typography ,TextField,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    titlelabel:{
        fontSize:'20px',
        fontWeight:'bold'
    },
    InputFieldWrapper:{
        paddingTop:theme.spacing(2)
    },
    label:{
    paddingRight:theme.spacing(2),
    fontSize:'20px',
    color:'black',
    lineHeight:'2'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }))

export default function NominalTransactionEnquiry(){
    const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

    const classes = useStyles()
    return (
        <>
        <div className={classes.root}>
<Grid spacing={3}>
    <Grid item xs={12}>
<Typography className={classes.titlelabel}>
    Account Selection
</Typography>
<div className={classes.InputFieldWrapper}>
<FormLabel className={classes.label}>Nominal Account</FormLabel>
<TextField
          
          id="filled-size-small"
    
          variant="outlined"
          
        />
<TextField
          
          id="filled-size-small"
          
          variant="outlined"
        /><TextField
          
        id="filled-size-small"
    
        variant="outlined"
        
      />
      <TextField
          
          id="filled-size-small"
          variant="outlined"

        />
</div>
<Typography className={classes.titlelabel}>
    Transaction Filter
</Typography>
<div className={classes.InputFieldWrapper}>
<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
</div>
    </Grid>
</Grid>
        </div>
        </>
    )
}