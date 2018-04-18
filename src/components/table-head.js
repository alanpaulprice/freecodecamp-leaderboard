import React from 'react';

const TableHead = (props) => {

  const sortedByIcon = <span>&#x25BC;</span>;

  const recentTableHead = props.current === 'recent' ?
  <span>Points&nbsp;- Past 30 Days {sortedByIcon}</span> :
  <span>Points&nbsp;- Past 30 Days</span>;

  const allTimeTableHead = props.current === 'allTime' ?
  <span>Points&nbsp;- All Time {sortedByIcon}</span> :
  <span>Points&nbsp;- All Time</span>;

  return (
    <thead>
      <tr>
        <th className='align-middle' scope='col'>#</th>
        <th scope='col'></th>
        <th className='align-middle' scope='col'>Camper</th>
        <th className='align-middle' scope='col' onClick={() => props.updateCurrent('recent')}>{recentTableHead}</th>
        <th className='align-middle' scope='col' onClick={() => props.updateCurrent('allTime')}>{allTimeTableHead}</th>
      </tr>
    </thead>
  );
};

export default TableHead;

/*
latin letter &#450;
*/
