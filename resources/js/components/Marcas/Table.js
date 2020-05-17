import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import * as marcasActions from '../../actions/marcasActions'

const Table = (props) => {
  
  const { marcas, goBack } = props

  const addRow = () => marcas.map((marca, key) => (
    <tr key={key}>
      <td>{marca.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={marca}
        />
      }
      </td>
    </tr>
  ))

  return (
    <div className="card transparent">
      <div className="card-margin">
        <div className="row mt-2">
          <div className="col col-md-6">
            <h4>Lista de marcas</h4>
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

const mapStateToProps = (reducers) => reducers.marcasReducer

export default connect(mapStateToProps, marcasActions)(Table);