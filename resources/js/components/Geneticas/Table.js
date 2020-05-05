import React from 'react';
import { connect } from 'react-redux'

import * as marcasActions from '../../actions/marcasActions'

const Table = (props) => {

  const addRow = () => props.marcas.map((marca, key) => (
    <tr key={key}>
      <td>{marca.id}</td>
      <td>{marca.name}</td>
      <td>
          <i 
          className="material-icons"
          onClick={() => props.traerUno(marca.id)}
          >edit</i>
          <i 
          onClick={() => props.traerUnoBorrar(marca.id)}
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
  return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Table);
