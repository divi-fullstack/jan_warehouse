import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography'
import Table1 from './table1'
import Table2 from './table2'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor:'#f5f5f5'
    },
    componentWrapper: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    nominalHeader:{
      backgroundColor:'#000',
    },
    nominalHeaderTypo:{
      color:'#ffff',
      padding:theme.spacing(1),
      textAlign:'left',
      fontSize:'13px'
    },
    nominalOption:{

    }
  }),
);
const NominalList: React.FC<{}> = () => {
     const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nominalHeader}>
        <Typography className={classes.nominalHeaderTypo}>
            Nominal Current Index Enquiry
        </Typography>
      </div>
      <div className={classes.componentWrapper}>
          <Typography>
              Current Transactions
          </Typography>
          <Table1/>
      </div>
      <div className={classes.componentWrapper}>
          <Typography>
              Associated Nominal Postings
          </Typography>
          <Table2/>
      </div>
    </div>
  );
}

export default NominalList;
