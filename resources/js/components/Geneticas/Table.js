import React from 'react';
import { connect } from 'react-redux'

import * as geneticasActions from '../../actions/geneticasActions'

const Table = (props) => {
  const { geneticas, traerUno, traerUnoBorrar } = props

  const addRow = () => geneticas.map((genetica, key) => (
    <tr key={key}>
      <td>{genetica.id}</td>
      <td>{genetica.name}</td>
      <td>{genetica.marca.name}</td>
      <td>{genetica.thc}</td>
      <td>
        <i
          className="material-icons link"
          onClick={() => traerUno(genetica.id)}
        >edit</i>
        <i
          onClick={() => traerUnoBorrar(genetica.id)}
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
            <th>Marca</th>
            <th>THC</th>
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
  return reducers.geneticasReducer
}

export default connect(mapStateToProps, geneticasActions)(Table);
