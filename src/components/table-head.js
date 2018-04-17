import React from 'react';

const TableHead = (props) => {

  const invertedIcon = <i className='fas fa-sort-amount-down fa-lg align-middle'></i>;

  const recentTableHead = props.current === 'recent' ?
  <span>Points - Past 30 Days {invertedIcon}</span> :
  <span>Points - Past 30 Days</span>;

  const allTimeTableHead = props.current === 'allTime' ?
  <span>Points - All Time {invertedIcon}</span> :
  <span>Points - All Time</span>;

  return (
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Camper</th>
        <th scope='col' onClick={() => props.updateCurrent('recent')}>{recentTableHead}</th>
        <th scope='col' onClick={() => props.updateCurrent('allTime')}>{allTimeTableHead}</th>
      </tr>
    </thead>
  );
};

export default TableHead;

/*
const recentTableHead = props.current === 'recent' ?
<span>Points - Past 30 Days {invertedIcon}</span> :
<span>Points - Past 30 Days</span>;

const allTimeTableHead = props.current === 'allTime' ?
<span>Points - All Time {invertedIcon}</span> :
<span>Points - All Time</span>;
*/
