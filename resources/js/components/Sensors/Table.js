import React from 'react';
import { connect } from 'react-redux'
import Spinner from '../General/Spinner';
import MenuRow from '../General/MenuRow';

import * as sensorsActions from '../../actions/sensorsActions'

const Table = (props) => {
  const { sensors_ambiente, traerUno, traerUnoBorrar, loading } = props

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
    <div>
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
  );
}

const mapStateToProps = (reducers) => {
  return reducers.sensorsReducer
}

export default connect(mapStateToProps, sensorsActions)(Table);
