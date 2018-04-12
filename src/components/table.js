// <i className='fab fa-free-code-camp fa-lg align-middle' data-fa-transform="flip-v">

// {props.data.current === 'recent' ? 'Points - Past 30 Days !!!' : 'Points - Past 30 Days'}

import React from 'react';

const Table = (props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
        <th scope='col'>#</th>
        <th scope='col'>Camper</th>
        <th scope='col'>
          {props.data.current === 'recent' ?
          'Points - Past 30 Days !!!' : 'Points - Past 30 Days'}</th>
        <th scope='col'>
          {props.data.current === 'allTime' ?
          'Points - All Time !!!' : 'Points - All Time'}</th>
      </tr>
      </thead>
    </table>
  );
}

export default Table;
