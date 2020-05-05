import React, { Component } from 'react';
import { connect } from 'react-redux'

/* import Spinner from '../General/Spinner'
 */

import * as usersActions from '../../actions/usersActions'

class Formulario extends Component {

   cambioUsuarioName = (event) => {
      this.props.cambioUsuarioName(event.target.value);
   };

   cambioUsuarioEmail = (event) => {
      this.props.cambioUsuarioEmail(event.target.value);
   };

   cambioUsuarioPassword = (event) => {
      this.props.cambioUsuarioPassword(event.target.value);
   };

   guardar = () => {
      const {
         id,
         name,
         email,
         password,
         agregar,
         editar,
         state_form
      } = this.props;

      const nuevo_usuario = {
         id: id,
         name: name,
         email: email,
         password: password
      };
      

      if (state_form === 'crear') {
         agregar(nuevo_usuario);         
      }
      if (state_form === 'editar') {
         editar(nuevo_usuario, id)    
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
                     onChange={this.cambioUsuarioName}
                  />
                  {this.props.error_form.name && this.props.error_form.name.map((err, key) =>
                     <small key={key} className="text-danger">{err}</small>
                  )}
               </div>
               <div className="form-group col-md-12">
                  <label>Email</label>
                  <input
                     type="email"
                     className="form-control"
                     value={this.props.email }
                     onChange={this.cambioUsuarioEmail}
                  />
                  {this.props.error_form.email && this.props.error_form.email.map((err, key) =>
                     <small key={key} className="text-danger">{err}</small>
                  )}

               </div>
               <div className="form-group col-md-12">
                  <label>Password</label>
                  <input
                     type="text"
                     className="form-control"
                     value={this.props.password}
                     onChange={this.cambioUsuarioPassword}
                  />
                  {this.props.error_form.password && this.props.error_form.password.map((err, key) =>
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
                  
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (reducers) => {
   return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Formulario);
