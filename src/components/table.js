import React from 'react';

const Table = (props) => {
  const upsideIcon = <i className='fab fa-free-code-camp fa-lg align-middle'
                        data-fa-transform="flip-v"></i>;

  let recentTableHead = props.data.current === 'recent' ?
  <span>Points - Past 30 Days {upsideIcon}</span> :
  <span>Points - Past 30 Days</span>;

  let allTimeTableHead = props.data.current === 'allTime' ?
  <span>Points - All Time {upsideIcon}</span> :
  <span>Points - All Time</span>;

  return (
    <table className='table'>
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
    </table>
  );
}

export default Table;
