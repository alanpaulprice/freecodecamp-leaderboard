import React from 'react';
import TableHead from './table-head.js';
import TableBody from './table-body.js';

const Table = (props) => {
  return (
    <table className='table text-center'>
      <TableHead current={props.current}/>
      <TableBody data={props.data}/>
    </table>
  );
}

export default Table;
