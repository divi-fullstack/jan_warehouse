import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography ,Divider} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',

      '& > *': {
        margin: theme.spacing(1),
        width: '50%',
        paddingTop:theme.spacing(2),

      },
    },
    detailWrapper:{
        display:'flex',
        alignContent:'space-around',
        paddingTop:theme.spacing(1),
        borderBottom:'0.5px solid #000',
        
    },
    value:{
        width:'50%',
        paddingLeft:theme.spacing(10),
        fontSize:'15px',
        textTransform:'uppercase'
    }
  }),
);

export default function SimplePaper() {
  const classes = useStyles();
const data=[
    {title:'code',value:'2100'},
    {title:'cost center',value:''},
    {title:'department',value:''},
    {title:'transaction type',value:'General'},
    {title:'transaction Date',value:'03/11/2021'},
    {title:'credit value',value:'360.00'},
    {title:'debit value',value:'0.00'},
    {title:'document credit value',value:'360.00'},
    {title:'document debit value',value:'0.00'},
    {title:'document currency',value:'Pound Stering'},
    {title:'document rate',value:'1.00000'},
    {title:'reference',value:'pur/nov/c2'},
    {title:'narrative',value:'PI/CON002'},
    {title:'posted date',value:'05/08/2021'},
    {title:'transaction analysis',value:''},
    {title:'user',value:'1 slobhan winter'},
    {title:'source',value:'purchase ledger'},
    {title:'urn',value:'1308'}

]
  return (
    <div className={classes.root}>
      
      <Paper>
          {data.map((d,i)=>{
return(
    <div className={classes.detailWrapper} key={i}>
    <Typography className={classes.value}>
        {d.title}
    </Typography>
    <Typography className={classes.value}>
        {d.value}
    </Typography>
    </div>
)
          })}
     
          
      </Paper>
    </div>
  );
}