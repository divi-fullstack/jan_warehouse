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
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { size } from "../../../../../../ui-variables";
interface Data {
  transType: string;
  transDate: string;
  reference: string;
  secondRef: string;
  value: number;
  allocated: number;
  query: string;
  status: string;
  memo: string;
  user: string;
  source: string;
  urn: number;
}

function createData(
  transType: string,
  transDate: string,
  reference: string,
  secondRef: string,
  value: number,
  allocated: number,
  query: string,
  status: string,
  memo: string,
  user: string,
  source: string,
  urn: number
): Data {
  return {
    transType,
    transDate,
    reference,
    secondRef,
    value,
    allocated,
    query,
    status,
    memo,
    user,
    source,
    urn,
  };
}

const rows = [
  createData(
    "Credit Note",
    "10-12-21",
    "",
    "",
    -66.0,
    0.0,
    "",
    "",
    "",
    "Dakota Rice",
    "Sales",
    12024
  ),
  createData(
    "Credit Note",
    "10-12-21",
    "",
    "",
    -66.0,
    0.0,
    "",
    "",
    "",
    "Dakota Rice",
    "Sales",
    12024
  ),
  createData(
    "Credit Note",
    "10-12-21",
    "",
    "",
    -66.0,
    0.0,
    "",
    "",
    "",
    "Dakota Rice",
    "Sales",
    12024
  ),

  createData(
    "Credit Note",
    "10-12-21",
    "",
    "",
    -66.0,
    0.0,
    "",
    "",
    "",
    "Dakota Rice",
    "Sales",
    12024
  ),
  createData(
    "Credit Note",
    "10-12-21",
    "",
    "",
    -66.0,
    0.0,
    "",
    "",
    "",
    "Dakota Rice",
    "Sales",
    12024
  ),
  createData(
    "Credit Note",
    "10-12-21",
    "",
    "",
    -66.0,
    0.0,
    "",
    "",
    "",
    "Dakota Rice",
    "Sales",
    12024
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
    id: "transType",
    numeric: false,
    disablePadding: false,
    label: "Trans. Type",
  },
  {
    id: "transDate",
    numeric: true,
    disablePadding: false,
    label: "Trans. Date",
  },
  { id: "reference", numeric: true, disablePadding: false, label: "Reference" },
  { id: "secondRef", numeric: true, disablePadding: false, label: "2nd Ref." },
  {
    id: "value",
    numeric: true,
    disablePadding: false,
    label: "Value",
  },
  {
    id: "allocated",
    numeric: true,
    disablePadding: false,
    label: "Allocated",
  },
  {
    id: "query",
    numeric: true,
    disablePadding: false,
    label: "Query",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "memo",
    numeric: true,
    disablePadding: false,
    label: "Memo",
  },
  {
    id: "user",
    numeric: true,
    disablePadding: false,
    label: "User",
  },
  {
    id: "source",
    numeric: true,
    disablePadding: false,
    label: "Source",
  },
  {
    id: "urn",
    numeric: true,
    disablePadding: false,
    label: "URN",
  },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
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
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
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
      "& td": {
        whiteSpace: "nowrap",
      },
      "& th": {
        whiteSpace: "nowrap",
      },
    },
    nestedTitle: {
      padding: theme.spacing(0, 2),
      margin: theme.spacing(2, 0),
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

export default function TxnTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("transDate");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h3 id="title" className={classes.nestedTitle}>
              Transactions
            </h3>
          </Grid>
          <Grid item xs={6}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              size={size}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Grid>
        </Grid>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={size}
            aria-label="enhanced table"
          >
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
                    <TableRow hover tabIndex={-1} key={row.urn}>
                      <TableCell component="th" id={labelId} scope="row">
                        {row.transType}
                      </TableCell>
                      <TableCell align="right">{row.transDate}</TableCell>
                      <TableCell align="right">{row.reference}</TableCell>
                      <TableCell align="right">{row.secondRef}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                      <TableCell align="right">{row.allocated}</TableCell>
                      <TableCell align="right">{row.query}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.memo}</TableCell>
                      <TableCell align="right">{row.user}</TableCell>
                      <TableCell align="right">{row.source}</TableCell>
                      <TableCell align="right">{row.urn}</TableCell>
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
