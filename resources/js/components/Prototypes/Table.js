import React from 'react';
import { connect } from 'react-redux'

import * as protoypesActions from '../../actions/protoypesActions'
import * as ambientesActions from '../../actions/ambientesActions'

const { traerUno: ambientesTraerUno } = ambientesActions;
const { traerUno: prototypesTraerUno, traerUnoBorrar } = protoypesActions;

const Table = (props) => {
  const { 
    ambientesTraerUno,
    prototypesReducer: { prototypes }, 
    traerUnoBorrar,
    prototypesTraerUno
  } = props

  const traerUnoEditar = (prototype) => {
    ambientesTraerUno(prototype.ambiente.id)
    prototypesTraerUno(prototype.id)
  }

  const traerUnoEliminar = (prototype) => {
    ambientesTraerUno(prototype.ambiente.id)
    traerUnoBorrar(prototype.id)
  }

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
          onClick={() => traerUnoEditar(prototype)}
        >edit</i>
        <i
          onClick={() => traerUnoEliminar(prototype)}
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


const mapStateToProps = ({ prototypesReducer, ambientesReducer }) => {
	return { prototypesReducer, ambientesReducer };
};

const mapDispatchToProps = {
	ambientesTraerUno,
  prototypesTraerUno,
  traerUnoBorrar
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
