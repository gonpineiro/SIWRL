import React, { Component } from 'react';
import { connect } from 'react-redux'

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
            name,
            email,
            password,
            agregar
        } = this.props;

		const nuevo_usuario = {
			name: name,
			email: email,
			password: password
        };

        agregar(nuevo_usuario);
        
        /* if (usu_id && tar_id) {
            const tarea = tareas[usu_id][tar_id]
            const tarea_editada = {
                ...nueva_tarea,
                completed: tarea.completed,
                id: tarea.id
            }

            editar(tarea_editada)

        }else{
           agregar(nuevo_usuario);
      } */
      
      
	};

   render() {
      console.log(this.props)
      return (
         <div>
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Nombre</label>
                  <input
                     type="text"
                     className="form-control"
                     value={this.props.name}
                     onChange={this.cambioUsuarioName}
                  />
               </div>
               <div className="form-group col-md-12">
                  <label>Email</label>
                  <input
                     type="email"
                     className="form-control"
                     value={this.props.email}
                     onChange={this.cambioUsuarioEmail}
                  />
               </div>
               <div className="form-group col-md-12">
                  <label>Password</label>
                  <input
                     type="text"
                     className="form-control"
                     value={this.props.password}
                     onChange={this.cambioUsuarioPassword}
                  />
               </div>
               <div className="form-group col-md-12">
                  <button
                     className="btn btn-dark"
                     onClick={ this.guardar }
                  >
                     Guardar
                  </button>
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
