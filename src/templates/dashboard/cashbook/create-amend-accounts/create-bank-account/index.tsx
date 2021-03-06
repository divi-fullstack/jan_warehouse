import React from "react";
import AccountDetails from "./AccountDeatils";
import Memos from "./Memos";
import Contacts from "./Contact";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Attachments from "./Attachments";
import EBanking from "./EBanking";

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
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  tableWrapper: {
    width: "100%",
  },
}));

export default function CreateBankAccount() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
          className={classes.tableWrapper}>
          <Tab label='Account Details' {...a11yProps(0)} />
          <Tab label='Contact' {...a11yProps(1)} />
          <Tab label='Memos' {...a11yProps(2)} />
          <Tab label='Attachments' {...a11yProps(3)} />
          <Tab label='EBanking' {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <AccountDetails />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Contacts />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Memos />
      </TabPanel>

      <TabPanel value={value} index={3} dir={theme.direction}>
        <Attachments />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <EBanking />
      </TabPanel>
    </div>
  );
}
