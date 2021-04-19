import React from 'react';
import Accounts from './Accounts'
import Memos from './Memos'
import Analysis from './AnalysisCode'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Budgetyear from './budget_year/Budget_year';
import Budgetfuture from './Budget_future/Budget_future'
import Attachment from './Attachment'

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tableWrapper:{
    width: '100%',
  }
}));

export default function CreateNewNominalAccount() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tableWrapper}
        >
          <Tab label="Account" {...a11yProps(0)} />
          <Tab label="Analysis" {...a11yProps(1)} />
          <Tab label="Budget this Year" {...a11yProps(2)} />
          <Tab label="Budget Future Year" {...a11yProps(3)} />
          <Tab label="Attachments" {...a11yProps(4)} />
          <Tab label="Memos" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Accounts/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Analysis/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Budgetyear/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Budgetfuture/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Attachment/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Memos/>
        </TabPanel>
    
    </div>
  );
}
