import React from "react"
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import siteJson from '../../textJsonData/site.json'
const Copyright: React.FC<{}> = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {siteJson.site.copyright}
            <Link color="inherit" href="#">
                {siteJson.site.title}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Copyright