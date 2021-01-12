import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    }),
);
const Attachments: React.FC<{}> = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            Attachments
        </div>
    )
}
export default Attachments