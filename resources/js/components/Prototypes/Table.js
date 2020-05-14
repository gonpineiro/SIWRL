import React from 'react';
import { connect } from 'react-redux'
import MenuRow from './General/MenuRow';

import * as protoypesActions from '../../actions/protoypesActions'
import * as ambientesActions from '../../actions/ambientesActions'

const { traerUno: ambientesTraerUno } = ambientesActions;
const { traerUno: prototypesTraerUno, traerUnoBorrar, traerDetalle } = protoypesActions;

const Table = (props) => {
  const {
    traerDetalle,
    ambientesTraerUno,
    prototypesReducer: {
      prototypes: { ambiente },
      prototypes
    },
    traerUnoBorrar,
    prototypesTraerUno
  } = props

  const traerUnoDetalle = (prototype) => {
    traerDetalle(prototype.id)
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

  const calcularDiasTotales = (fechaFinal, fechaInicial) => {
    return Math.floor((fechaFinal - fechaInicial) / (1000 * 60 * 60 * 24))
  }   

  const addRow = () => prototypes.map((prototype, key) => (
    <tr key={key} >
      <td>{prototype.id}</td>
      <td>{
        <MenuRow
          data={prototype}
          traerUnoDetalle={traerUnoDetalle}
          traerUnoEditar={traerUnoEditar}
          traerUnoEliminar={traerUnoEliminar}
        />
      }
      </td>
      <td>{prototype.genetica.name}</td>
      <td>{prototype.genetica.marca.name}</td>
      <td className="center">{prototype.ambiente.monitors.length ? prototype.ambiente.monitors[prototype.ambiente.monitors.length - 1].temp + 'C°' : ''} </td>
      <td className="center">{prototype.ambiente.monitors.length ? prototype.ambiente.monitors[prototype.ambiente.monitors.length - 1].hume + '%' : ''} </td>
      <td className="center">{prototype.ambiente.monitors.length && prototype.sensor ? traerValorSensor(prototype) + '%' : ''}</td>
      <td className="center">{calcularDiasTotales(Date.now('YYYY-MM-DD'),  Date.parse(prototype.fecha_etapa_a))}</td>
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
            {/* <th>Ambiente</th> */}
            <th className="center">Temp</th>
            <th className="center">Hume</th>
            {/* <th>Sensor</th> */}
            <th className="center">Hume T.</th>
            <th className="center">Total dias.</th>
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
  traerDetalle,
  ambientesTraerUno,
  prototypesTraerUno,
  traerUnoBorrar
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
