import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import MenuRow from './General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AddIcon from '@material-ui/icons/Add';

import { calcularDiasTotales, traerValorSensor } from '../../js/funciones'

import * as protoypesActions from '../../actions/protoypesActions'
import * as ambientesActions from '../../actions/ambientesActions'

const { traerUno: ambientesTraerUno } = ambientesActions;
const { traerUno: prototypesTraerUno, traerUnoBorrar, traerDetalle, traerTodosInterval, traerFormulario } = protoypesActions;

const Table = (props) => {
  const {
    traerTodosInterval,
    traerDetalle,
    ambientesTraerUno,
    traerFormulario,
    prototypesReducer: {
      prototypes: { ambiente },
      prototypes,
      state_form
    },
    goBack,
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

  useEffect(() => {
    const intervalPrototypes = setInterval(() => traerTodosInterval(), 5000)
    return () => clearInterval(intervalPrototypes)
  }, []);

  const addRowTable = () => prototypes.map((prototype, key) => (
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
      <td className="center">{prototype.ambiente.monitors.length ? prototype.ambiente.monitors[prototype.ambiente.monitors.length - 1].temp + ' C°' : ''} </td>
      <td className="center">{prototype.ambiente.monitors.length ? prototype.ambiente.monitors[prototype.ambiente.monitors.length - 1].hume + ' %' : ''} </td>
      <td className="center">{prototype.ambiente.monitors.length && prototype.sensor ? traerValorSensor(prototype) + ' %' : ''}</td>
      <td className="center">{calcularDiasTotales(Date.now('YYYY-MM-DD'), Date.parse(prototype.fecha_etapa_a))}</td>
    </tr>
  ))

  const tableTable = () => (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Genetica</th>
          <th className="center">Temp</th>
          <th className="center">Hume</th>
          <th className="center">Hume T.</th>
          <th className="center">Total dias.</th>
        </tr>
      </thead>
      <tbody>
        {addRowTable()}
      </tbody>
    </table>
  )

  const addRowForm = () => prototypes.map((prototype, key) => (
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
      <td className="center">{prototype.ambiente ? prototype.ambiente.name : ''} </td>
      <td className="center">{prototype.ambiente ? prototype.ambiente.codigo : ''} </td>
      <td className="center">{prototype.sensor ? prototype.sensor.name : ''}</td>
      <td className="center">{prototype.sensor ? prototype.sensor.output : ''}</td>
    </tr>
  ))

  const tableForm = () => (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Genetica</th>
          <th className="center">Ambiente</th>
          <th className="center">Código</th>
          <th className="center">Sensor</th>
          <th className="center">Input</th>
        </tr>
      </thead>
      <tbody>
        {addRowForm()}
      </tbody>
    </table>
  )

  return (
    <div className="card transparent">
      <div className="card-margin">
        <div className="row mt-2">
          <div className="col col-md-6 text-izquierda">
            <h4>
              Lista de prototipos
              {state_form === 'tabla' ? <AddIcon fontSize="large" className="link" onClick={traerFormulario} /> : ''}
            </h4>
          </div>
          <div className="col col-md-6 text-derecha">
            <KeyboardReturnIcon fontSize="large" onClick={goBack} className="link" />
          </div>
        </div>
        {state_form === 'tabla' ? tableTable() : ''}
        {state_form === 'crear' || state_form === 'editar' || state_form === 'borrar' ? tableForm() : ''}
      </div>
    </div>
  );
}

const mapStateToProps = ({ prototypesReducer, ambientesReducer }) => {
  return { prototypesReducer, ambientesReducer };
};

const mapDispatchToProps = {
  traerTodosInterval,
  traerDetalle,
  traerFormulario,
  ambientesTraerUno,
  prototypesTraerUno,
  traerUnoBorrar
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
