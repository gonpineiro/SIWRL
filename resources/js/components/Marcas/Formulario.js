import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as marcasActions from '../../actions/marcasActions'
import * as geneticasActions from '../../actions/geneticasActions'

const { retirarFormularioMarca } = geneticasActions;

const { agregar, editar, cambioMarcaName, cancelar, traerTodos: marcasTraerTodos } = marcasActions;

const Formulario = (props) => {

   const cambioMarcaName = (event) => {
      props.cambioMarcaName(event.target.value);
   };

   const guardar = () => {
      const {
         id,
         name,
         state_form
      } = props.marcasReducer;

      const nueva_marca = {
         id: id,
         name: name
      };     
      

      if (state_form === 'crear') {
         props.agregar(nueva_marca);     
         if (props.geneticasReducer.state_form === 'crear-marca') {  
            props.marcasTraerTodos()            
         }    

      }     

      if (state_form === 'editar') {
         props.editar(nueva_marca, id)
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
                  value={props.marcasReducer.name}
                  onChange={cambioMarcaName}
               />
               {props.marcasReducer.error_form.name && props.marcasReducer.error_form.name.map((err, key) =>
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

               {props.geneticasReducer.state_form === 'crear-marca'
                  ?
                  <button
                     className="btn btn-danger btn-cancelar"
                     onClick={props.retirarFormularioMarca}
                  >
                     Volver
                  </button> : ''}
                     
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = ({ geneticasReducer, marcasReducer }) => {
   return { geneticasReducer, marcasReducer };
};

const mapDispatchToProps = {
   marcasActions,
   agregar,
   editar,
   cancelar,
   retirarFormularioMarca,
   cambioMarcaName,
   marcasTraerTodos

};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
