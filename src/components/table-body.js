import React from 'react';

const TableBody = (props) => {
  const tableContents = () => {
    if (props.data.length < 1) {
      return (
        <tr>
          <td>Loading...</td>
        </tr>
      );
    } else {
      return props.data.map((user, index) => {
        return (
          <tr key={index + user}>
            <td>{index}</td>
            <td>{user.username}</td>
            <td>{user.recent}</td>
            <td>{user.alltime}</td>
          </tr>
        );
      })
    }
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

/*
<tr>
<td>{props.position}</td>
<td>{props.username}</td>
<td>{props.pointsRecent}</td>
<td>{props.pointsAllTime}</td>
</tr>

return (
<tbody>
<tr>
<td>
woopwoop
</td>
</tr>
</tbody>
);
*/
