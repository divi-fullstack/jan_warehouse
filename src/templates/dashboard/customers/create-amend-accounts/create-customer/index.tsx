import React, { useState } from "react"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TabPanel, a11yProps } from '../../../../../components/tabpanel'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Company from "./panels/company";
import Contacts from "./panels/contacts";
import Trading from "./panels/trading";
import Payment from "./panels/payment";
import Credit from "./panels/credit";
import Attachments from "./panels/attachments";
import Alerts from "./panels/alerts";
import Documents from "./panels/documents";
import Memo from "./panels/memo";
import Pricing from "./panels/pricing";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // minWidth: '50vw',
            // backgroundColor: theme.palette.background.paper,
            // border: '2px solid #000',
            // boxShadow: theme.shadows[5],
            paddingTop: theme.spacing(6),
            position: 'relative',
        },
        tabwrapper: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        appbar:{
            marginLeft:240,
            left:0,
            width:'auto'
        }
    }),
);

const CreateCustomer: React.FC<{}> = () => {
    const classes = useStyles()
    const [activetab, setActiveTab] = useState(0);


    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };


    return (
        <div className={classes.root}>

            <AppBar position="fixed" color="default"  className={classes.appbar}>
                <Tabs
                    value={activetab}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Company" {...a11yProps(0)} />
                    <Tab label="Contacts" {...a11yProps(1)} />
                    <Tab label="Trading" {...a11yProps(2)} />
                    <Tab label="Payment" {...a11yProps(3)} />
                    <Tab label="Credit" {...a11yProps(4)} />
                    <Tab label="Documents" {...a11yProps(5)} />
                    <Tab label="Attachments" {...a11yProps(6)} />
                    <Tab label="Memo" {...a11yProps(7)} />
                    <Tab label="Pricing" {...a11yProps(8)} />
                    <Tab label="Alerts" {...a11yProps(9)} />
                </Tabs>
            </AppBar>
            <TabPanel value={activetab} index={0}>
                <Company />
            </TabPanel>
            <TabPanel value={activetab} index={1}>
                <Contacts />
            </TabPanel>
            <TabPanel value={activetab} index={2}>
                <Trading />
            </TabPanel>
            <TabPanel value={activetab} index={3}>
                <Payment />
            </TabPanel>
            <TabPanel value={activetab} index={4}>
                <Credit />
            </TabPanel>
            <TabPanel value={activetab} index={5}>
                <Documents />
            </TabPanel>
            <TabPanel value={activetab} index={6}>
                <Attachments />
            </TabPanel>
            <TabPanel value={activetab} index={7}>
                <Memo />
            </TabPanel>
            <TabPanel value={activetab} index={8}>
                <Pricing />
            </TabPanel>
            <TabPanel value={activetab} index={9}>
                <Alerts />
            </TabPanel>
          
        </div>
    )
}
export default CreateCustomer