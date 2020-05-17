import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import * as ambientesActions from '../../actions/ambientesActions'
import * as sensorsActions from '../../actions/sensorsActions'

const { traerUno, traerUnoBorrar } = ambientesActions;
const { traerTodosPorAmbiente } = sensorsActions;

const Table = (props) => {
  
  const {
    ambientesReducer: { ambientes },
    traerTodosPorAmbiente,
    goBack,
  } = props

  const addRow = () => ambientes.map((ambiente, key) => (
    <tr key={key}>
      <td>{ambiente.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={ambiente}
        />
      }
      </td>
      <td>{ambiente.codigo}</td>
      <td>
        <Link
          to={`/ambientes/sensor/${ambiente.id}`}
          onClick={() => traerTodosPorAmbiente(ambiente.id)}
          className={(ambiente.sensors.length >= ambiente.inputs) ? "color-alert" : ''}>
          {ambiente.sensors.length} / {ambiente.inputs}
        </Link>
      </td>
    </tr>
  ))

  return (

    <div>
      <div className="row mt-2">
        <div className="col col-md-6">
          <h4>Lista de ambientes</h4>
        </div>
        <div className="col col-md-6 text-derecha">
          <KeyboardReturnIcon fontSize="large" onClick={goBack} className="link"/>
        </div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Código</th>
            <th>Sensores</th>
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
