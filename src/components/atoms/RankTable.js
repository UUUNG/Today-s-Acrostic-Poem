import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'nickname', headerName: 'Nick name', width: 145 },
  { field: 'acrosticpoem', headerName: 'Acrostic Poem', width: 300 },
  /* {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`, 
  }, 
  */
];

const rows = [
  { id: 1, acrosticpoem: 'Snow', nickname: 'Jon', age: 35 },
  { id: 2, acrosticpoem: 'Lannister', nickname: 'Cersei', age: 42 },
  { id: 3, acrosticpoem: 'Lannister', nickname: 'Jaime', age: 45 },
  { id: 4, acrosticpoem: 'Stark', nickname: 'Arya', age: 16 },
  { id: 5, acrosticpoem: 'Targaryen', nickname: 'Daenerys', age: null },
  { id: 6, acrosticpoem: 'Melisandre', nickname: null, age: 150 },
  { id: 7, acrosticpoem: 'Clifford', nickname: 'Ferrara', age: 44 },
  { id: 8, acrosticpoem: 'Frances', nickname: 'Rossini', age: 36 },
  { id: 9, acrosticpoem: 'Roxie', nickname: 'Harvey', age: 65 },
];

export default function RankTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
