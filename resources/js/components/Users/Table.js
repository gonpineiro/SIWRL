import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as usersActions from '../../actions/usersActions'

const Table = (props) => {

  const addRow = () => props.users.map((user, key) => (
    <tr key={key}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
          <i 
          className="material-icons link"
          onClick={() => props.traerUno(user.id)}
          >edit</i>
          <i 
          onClick={() => props.traerUnoBorrar(user.id)}
          className="material-icons link"
          >delete</i>
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

export default connect(mapStateToProps, usersActions)(Table);
