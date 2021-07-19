import React from 'react';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForm from './DeleteForm'

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

function HistoryRow({historyRow} ) {

    const classes = useRowStyles();

    const [openDeleteRpy, setOpenDeleteRpy] = React.useState(false);

    return (
        <div style={{padding: 10}}>
            <div style={{display:'flex'}}>
                <Typography style={{fontSize: 12, marginRight: 10}}>{historyRow.name}</Typography>
                <Typography style={{fontSize: 12, color:'#888'}}>{dayjs(historyRow.created).format("MM.DD HH:mm")}</Typography>
            </div>
            <Typography style={{fontSize: 14}}>{historyRow.reply}</Typography>
            <IconButton aria-label="delete" className={classes.margin} onClick={() => setOpenDeleteRpy(!openDeleteRpy)}>
                <DeleteIcon fontSize="small" />
            </IconButton>

            <Collapse in={openDeleteRpy} timeout="auto" unmountOnExit>
                <DeleteForm row={historyRow} isReply={true}/>
            </Collapse>
        </div>
    )
}

export default HistoryRow;