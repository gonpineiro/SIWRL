import React from 'react';
import { connect } from 'react-redux'

import * as protoypesActions from '../../actions/protoypesActions'

const Table = (props) => {
  const { prototypes, traerUno, traerUnoBorrar } = props

  const addRow = () => prototypes.map((prototype, key) => (
    <tr key={key}>
      <td>{prototype.id}</td>
      <td>{prototype.name}</td>
      <td>{prototype.genetica.name}</td>
      <td>{prototype.genetica.marca.name}</td>
      <td>{prototype.ambiente ? prototype.ambiente.codigo : ''}</td>
      <td>{prototype.sensor ? prototype.sensor.name : ''}</td>
      <td>
        <i
          className="material-icons link"
          onClick={() => traerUno(prototype.id)}
        >edit</i>
        <i
          onClick={() => traerUnoBorrar(prototype.id)}
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
            <th>Genetica</th>
            <th>Marca</th>
            <th>Ambiente</th>
            <th>Sensor</th>
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
  return reducers.prototypesReducer
}

export default connect(mapStateToProps, protoypesActions)(Table);
