import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';

import * as marcasActions from '../../actions/marcasActions'

const Table = (props) => {
  const { marcas } = props

  const addRow = () => marcas.map((marca, key) => (
    <tr key={key}>
      <td>{marca.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={marca}
        />
      }
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
  return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Table);
