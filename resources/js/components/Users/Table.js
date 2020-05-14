import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';

import * as usersActions from '../../actions/usersActions'

const Table = (props) => {
  const { users } = props

  const addRow = () => users.map((user, key) => (
    <tr key={key}>
      <td>{user.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={user}
        />
      }
      </td>
      <td>{user.email}</td>
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
