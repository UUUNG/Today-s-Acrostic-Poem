import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import dayjs from 'dayjs'

export default function NoticePage({key,row}) {

  const [open, setOpen] = React.useState("");

  const handleClick = (idx) => {
    if (open === idx) {
      setOpen("")
    }else{
      setOpen(idx)
    }
  };
  return (
    <React.Fragment>
        <TableRow onClick={() => handleClick(key)}>
            <TableCell component="th" scope="row">
                {row.title}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {row.writer}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <div>{dayjs(row.date).format("YYYY년 MM월 DD일 HH:mm:ss")}</div>
            </TableCell>
        </TableRow>
        <Collapse in={key===open} timeout="auto" unmountOnExit>
            <Box margin={3}>
                <Paper variant="outlined" square style={{padding:10}}>
                    <Typography variant="caption" gutterBottom component="div">
                      {row.content}
                    </Typography>
                </Paper>
            </Box>
        </Collapse>
    </React.Fragment>
  );
}