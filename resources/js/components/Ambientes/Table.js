import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import * as ambientesActions from '../../actions/ambientesActions'
import * as sensorsActions from '../../actions/sensorsActions'

const { traerUno, traerUnoBorrar } = ambientesActions;
const { traerTodosPorAmbiente } = sensorsActions;

const Table = (props) => {
  const { 
    ambientesReducer: { ambientes }, 
    traerTodosPorAmbiente,
    traerUno, 
    traerUnoBorrar 
  } = props

  const addRow = () => ambientes.map((ambiente, key) => (
    <tr key={key}>
      <td>{ambiente.id}</td>
      <td>{ambiente.name}</td>
      <td>{ambiente.codigo}</td>

      <td>
        <Link
          to={`/ambientes/sensor/${ambiente.id}`}
          onClick={() => traerTodosPorAmbiente(ambiente.id)}
          className={(ambiente.sensors.length >= ambiente.inputs) ? "color-alert" : ''}>
          {ambiente.sensors.length} / {ambiente.inputs}
        </Link>
      </td>

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

const mapStateToProps = ({ sensorsReducer, ambientesReducer }) => {
  return { sensorsReducer, ambientesReducer };
};

const mapDispatchToProps = {
  traerTodosPorAmbiente,
  traerUno, 
  traerUnoBorrar 
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
