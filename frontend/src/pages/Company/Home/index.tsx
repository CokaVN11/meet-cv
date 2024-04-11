import { ArrowLeftCircleIcon, ArrowLeftOnRectangleIcon, BellAlertIcon, Cog6ToothIcon, CurrencyDollarIcon, DocumentIcon, HomeIcon, MagnifyingGlassIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import * as React from 'react';

interface Data {
  id: number;
  position: string;
  quantity: number;
  endTime: string;
  adsForm: string;
  description: string;
}

function createData(
  id: number,
  position: string,
  quantity: number,
  endTime: string,
  adsForm: string,
  description: string,
): Data {
  return {
    id,
    position,
    quantity,
    endTime,
    adsForm,
    description,
  };
}

const rows = [
  createData(1, 'Python Developer', 5, '2022-10-01', 'Banner', 'Bachelor degree in Computer Science, Information Technology or related field'),
  createData(2, 'Java Developer', 5, '2022-10-01', 'Banner', '5+ years of experience in Java development'),
  createData(3, 'Frontend Developer', 5, '2022-10-01', 'Banner', '2+ years of experience in Frontend development'),
  createData(4, 'Backend Developer', 5, '2022-10-01', 'Banner', '2+ years of experience in Backend development'),
  createData(5, 'Fullstack Developer', 5, '2022-10-01', 'Banner', '2+ years of experience in Fullstack development'),

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
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
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

const headCells: readonly HeadCell[] = [
  {
    id: 'position',
    numeric: false,
    disablePadding: true,
    label: 'Position',
  },
  {
    id: 'quantity',
    numeric: true,
    disablePadding: false,
    label: 'Quantity',
  },
  {
    id: 'endTime',
    numeric: true,
    disablePadding: false,
    label: 'End date',
  },
  {
    id: 'adsForm',
    numeric: true,
    disablePadding: false,
    label: 'Advertisement form',
  },
  {
    id: 'description',
    numeric: true,
    disablePadding: false,
    label: 'Description',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all positions',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

// function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& .MuiPaper-root": {
//       borderRadius: "100px",
//       boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);"
//     }
//   }
// }));

export const CompanyHome = () => {

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('position');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row h-screen w-screen">
        <div className="basic w-1/5 flex flex-col items-center bg-amber-100">
          <div>
            <h2 className='font-bold'>COMPANY</h2>
            <img src="https://logowik.com/content/uploads/images/952_astonmartin.jpg" alt="" className="h-40 w-40 rounded-full" />
            <p className='font-extrabold'>ASTON MARTIN</p>

            <div className="flex flex-col items-center">
              <button className="w-full bg-transparent hover:bg-amber-400 flex justify-start gap-2 items-center"><HomeIcon className='h-5 w-5 me-1'></HomeIcon>Home</button>
              <button className="w-full bg-transparent hover:bg-amber-400 flex justify-start gap-2 items-center"><UserIcon className='h-5 w-5 me-1'></UserIcon> Position</button>
              <button className="w-full bg-transparent hover:bg-amber-400 flex justify-start gap-2 items-center"><CurrencyDollarIcon className='h-5 w-5 me-1' > </CurrencyDollarIcon> Payment</button>
              <button className="w-full bg-transparent hover:bg-amber-400 flex justify-start gap-2 items-center"><UserGroupIcon className='h-5 w-5 me-1'></UserGroupIcon>Employee</button>
              <button className="w-full bg-transparent hover:bg-amber-400 flex justify-start gap-2 items-center"><DocumentIcon className='h-5 w-5 me-1'> </DocumentIcon>Proposal</button>
              <button className="w-full bg-transparent hover:bg-amber-400 flex justify-start gap-2 items-center"><Cog6ToothIcon className='h-5 w-5 me-1'></Cog6ToothIcon> Setting</button>
              <button className="w-full bg-transparent hover:bg-amber-400 flex justify-start gap-2 items-center"><ArrowLeftOnRectangleIcon className='h-5 w-5 me-1'></ArrowLeftOnRectangleIcon>Log out</button>
            </div>
          </div>
        </div>
        <div className="basic w-4/5">
          <div className="flex h-14 items-center">
            <a href=""><ArrowLeftCircleIcon className='h-8 w-8 ml-5'></ArrowLeftCircleIcon></a>
            <input type="text" className="w-1/6 h-10 rounded-lg ml-auto mr-0" placeholder="Search"></input>
            <MagnifyingGlassIcon className='h-8 w-8 absolute right-28'></MagnifyingGlassIcon>
            <a href="" className='mr-11 ml-6'><BellAlertIcon className='h-8 w-8'></BellAlertIcon></a>
          </div>
          <div className='flex h-14 items-center'>
            <p className='text-2xl ml-10'>Your hiring position</p>
            <button className='ml-auto mr-10 bg-amber-400'>ADD NEW POSITION</button>
          </div>
          <div>
            <Box sx={{ width: '100%', height: '100vh', backgroundColor: '#f0f0f0' }}>
              <Paper sx={{ width: '100%', height: '100vh', mb: 2 }}>
                <TableContainer>
                  <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size='medium'
                  >
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {visibleRows.map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.id)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                            sx={{ cursor: 'pointer' }}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                  'aria-labelledby': labelId,
                                }}
                              />
                            </TableCell>
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {row.position}
                            </TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="left">{row.endTime}</TableCell>
                            <TableCell align="left">{row.adsForm}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                          </TableRow>
                        );
                      })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: 53 * emptyRows,
                          }}
                        >
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
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}