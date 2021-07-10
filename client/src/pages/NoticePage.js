import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import GridHead from '../components/molecules/GridHead';
import { useEffect } from 'react';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(title, writer, date) {
  return { title, writer, date };
}

const rows = [
  createData('공지사항1', '운영자',20200205),
  createData('공지사항2', '운영자',20200203),
  createData('공지사항3', '운영자',20200201),
  createData('공지사항4', '운영자',20200130),
  createData('공지사항5', '운영자',20200125),
  createData('공지사항6', '운영자',20200120),
  createData('공지사항7', '운영자',20200110),
  createData('공지사항8', '운영자',20200101),
  createData('공지사항9', '운영자',20210302),
  createData('공지사항10', '운영자',20210505),
  createData('공지사항11', '운영자',20210809),

].sort((a, b) => (a.date > b.date ? -1 : 1));

const useStyles2 = makeStyles((theme)=>({
  table: {
    minWidth: 500,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function NoticePage() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [notice, setNotice]=React.useState(0)

  const callApi = async()=>{
    const response = await fetch('/NoticePage');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{
      callApi()
      .then(res=>setNotice(res))
      .catch(err=>console.log(err));
  });

  function DisplayNotice() {
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="custom pagination table">
      <TableBody in={notice}>
            <TableRow key={notice.title}>
              <TableCell component="th" scope="row">
                {notice.title}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {notice.writer}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {notice.dates}
              </TableCell>
            </TableRow>
        

        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' },
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>

  }

  return (
    <div>
      <div className={classes.heroContent}>
        <GridHead name="공지사항" description=" "/>
      </div>
      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
          {notice ? ((rowsPerPage > 0
              ? notice.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : notice
            ).map((notice) => (
              <TableRow key={notice.title}>
                <TableCell component="th" scope="row">
                  {notice.title}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {notice.writer}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {notice.date}
                </TableCell>
              </TableRow>
             ))) : ""}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
           
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
