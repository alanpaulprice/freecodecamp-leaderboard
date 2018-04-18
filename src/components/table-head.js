import React from 'react';

const TableHead = (props) => {

  const sortedByIcon = <span>&#450;</span>;
  //<i className='fas fa-sort-amount-down align-middle'></i>;

  const recentTableHead = props.current === 'recent' ?
  <span>Points - Past 30 Days {sortedByIcon}</span> :
  <span>Points - Past 30 Days</span>;

  const allTimeTableHead = props.current === 'allTime' ?
  <span>Points - All Time {sortedByIcon}</span> :
  <span>Points - All Time</span>;

  return (
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'></th>
        <th scope='col'>Camper</th>
        <th scope='col' onClick={() => props.updateCurrent('recent')}>{recentTableHead}</th>
        <th scope='col' onClick={() => props.updateCurrent('allTime')}>{allTimeTableHead}</th>
      </tr>
    </thead>
  );
};

export default TableHead;

/*
latin letter &#450;
*/
