import React from 'react';

const TableBody = (props) => {

  const tableContents = () => {
    return props.data.map((user, index) => {
      return (
        <tr key={index + user}>
          <td>{index + 1}</td>
          <td>{user.username}</td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
      );
    });
  }

  return (
    <tbody>
      {props.data.length < 1 ?
        <tr><td>Loading...</td></tr> :
        tableContents()
      }
    </tbody>
  );
};

export default TableBody;
