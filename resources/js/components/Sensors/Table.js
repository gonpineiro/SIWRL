import React from 'react';
import { connect } from 'react-redux'
import Spinner from '../General/Spinner';
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import * as sensorsActions from '../../actions/sensorsActions'

const Table = (props) => {
  const {
    ambientesReducer: {
      ambiente
    },
    sensorsReducer: {
      sensors_ambiente,
      loading,
    },
    goBack
  } = props

  const addRow = () => sensors_ambiente.map((sensor, key) => (
    <tr key={key}>
      <td>{sensor.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={sensor}
        />
      }
      </td>
      <td>{sensor.output}</td>
    </tr>
  ))

  if (loading) return <Spinner />

  return (
    <div className="card transparent">
      <div className="card-margin">
        <div className="row mt-2">
          <div className="col col-md-6">
            <h4 className="title-table">Lista de sensores en: {ambiente.name}</h4>
          </div>
          <div className="col col-md-6 text-derecha">
            <KeyboardReturnIcon fontSize="large" onClick={goBack} className="link" />
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            {addRow()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = ({ sensorsReducer, ambientesReducer }) => {
  return { sensorsReducer, ambientesReducer };
}

export default connect(mapStateToProps, sensorsActions)(Table);
