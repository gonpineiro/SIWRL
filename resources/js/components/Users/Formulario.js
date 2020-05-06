import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'

const Formulario = (props) => {
   
   const cambioUsuarioName = (event) => {
      props.cambioUsuarioName(event.target.value);
   };

   const cambioUsuarioEmail = (event) => {
      props.cambioUsuarioEmail(event.target.value);
   };

   const cambioUsuarioPassword = (event) => {
      props.cambioUsuarioPassword(event.target.value);
   };

   const guardar = () => {      
      const {
         id,
         name,
         email,
         password,
         agregar,
         editar,
         state_form
      } = props;

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

  
   
      return (
         <div>
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Nombre </label>
                  <input
                     type="text"
                     className="form-control"
                     value={props.name}
                     onChange={cambioUsuarioName}
                  />
                  {props.error_form.name && props.error_form.name.map((err, key) =>
                     <small key={key} className="text-danger">{err}</small>
                  )}
               </div>
               <div className="form-group col-md-12">
                  <label>Email</label>
                  <input
                     type="email"
                     className="form-control"
                     value={props.email}
                     onChange={cambioUsuarioEmail}
                  />
                  {props.error_form.email && props.error_form.email.map((err, key) =>
                     <small key={key} className="text-danger">{err}</small>
                  )}

               </div>
               <div className="form-group col-md-12">
                  <label>Password</label>
                  <input
                     type="text"
                     className="form-control"
                     value={props.password}
                     onChange={cambioUsuarioPassword}
                  />
                  {props.error_form.password && props.error_form.password.map((err, key) =>
                     <small key={key} className="text-danger">{err}</small>
                  )}

               </div>
               <div className="form-group col-md-12">
                  <button
                     id="guardar-btn"
                     className="btn btn-dark"
                     onClick={guardar}
                     
                  >
                     Guardar
                  </button>                  

                  {props.state_form === 'editar' 
                  ? 
                  <button
                     className="btn btn-danger btn-cancelar"
                     onClick={props.cancelar}
                  >
                     Cancelar
                  </button> : '' }
                  
               </div>
            </div>
         </div>
      );   
}

const mapStateToProps = (reducers) => {
   return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Formulario);
