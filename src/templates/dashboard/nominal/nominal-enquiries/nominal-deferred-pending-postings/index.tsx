import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography'
import NominalAcccount from './nominal-deferred-table1'
import Budgets from './nominal-deferred-table2'
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
            Nominal Deffered Pending Postings
        </Typography>
      </div>
      <div className={classes.componentWrapper}>
          <Typography>
              Deferred Postings
          </Typography>
          <NominalAcccount/>
      </div>
      <div className={classes.componentWrapper}>
          <Typography>
              Details
          </Typography>
          <Budgets/>
      </div>
    </div>
  );
}

export default NominalList;
