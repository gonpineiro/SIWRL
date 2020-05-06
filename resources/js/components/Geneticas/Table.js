import React from 'react';
import { connect } from 'react-redux'

import * as geneticasActions from '../../actions/geneticasActions'

const Table = (props) => {
  
  const addRow = () => props.geneticas.map((genetica, key) => (
    <tr key={key}>
      <td>{genetica.id}</td>
      <td>{genetica.name}</td>
      <td>{genetica.marca.name}</td>
      <td>
          <i 
          className="material-icons"
          onClick={() => props.traerUno(genetica.id)}
          >edit</i>
          <i 
          onClick={() => props.traerUnoBorrar(genetica.id)}
          className="material-icons"
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
