import React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography'
const useStyles = makeStyles((theme : Theme) => createStyles({
    root: {
         
            margin: theme.spacing(1),
            width: '100%'
        },
}),);

const AnalysisCode: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
             
            </div>
        </React.Fragment>
    )
}
export default AnalysisCode