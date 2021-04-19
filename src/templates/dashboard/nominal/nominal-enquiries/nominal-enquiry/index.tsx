import React from "react";
import { makeStyles, createStyles, Theme,useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import General from "./General";
import Analysis from "./Analysis";
import Budgets from "./Budgets";
import Attachments from "./Attachments";
import Memos from "./Memo";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    NEHeader: {
      padding: theme.spacing(2),
      fontWeight: "bold",
    },
    selectTab: {
      border:'0.5px solid black',
      padding:theme.spacing(1)
    },
    inputFieldWrapper: {paddingLeft:theme.spacing(4)},
    label: {
      width: "15%",
      fontSize: "15px",
      fontWeight:'bold',
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    tableWrapper:{

    }
  })
);

export default function NominalEnquirey() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid  spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.NEHeader}>Account Selection</Typography>
          <div className={classes.inputFieldWrapper}>
            <label className={classes.label}>Code :</label>
            <Select id='code-dropdown' className={classes.selectTab}>
              <MenuItem value=''></MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
              <MenuItem value={"data data data data"}>data data data data</MenuItem>
            </Select>
            <TextField id='code-consolidated' variant='outlined' />
            <TextField id='code-consolidated' variant='outlined' />
            <TextField id='code-consolidated' variant='outlined' />
            <TextField id='code-consolidated' variant='outlined' />
          </div>
        </Grid>
        <Grid item xs={12}>
        <AppBar position="static" color="default" style={{width:'100%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tableWrapper}
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Analysis" {...a11yProps(1)} />
          <Tab label="Budgets" {...a11yProps(2)} />
          <Tab label="Attachments" {...a11yProps(3)} />
          <Tab label="Memo" {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
      <General/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Analysis/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Budgets/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Attachments/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <Memos/>
        </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
