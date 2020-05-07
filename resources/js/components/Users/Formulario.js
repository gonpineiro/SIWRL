import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'

const Formulario = (props) => {

   const {
      id,
      name,
      email,
      password,
      agregar,
      editar,
      cancelar,
      state_form,
      error_form, 
      cambioUsuarioName,
      cambioUsuarioEmail,
      cambioUsuarioPassword,
   } = props

   const handleCambioUsuarioName = (event) => cambioUsuarioName(event.target.value);

   const handleCambioUsuarioEmail = (event) => cambioUsuarioEmail(event.target.value);

   const handleCambioUsuarioPassword = (event) => cambioUsuarioPassword(event.target.value);

   const guardar = () => {

      const nuevo_usuario = {
         id: id,
         name: name,
         email: email,
         password: password
      };

      if (state_form === 'crear') agregar(nuevo_usuario);
      
      if (state_form === 'editar') editar(nuevo_usuario, id)
   };

   return (
      <div>
         <div className="form-row">
            <div className="form-group col-md-12">
               <label>Nombre </label>
               <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleCambioUsuarioName}
               />
               {error_form.name && error_form.name.map((err, key) =>
                  <small key={key} className="text-danger">{err}</small>
               )}
            </div>
            <div className="form-group col-md-12">
               <label>Email</label>
               <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={handleCambioUsuarioEmail}
               />
               {error_form.email && error_form.email.map((err, key) =>
                  <small key={key} className="text-danger">{err}</small>
               )}

            </div>
            <div className="form-group col-md-12">
               <label>Password</label>
               <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={handleCambioUsuarioPassword}
               />
               {error_form.password && error_form.password.map((err, key) =>
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

               {state_form === 'editar'
                  ?
                  <button
                     className="btn btn-danger btn-cancelar"
                     onClick={cancelar}
                  >
                     Cancelar
                  </button> : ''}

            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (reducers) => {
   return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Formulario);
