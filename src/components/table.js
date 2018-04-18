import React from 'react';
import TableHead from './table-head.js';
import TableBody from './table-body.js';

const Table = (props) => {
  return (
    <div className='row justify-content-center'>
      <table className='table table-hover text-center col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6'>
        <TableHead current={props.current} updateCurrent={props.updateCurrent}/>
        <TableBody data={props.data}/>
      </table>
    </div>
  );
}

export default Table;
