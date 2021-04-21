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
  type: string;
  forecast: string;
  due: string;
  code: string;
  details: string;
  overdue: string;
  query: string;
  include: string;
  receipts: string;
  payments: string;
  balanceForDate: string;
}

function createData(
  type: string,
  forecast: string,
  due: string,
  code: string,
  details: string,
  overdue: string,
  query: string,
  include: string,
  receipts: string,
  payments: string,
  balanceForDate: string
): Data {
  return {
    type,
    forecast,
    due,
    code,
    details,
    overdue,
    query,
    include,
    receipts,
    payments,
    balanceForDate,
  };
}

const rows = [
  createData(
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummmy"
  ),
  createData(
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy"
  ),
  createData(
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummmy",
    "dummy"
  ),
];

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
    id: "type",
    numeric: false,
    disablePadding: false,
    label: "Type",
  },
  {
    id: "forecast",
    numeric: false,
    disablePadding: false,
    label: "Forecast",
  },
  {
    id: "due",
    numeric: false,
    disablePadding: false,
    label: "Code",
  },
  {
    id: "details",
    numeric: false,
    disablePadding: false,
    label: "Details",
  },
  {
    id: "overdue",
    numeric: false,
    disablePadding: false,
    label: "Overdue",
  },
  {
    id: "query",
    numeric: false,
    disablePadding: false,
    label: "Query",
  },
  {
    id: "include",
    numeric: false,
    disablePadding: false,
    label: "include",
  },
  {
    id: "receipts",
    numeric: false,
    disablePadding: false,
    label: "Receipts",
  },
  {
    id: "payments",
    numeric: false,
    disablePadding: false,
    label: "Payments",
  },
  {
    id: "balanceForDate",
    numeric: false,
    disablePadding: false,
    label: "Balance For Date",
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

export default function SummaryTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("type");
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
                        {row.type}
                      </TableCell>
                      <TableCell align='right'>{row.forecast}</TableCell>
                      <TableCell align='right'>{row.due}</TableCell>
                      <TableCell align='right'>{row.code}</TableCell>
                      <TableCell align='right'>{row.details}</TableCell>
                      <TableCell align='right'>{row.overdue}</TableCell>
                      <TableCell align='right'>{row.include}</TableCell>

                      <TableCell align='right'>{row.receipts}</TableCell>
                      <TableCell align='right'>{row.payments}</TableCell>
                      <TableCell align='right'>{row.balanceForDate}</TableCell>
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
