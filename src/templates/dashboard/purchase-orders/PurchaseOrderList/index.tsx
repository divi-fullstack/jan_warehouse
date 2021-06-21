import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography'
import PurchaseOrderList from './PurchaseOrderList'
import PurchaseOrderOptions from './PurchaseOrderOptions'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor:'#f5f5f5'
    },
    tableWrapper: {
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
            Purchase Orders
        </Typography>
      </div>
      <div className={classes.nominalOption}>
        <PurchaseOrderOptions/>
      </div>
      <div className={classes.tableWrapper}>
        <PurchaseOrderList />
      </div>
    </div>
  );
}

export default NominalList;
