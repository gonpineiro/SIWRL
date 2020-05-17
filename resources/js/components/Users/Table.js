import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import * as usersActions from '../../actions/usersActions'

const Table = (props) => {
  const { users, goBack } = props

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
    <div className="card transparent">
      <div className="card-margin">
        <div className="row mt-2">
          <div className="col col-md-6">
            <h4 className="title-table">Lista de usuarios</h4>
          </div>
          <div className="col col-md-6 text-derecha">
            <KeyboardReturnIcon fontSize="large" onClick={goBack} className="link" />
          </div>
        </div>
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
    </div>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Table);
