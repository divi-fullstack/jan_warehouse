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
  code: string;
  shortName: string;
  name: string;
  balance: number;
  creditLimit: number;
  contactName: string;
  contactEmail: string;
  contactTelephone: string;
}

function createData(
  code: string,
  shortName: string,
  name: string,
  balance: number,
  creditLimit: number,
  contactName: string,
  contactEmail: string,
  contactTelephone: string
): Data {
  return {
    code,
    shortName,
    name,
    balance,
    creditLimit,
    contactName,
    contactEmail,
    contactTelephone,
  };
}

const rows = [
  createData(
    "AASH001",
    "ACash and",
    "ACash and Credit Card Sales",
    100.88,
    75487.25,
    "A Jan",
    "djan@gmail.com",
    "19985878754"
  ),
  createData(
    "BASH001",
    "BCash and",
    "BCash and Credit Card Sales",
    2400.88,
    75487.25,
    "B Jan",
    "njan@gmail.com",
    "09985878754"
  ),
  createData(
    "CASH001",
    "CCash and",
    "CCash and Credit Card Sales",
    3400.88,
    75487.25,
    "C Jan",
    "tjan@gmail.com",
    "09985878754"
  ),
  createData(
    "DASH001",
    "DCash and",
    "DCash and Credit Card Sales",
    5400.88,
    75487.25,
    "D Jan",
    "ljan@gmail.com",
    "09985878754"
  ),
  createData(
    "EASH001",
    "ECash and",
    "ECash and Credit Card Sales",
    8400.88,
    75487.25,
    "E Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "FASH001",
    "FCash and",
    "FCash and Credit Card Sales",
    4400.88,
    75487.25,
    "F Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "GASH001",
    "GCash and",
    "GCash and Credit Card Sales",
    8400.88,
    75487.25,
    "G Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "HASH001",
    "HCash and",
    "HCash and Credit Card Sales",
    400.88,
    75487.25,
    "H Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "IASH001",
    "ICash and",
    "ICash and Credit Card Sales",
    9400.88,
    75487.25,
    "I Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "JASH001",
    "JCash and",
    "JCash and Credit Card Sales",
    7400.88,
    75487.25,
    "J Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "KASH001",
    "KCash and",
    "KCash and Credit Card Sales",
    2400.88,
    75487.25,
    "K Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "LASH001",
    "LCash and",
    "LCash and Credit Card Sales",
    8400.88,
    75487.25,
    "L Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "MASH001",
    "MCash and",
    "MCash and Credit Card Sales",
    7400.88,
    75487.25,
    "M Jan",
    "jan@gmail.com",
    "09985878754"
  ),
  createData(
    "NASH001",
    "NCash and",
    "NCash and Credit Card Sales",
    400.88,
    75487.25,
    "N Jan",
    "jan@gmail.com",
    "09985878754"
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
    id: "code",
    numeric: false,
    disablePadding: false,
    label: "Code",
  },
  {
    id: "shortName",
    numeric: true,
    disablePadding: false,
    label: "Short Name",
  },
  { id: "name", numeric: true, disablePadding: false, label: "Name" },
  { id: "balance", numeric: true, disablePadding: false, label: "Balance" },
  {
    id: "creditLimit",
    numeric: true,
    disablePadding: false,
    label: "Credit limit",
  },
  {
    id: "contactName",
    numeric: true,
    disablePadding: false,
    label: "Contact Name",
  },
  {
    id: "contactEmail",
    numeric: true,
    disablePadding: false,
    label: "Contact Email",
  },
  {
    id: "contactTelephone",
    numeric: true,
    disablePadding: false,
    label: "Contact Telephone",
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

export default function CustomerListTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
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
                    <TableRow hover tabIndex={-1} key={row.code}>
                      <TableCell component="th" id={labelId} scope="row">
                        {row.code}
                      </TableCell>
                      <TableCell align="right">{row.shortName}</TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.balance}</TableCell>
                      <TableCell align="right">{row.creditLimit}</TableCell>
                      <TableCell align="right">{row.contactName}</TableCell>
                      <TableCell align="right">{row.contactEmail}</TableCell>
                      <TableCell align="right">
                        {row.contactTelephone}
                      </TableCell>
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
