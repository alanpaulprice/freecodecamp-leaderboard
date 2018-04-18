import React from 'react';

const TableBody = (props) => {

  const tableContents = () => {
    return props.data.map((user, index) => {
      return (
        <tr key={index + user}>
          <td className="align-middle">{index + 1}</td>
          <td className="align-middle"><a href={'https://www.freecodecamp.org/' + user.username} target='_blank' ><img className='avatar' src={user.img}/></a></td>
          <td className="align-middle td-user-username"><a href={'https://www.freecodecamp.org/' + user.username} target='_blank' >{user.username}</a></td>
          <td className="align-middle">{user.recent}</td>
          <td className="align-middle">{user.alltime}</td>
        </tr>
      );
    });
  }

  return (
    <tbody>
      {!props.data.length ?
        <tr><td>Loading...</td></tr> :
        tableContents()
      }
    </tbody>
  );
};

export default TableBody;
