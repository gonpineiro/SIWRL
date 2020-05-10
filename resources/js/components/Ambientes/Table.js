import React from 'react';
import { connect } from 'react-redux'

import * as ambientesActions from '../../actions/ambientesActions'

const Table = (props) => {
  const { ambientes, traerUno, traerUnoBorrar } = props

  const addRow = () => ambientes.map((ambiente, key) => (
    <tr key={key}>
      <td>{ambiente.id}</td>
      <td>{ambiente.name}</td>
      <td>{ambiente.codigo}</td>
      <td>{ambiente.inputs}</td>
      <td>
        <i
          className="material-icons link"
          onClick={() => traerUno(ambiente.id)}
        >edit</i>
        <i
          onClick={() => traerUnoBorrar(ambiente.id)}
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
            <th>Código</th>
            <th>Sensores</th>
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
  return reducers.ambientesReducer
}

export default connect(mapStateToProps, ambientesActions)(Table);
