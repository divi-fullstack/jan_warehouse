import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

interface Data {
  account: string;
  outstandingValue: string;
  outstandingValue2: string;
  daysOverDue: string;
  goodValueCurrent: string;
  goodValue: string;
  allocatedValueCurrent: string;
  allocatedValue: string;
  outstandingValue3: string;
  outstandingValue4: string;
  transactionDate: string;
  transactionDueDate: string;
  transactiontype: string;
  goodsValueBase: string;
  goodsValueBase2: string;
}

function createData(
  account: string,
  outstandingValue: string,
  outstandingValue2: string,
  daysOverDue: string,
  goodValueCurrent: string,
  goodValue: string,
  allocatedValueCurrent: string,
  allocatedValue: string,
  outstandingValue3: string,
  outstandingValue4: string,
  transactionDate: string,
  transactionDueDate: string,
  transactiontype: string,
  goodsValueBase: string,
  goodsValueBase2: string
): Data {
  return {
    account,
    outstandingValue,
    outstandingValue2,
    daysOverDue,
    goodValueCurrent,
    goodValue,
    allocatedValueCurrent,
    allocatedValue,
    outstandingValue3,
    outstandingValue4,
    transactionDate,
    transactionDueDate,
    transactiontype,
    goodsValueBase,
    goodsValueBase2,
  };
}

const rows = [createData("", "", "", "", "", "", "", "", "", "", "", "", "", "", "")];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  {
    id: "account",
    numeric: false,
    disablePadding: false,
    label: "Mears Insurance",
  },
  {
    id: "outstandingValue",
    numeric: false,
    disablePadding: false,
    label: "Outstanding Value",
  },
  {
    id: "outstandingValue2",
    numeric: false,
    disablePadding: false,
    label: "Outstanding value ",
  },
  {
    id: "daysOverDue",
    numeric: false,
    disablePadding: false,
    label: "Days Over Due",
  },
  {
    id: "goodValueCurrent",
    numeric: false,
    disablePadding: false,
    label: "Good value Current",
  },
  {
    id: "goodValue",
    numeric: false,
    disablePadding: false,
    label: "Good Values",
  },
  {
    id: "allocatedValueCurrent",
    numeric: false,
    disablePadding: false,
    label: "Allocated Value Current",
  },
  {
    id: "allocatedValue",
    numeric: false,
    disablePadding: false,
    label: "Allocated Value",
  },
  {
    id: "outstandingValue3",
    numeric: false,
    disablePadding: false,
    label: "Outstanding Value ",
  },
  {
    id: "outstandingValue4",
    numeric: false,
    disablePadding: false,
    label: "Outstanding Value",
  },
  {
    id: "transactionDate",
    numeric: false,
    disablePadding: false,
    label: "Transaction Date",
  },
  {
    id: "transactiontype",
    numeric: false,
    disablePadding: false,
    label: "Transaction Type",
  },
  {
    id: "goodsValueBase",
    numeric: false,
    disablePadding: false,
    label: "Good value base",
  },
  {
    id: "goodsValueBase2",
    numeric: false,
    disablePadding: false,
    label: "Good Value Base",
  },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

export default function NominalListTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("transactionDate");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby='tableTitle'
            size={"medium"}
            aria-label='enhanced table'>
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1}>
                      <TableCell component='th' id={labelId} scope='row'>
                        {row.account}
                      </TableCell>
                      <TableCell align='right'>{row.outstandingValue}</TableCell>
                      <TableCell align='right'>{row.outstandingValue2}</TableCell>
                      <TableCell align='right'>{row.daysOverDue}</TableCell>
                      <TableCell align='right'>{row.goodValueCurrent}</TableCell>
                      <TableCell align='right'>{row.goodValue}</TableCell>
                      <TableCell align='right'>{row.allocatedValueCurrent}</TableCell>
                      <TableCell align='right'>{row.allocatedValue}</TableCell>
                      <TableCell align='right'>{row.outstandingValue3}</TableCell>
                      <TableCell align='right'>{row.outstandingValue4}</TableCell>
                      <TableCell align='right'>{row.transactionDate}</TableCell>
                      <TableCell align='right'>{row.transactionDueDate}</TableCell>
                      <TableCell align='right'>{row.transactiontype}</TableCell>
                      <TableCell align='right'>{row.goodsValueBase}</TableCell>
                      <TableCell align='right'>{row.goodsValueBase2}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
