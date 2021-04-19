import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
interface Data {
  code: number;
  costcenter: string;
  department: string;
  accountname: string;
  transaactiondate: string;
  narrative:string;
  debitvalue:string;
  creditvalue:string;
  reference:number;
  source:string;
}

function createData(
  code: number,
  costcenter: string,
  department: string,
  accountname: string,
  transaactiondate: string,
  narrative:string,
  debitvalue:string,
  creditvalue:string,
  reference:number,
  source:string,
): Data {
  return { code,costcenter,department,accountname,transaactiondate,narrative,debitvalue
  ,creditvalue,reference,source };
}

const rows = [
  createData(2200,'','','Sales Tac Cont','28.12.2021','DIMM 64mb 10','0.00','37.69',69,'Salary'),
  createData(2200,'','','Sales Tac Cont','28.12.2021','DIMM 64mb 10','0.00','37.69',69,'Salary'),
  createData(2200,'','','Sales Tac Cont','28.12.2021','DIMM 64mb 10','0.00','37.69',69,'Salary'),
  createData(2200,'','','Sales Tac Cont','28.12.2021','DIMM 64mb 10','0.00','37.69',69,'Salary'),
  createData(2200,'','','Sales Tac Cont','28.12.2021','DIMM 64mb 10','0.00','37.69',69,'Salary'),
  createData(2200,'','','Sales Tac Cont','28.12.2021','DIMM 64mb 10','0.00','37.69',69,'Salary'), 
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

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
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
  { id: 'code', numeric: false, disablePadding: true, label: 'Code' },
  { id: 'costcenter', numeric: true, disablePadding: false, label: 'Cost Center' },
  { id: 'department', numeric: true, disablePadding: false, label: 'Departments' },
  { id: 'accountname', numeric: true, disablePadding: false, label: 'Account Name' },
  { id: 'transaactiondate', numeric: true, disablePadding: false, label: 'Transaction Date' },
  { id: 'narrative', numeric: true, disablePadding: false, label: 'Narrative' },
  { id: 'debitvalue', numeric: true, disablePadding: false, label: 'Debit Value' },
  { id: 'creditvalue', numeric: true, disablePadding: false, label: 'Credit Value' },
  { id: 'reference', numeric: true, disablePadding: false, label: 'Reference' },
  { id: 'source', numeric: true, disablePadding: false, label: 'Source' }
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
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
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    ButtonWrapper:
    {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }),
);

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('code');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.accountname);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
       <div className={classes.ButtonWrapper}>
      <Button variant="contained" color="primary">Actions</Button>
      <Button variant="contained" color="primary">
        Reports
      </Button>
      <Button variant="contained" color="primary">
        Export
      </Button>
      <Button variant="contained" color="primary">
      Print
      </Button>
      <Button variant="contained" color="primary">
        Refresh
      </Button>
    </div>
      <Paper className={classes.paper}>
    
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
    
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.accountname);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.accountname)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.code}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.code}
                      </TableCell>
                      <TableCell align="right">{row.costcenter}</TableCell>
                      <TableCell align="right">{row.department}</TableCell>
                      <TableCell align="right">{row.transaactiondate}</TableCell>
                      <TableCell align="right">{row.narrative}</TableCell>
                      <TableCell align="right">{row.debitvalue}</TableCell>
                      <TableCell align="right">{row.creditvalue}</TableCell>
                      <TableCell align="right">{row.reference}</TableCell>
                      <TableCell align="right">{row.source}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      
    </div>
  );
}
