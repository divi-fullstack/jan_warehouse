import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    }),
);
const Documents: React.FC<{}> = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            Documents
        </div>
    )
}
export default Documents