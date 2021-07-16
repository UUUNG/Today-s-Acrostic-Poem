import React from 'react';
import PaginationTable from '../molecules/PaginationTable'

export default function AllPoemList({displayData}) {

  return (
    <PaginationTable data={displayData} name={"main"}/>
  );
}