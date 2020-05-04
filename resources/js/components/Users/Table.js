import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Table = (props) => {
  const addRow = () => props.users.map((user, key) => (
    <tr key={key}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/user/${user.id}`}>
        <i className="material-icons">edit</i>
        </Link>
        </td>
    </tr>
  ))
  
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
         {addRow()}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps)(Table);
