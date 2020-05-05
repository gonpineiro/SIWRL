import React, { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from '../General/Spinner'

import * as marcasActions from '../../actions/marcasActions'

class Formulario extends Component {

   cambioMarcaName = (event) => {
      this.props.cambioMarcaName(event.target.value);
   };

   guardar = () => {
      const {
         id,
         name,
         agregar,
         editar,
         state_form
      } = this.props;

      const nueva_marca = {
         id: id,
         name: name
      };
      

      if (state_form === 'crear') {
         agregar(nueva_marca);         
      }
      if (state_form === 'editar') {
         editar(nueva_marca, id)    
      }
   };

  
   render() {
      
      return (
         <div>
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Nombre </label>
                  <input
                     type="text"
                     className="form-control"
                     value={this.props.name }
                     onChange={this.cambioMarcaName}
                  />
                  {this.props.error_form.name && this.props.error_form.name.map((err, key) =>
                     <small key={key} className="text-danger">{err}</small>
                  )}
               </div>
               <div className="form-group col-md-12">
                  <button
                     id="guardar-btn"
                     className="btn btn-dark"
                     onClick={this.guardar}
                     
                  >
                     Guardar
                  </button>                  
                  

                  { this.props.state_form === 'editar' 
                  ? 
                  <button
                     className="btn btn-danger btn-cancelar"
                     onClick={this.props.cancelar}
                  >
                     Cancelar
                  </button> : '' }
                  
                  {this.props.loading ? <Spinner /> : ''}
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (reducers) => {
   return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Formulario);
