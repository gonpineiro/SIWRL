import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AddIcon from '@material-ui/icons/Add';

import * as geneticasActions from '../../actions/geneticasActions'

const Table = (props) => {  
  const { geneticas, goBack, traerFormulario } = props

  const addRow = () => geneticas.map((genetica, key) => (
    <tr key={key} >
      <td>{genetica.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={genetica}
        />
      }
      </td>
      <td>{genetica.marca.name}</td>
      <td>{genetica.thc}</td>
      <td>{genetica.cbd}</td>
      <td>{genetica.prod_int}</td>
      <td>{genetica.prod_ext}</td>
      <td>{genetica.tiempo_flora}</td>
      <td>{genetica.sabores}</td>
    </tr>
  ))

  return (
    <div>
      <div className="row mt-2">
        <div className="col col-md-6 text-izquierda">
          <h4 >Lista de genéticas <AddIcon fontSize="large" className="link" onClick={traerFormulario} /></h4>
          
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
            <th>Marca</th>
            <th>THC</th>
            <th>CBD</th>
            <th>P.Int</th>
            <th>P.Ext</th>
            <th>T.Flora</th>
            <th>Sabor</th>
          </tr>
        </thead>
        <tbody>
          {addRow()}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (reducers) => reducers.geneticasReducer

export default connect(mapStateToProps, geneticasActions)(Table);