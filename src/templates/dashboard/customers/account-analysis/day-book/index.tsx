import React, { useState } from "react";
import PageInternalHeader from "../../../../../components/page-internal-header";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ACRef from "../../../../../components/criteria-components/ac-ref";
import PositioningDate from "../../../../../components/criteria-components/positioning-date";
import TransType from "../../../../../components/criteria-components/trans-type";
import UseNumber from "../../../../../components/criteria-components/use-number";
import Grid from "@material-ui/core/Grid";
import BottomDrower from "../../../../../components/bottom-navigation";
import Button from "@material-ui/core/Button";
import { size } from "../../../../../ui-variables";
import {
  useNumberOptions,
  transTypeOptions,
  acRefOptions,
  positioningDateOptions,
} from "./options";
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
const DayBook: React.FC<{}> = () => {
  const classes = useToolbarStyles();
  const [acRefSelected, setAcRefSelected] = useState("all");
  const [positioningDateSelected, setPositioningDateSelected] = useState("all");
  const [selectedTransType, setSelectedTransType] = useState("all");
  const [selectedUseNumber, setSelectedUseNumber] = useState("all");
  const handleChangeUseNumber = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedUseNumber(event.target.value as string);
  };
  const handleChangeTransType = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedTransType(event.target.value as string);
  };
  const positoningDateHandleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setPositioningDateSelected(event.target.value as string);
  };
  const acRefhandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAcRefSelected(event.target.value as string);
  };

  const reset = () => {
    setAcRefSelected("all");
    setPositioningDateSelected("all");
    setSelectedTransType("all");
    setSelectedUseNumber("all");
  };
  return (
    <div className={classes.root}>
      <PageInternalHeader
        title="Sales Ledger Day Book Report"
        menuItems={menuItems}
      />
      <div className={classes.tableWrapper}>
        <h3 className={classes.heading}>Criteria Values</h3>
        <ACRef
          acRefSelected={acRefSelected}
          acRefhandleChange={acRefhandleChange}
          acRefOptions={acRefOptions}
        />
        <PositioningDate
          positioningDateSelected={positioningDateSelected}
          positoningDateHandleChange={positoningDateHandleChange}
          positioningDateOptions={positioningDateOptions}
        />
        <TransType
          selectedTransType={selectedTransType}
          handleChangeTransType={handleChangeTransType}
          transTypeOptions={transTypeOptions}
        />
        <UseNumber
          selectedUseNumber={selectedUseNumber}
          handleChangeUseNumber={handleChangeUseNumber}
          useNumberOptions={useNumberOptions}
        />
      </div>
      <Grid container>
        <Grid item md={12}>
          <BottomDrower>
            <div className={classes.bottomDrowerWrapper}>
              <Button variant="contained" size={size} color="primary">
                Generate Report
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
export default DayBook;
