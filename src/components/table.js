import React from 'react';

const Table = (props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
        <th scope='col'>#</th>
        <th scope='col'>Camper</th>
        <th scope='col'>Points - Past 30 Days</th>
        <th scope='col'>Points - All Time</th>
      </tr>
      </thead>
    </table>
  );
}

export default Table;
