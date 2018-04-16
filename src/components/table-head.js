import React from 'react';

const TableHead = (props) => {
  const upsideIcon = <i className='fab fa-free-code-camp fa-lg align-middle' data-fa-transform="flip-v"></i>;
  console.log(props.data);
  const recentTableHead = props.current === 'recent' ?
  <span>Points - Past 30 Days {upsideIcon}</span> :
  <span>Points - Past 30 Days</span>;

  const allTimeTableHead = props.current === 'allTime' ?
  <span>Points - All Time {upsideIcon}</span> :
  <span>Points - All Time</span>;

  return (
    <thead>
      <tr>
      <th scope='col'>#</th>
      <th scope='col'>Camper</th>
      <th scope='col'>
        {recentTableHead}</th>
      <th scope='col'>
        {allTimeTableHead}</th>
    </tr>
    </thead>
  );
};

export default TableHead;
