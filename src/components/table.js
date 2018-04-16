import React from 'react';
import TableHead from './table-head.js';
import TableBody from './table-body.js';

const Table = (props) => {


  return (
    <table className='table'>
      <TableHead current={props.current}/>
      <TableBody data={props.data}/>
    </table>
  );
}

export default Table;

/*
const TableContents = () => {
  const tableContentRows = props.data.forEach((user, index) => {
    return (
      <TableContentRow
        position={index}
        username={user.username}
        pointsRecent={user.recent}
        pointsAllTime={user.allTime}
      />
    );
  });

  if (props.data.length < 1) {
    return <tbody><tr><td>Loading...</td></tr></tbody>
  } else {
    return (
      <tbody>{tableContentRows}</tbody>
    );
  }
};
*/
