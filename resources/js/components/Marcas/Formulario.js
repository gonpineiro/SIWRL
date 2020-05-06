import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as marcasActions from '../../actions/marcasActions'

const Formulario = (props) => {

   const cambioMarcaName = (event) => {
      props.cambioMarcaName(event.target.value);
   };

   const guardar = () => {
      const {
         id,
         name,
         agregar,
         editar,
         state_form
      } = props;

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



   return (
      <div>
         <div className="form-row">

            <div className="form-group col-md-12">
               <label>Nombre </label>
               <input
                  type="text"
                  className="form-control"
                  value={props.name}
                  onChange={cambioMarcaName}
               />
               {props.error_form.name && props.error_form.name.map((err, key) =>
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
                     </button> : ''}

            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (reducers) => {
   return reducers.marcasReducer
}

export default connect(mapStateToProps, marcasActions)(Formulario);
