import React, { useState } from "react";
import PageInternalHeader from "../../../../../components/page-internal-header";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BottomDrower from "../../../../../components/bottom-navigation";
import Button from "@material-ui/core/Button";
import { size } from "../../../../../ui-variables";
import ACRef from "../../../../../components/criteria-components/ac-ref";
import ShortName from "../../../../../components/criteria-components/shortname";
import CurrencySelection from "../../../../../components/criteria-components/currency";
import CountrySelection from "../../../../../components/criteria-components/country";
import BalanceSelection from "../../../../../components/criteria-components/balance";
import LastAmended from "../../../../../components/criteria-components/last-amended";
import LastTransaction from "../../../../../components/criteria-components/last-transaction";
import OnHold from "../../../../../components/criteria-components/on-hold";
import ActiveStatus from "../../../../../components/criteria-components/active-status";
import Customer from "../../../../../components/criteria-components/customer";
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    tableWrapper: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(2),
    },
    heading: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
    bottomDrowerWrapper: {
      padding: theme.spacing(0, 3),
    },
  })
);
const menuItems = [{ name: "Dashboard", link: "/dashboard" }];
const ListOfAccounts: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [acRefSelected, setAcRefSelected] = useState("all");
  const [shortNameSelected, setShortNameSelected] = useState("all");
  const [currencySelected, setCurrencySelected] = useState("all");
  const [countrySelected, setCountrySelected] = useState("all");
  const [selectedBalance, setSelectedBalance] = useState("all");
  const [lastTransaction, setLastTransaction] = useState("all");
  const [lastAmended, setLastAmended] = useState("all");
  const [selectedOnHold, setSelectedOnHold] = useState("all");
  const [selectedActiveStatus, setSelectedActiveStatus] = useState("all");
  const [customerSelected, setCustomerSelected] = useState("all");

  const customerHandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCustomerSelected(event.target.value as string);
  };
  const handleChangeActiveStatus = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedActiveStatus(event.target.value as string);
  };

  const handleChangeOnHold = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedOnHold(event.target.value as string);
  };
  const handleChangeLastTransaction = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setLastTransaction(event.target.value as string);
  };

  const handleChangeLastAmended = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setLastAmended(event.target.value as string);
  };

  const handleChangeBalance = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedBalance(event.target.value as string);
  };

  const countrySelectionhandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCountrySelected(event.target.value as string);
  };
  const currencySelectionhandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCurrencySelected(event.target.value as string);
  };
  const shortNamehandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setShortNameSelected(event.target.value as string);
  };
  const acRefhandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAcRefSelected(event.target.value as string);
  };
  const activeStatusOptions = [
    { name: "All", value: "all" },
    { name: "Is", value: "is" },
  ];
  const onHoldOptions = [
    { name: "All", value: "all" },
    { name: "Is", value: "is" },
  ];
  const lastTransactionOption = [
    { name: "All", value: "all" },
    { name: "Between", value: "between" },
    { name: "Is", value: "is" },
    { name: "From", value: "from" },
    { name: "To", value: "to" },
  ];
  const lastAmendedOptions = [
    { name: "All", value: "all" },
    { name: "Between", value: "between" },
    { name: "Is", value: "is" },
    { name: "From", value: "from" },
    { name: "To", value: "to" },
  ];
  const balanceOptions = [
    { name: "All", value: "all" },
    { name: "Between", value: "between" },
    { name: "Is", value: "is" },
    { name: "From", value: "from" },
    { name: "To", value: "to" },
  ];
  const countrySelectionOptions = [
    { name: "All", value: "all" },
    { name: "Is", value: "is" },
    { name: "In", value: "in" },
  ];
  const currencySelectionOptions = [
    { name: "All", value: "all" },
    { name: "Is", value: "is" },
    { name: "In", value: "in" },
  ];
  const customerOptions = [
    { name: "All", value: "all" },
    { name: "Between", value: "between" },
    { name: "Is", value: "is" },
    { name: "From", value: "from" },
    { name: "To", value: "to" },
    { name: "In", value: "in" },
  ];
  const shortNameOptions = [
    { name: "All", value: "all" },
    { name: "Between", value: "between" },
    { name: "Is", value: "is" },
    { name: "From", value: "from" },
    { name: "To", value: "to" },
    { name: "In", value: "in" },
  ];
  const acRefOptions = [
    { name: "All", value: "all" },
    { name: "Between", value: "between" },
    { name: "Is", value: "is" },
    { name: "From", value: "from" },
    { name: "To", value: "to" },
    { name: "In", value: "in" },
  ];

  const reset = () => {
    setAcRefSelected("all");
    setShortNameSelected("all");
    setCurrencySelected("all");
    setCountrySelected("all");
    setSelectedBalance("all");
    setLastTransaction("all");
    setLastAmended("all");
    setSelectedOnHold("all");
    setSelectedActiveStatus("all");
    setCustomerSelected("all");
  };
  return (
    <div className={classes.root}>
      <PageInternalHeader
        title="Criteria for Sales Ledger List of Accounts"
        menuItems={menuItems}
      />
      <div className={classes.tableWrapper}>
        <h3 className={classes.heading}>Criteria Values</h3>
        <ACRef
          acRefSelected={acRefSelected}
          acRefhandleChange={acRefhandleChange}
          acRefOptions={acRefOptions}
        />
        <ShortName
          shortNameSelected={shortNameSelected}
          shortNamehandleChange={shortNamehandleChange}
          shortNameOptions={shortNameOptions}
        />
        <CurrencySelection
          currencySelected={currencySelected}
          currencySelectionhandleChange={currencySelectionhandleChange}
          currencySelectionOptions={currencySelectionOptions}
        />
        <CountrySelection
          countrySelectionOptions={countrySelectionOptions}
          countrySelectionhandleChange={countrySelectionhandleChange}
          countrySelected={countrySelected}
        />
        <BalanceSelection
          balanceOptions={balanceOptions}
          selectedBalance={selectedBalance}
          handleChangeBalance={handleChangeBalance}
        />
        <LastAmended
          lastAmended={lastAmended}
          handleChangeLastAmended={handleChangeLastAmended}
          lastAmendedOptions={lastAmendedOptions}
        />
        <LastTransaction
          lastTransaction={lastTransaction}
          handleChangeLastTransaction={handleChangeLastTransaction}
          lastTransactionOptions={lastTransactionOption}
        />
        <OnHold
          selectedOnHold={selectedOnHold}
          handleChangeOnHold={handleChangeOnHold}
          onHoldOptions={onHoldOptions}
        />
        <ActiveStatus
          selectedActiveStatus={selectedActiveStatus}
          handleChangeActiveStatus={handleChangeActiveStatus}
          activeStatusOptions={activeStatusOptions}
        />
        <Customer
          customerOptions={customerOptions}
          customerHandleChange={customerHandleChange}
          customerSelected={customerSelected}
        />
      </div>
      <Grid container>
        <Grid item md={12}>
          <BottomDrower>
            <div className={classes.bottomDrowerWrapper}>
              <Button variant="contained" size={size} color="primary">
                Generate List of Accounts
              </Button>
              <Button variant="contained" size={size} onClick={reset}>
                Reset
              </Button>
            </div>
            <div></div>
          </BottomDrower>
        </Grid>
      </Grid>
    </div>
  );
};
export default ListOfAccounts;
