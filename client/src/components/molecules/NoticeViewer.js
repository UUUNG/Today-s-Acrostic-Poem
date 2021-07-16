import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import dayjs from 'dayjs'

const NoticeViewer = ({notice,idx}) => {
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
            <TableRow key={idx} onClick={() => handleClick(idx)}>
            <TableCell component="th" scope="row">
                {notice.title}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {notice.writer}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
            <div>{dayjs(notice.date).format("YYYY년 MM월 DD일 HH:mm:ss")}</div>
            </TableCell>
            </TableRow>
            <Collapse in={idx===open} timeout="auto" unmountOnExit>
            <Box margin={3}>
                <Paper variant="outlined" square style={{padding:10}}>
                <Typography variant="caption" gutterBottom component="div">
                    {notice.content}
                </Typography>
                </Paper>
            </Box>
            </Collapse>
        </React.Fragment>

  )
}
export default NoticeViewer;