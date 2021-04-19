import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// importing the child components
import Account from './Account'
import Analysis from './Analysis'
import BudgetThisYear from './BudgetThisYear'
import BudgetFutureYear from './BudgetFutureYear';
import Attachment from './Attachment'
import Memo from './Memo'
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
}));

function AmendNominalAccount() {
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
          <Account/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Analysis/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <BudgetThisYear/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
         <BudgetFutureYear/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Attachment/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        <Memo/>
        </TabPanel>
    </div>
  );
}

export default AmendNominalAccount