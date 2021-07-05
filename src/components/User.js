import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const User = (props) => {
    return (
        <TableRow>
            <TableCell>{props.user.id}</TableCell>
            <TableCell>
                {props.user.name}
            </TableCell>
            <TableCell>{props.user.word}</TableCell>
            <TableCell>{props.user.poem}</TableCell>
            <TableCell>{props.user.like}</TableCell>
            <TableCell>{props.user.reply}</TableCell>
        </TableRow>
    );
};

export default User;