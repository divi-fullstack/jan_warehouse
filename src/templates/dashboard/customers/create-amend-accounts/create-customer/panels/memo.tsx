import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    }),
);
const Memo: React.FC<{}> = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            Memo
        </div>
    )
}
export default Memo