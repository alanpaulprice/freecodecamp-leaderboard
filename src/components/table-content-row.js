import React from 'react';

const TableContentRow = (props) => {
  return (
      <tr>
        <td>{props.position}</td>
        <td>{props.username}</td>
        <td>{props.pointsRecent}</td>
        <td>{props.pointsAllTime}</td>
      </tr>
  );
};

export default TableContentRow;
