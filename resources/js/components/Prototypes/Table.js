import React from 'react';
import { connect } from 'react-redux'

import * as protoypesActions from '../../actions/protoypesActions'
import * as ambientesActions from '../../actions/ambientesActions'

const { traerUno: ambientesTraerUno } = ambientesActions;
const { traerUno: prototypesTraerUno, traerUnoBorrar } = protoypesActions;

const Table = (props) => {
  const { 
    ambientesTraerUno,
    prototypesReducer: { 
      prototypes: { ambiente }, 
      prototypes 
    }, 
    traerUnoBorrar,
    prototypesTraerUno
  } = props

  const traerUnoDetalle = (prototype) => {
    console.log(prototype)
  }

  const traerUnoEditar = (prototype) => {
    ambientesTraerUno(prototype.ambiente.id)
    prototypesTraerUno(prototype.id)
  }

  const traerUnoEliminar = (prototype) => {
    ambientesTraerUno(prototype.ambiente.id)
    traerUnoBorrar(prototype.id)
  }

  const traerValorSensor = (prototype) => {
    const output_sensor = prototype.sensor.output
    const monitor = prototype.ambiente.monitors[prototype.ambiente.monitors.length - 1]
    return monitor['s' + output_sensor]
  }

  const addRow = () => prototypes.map((prototype, key) => (    
    <tr key={key} onClick={() => traerUnoDetalle(prototype)}>
      <td>{prototype.id}</td>
      <td>{prototype.name}</td>
      <td>{prototype.genetica.name}</td>
      <td>{prototype.genetica.marca.name}</td>
      <td>{prototype.ambiente ? prototype.ambiente.codigo : ''}</td>
      <td>{prototype.ambiente.monitors ? prototype.ambiente.monitors[prototype.ambiente.monitors.length - 1].temp : ''} C°</td>
      <td>{prototype.ambiente.monitors ? prototype.ambiente.monitors[prototype.ambiente.monitors.length - 1].hume : ''} %</td>
      <td>{prototype.sensor ? prototype.sensor.name : ''}</td>
      <td>{prototype.ambiente.monitors && prototype.sensor ? traerValorSensor(prototype) : ''} %</td>
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
            <th>Temp</th>
            <th>Hume</th>
            <th>Sensor</th>
            <th>Hume T.</th>
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
