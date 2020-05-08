import React from 'react';
import { connect } from 'react-redux'

import * as marcasActions from '../../actions/marcasActions'
import * as geneticasActions from '../../actions/geneticasActions'

const { retirarFormularioMarca } = geneticasActions;

const { agregar, editar, cambioMarcaName, cancelar, traerTodos: marcasTraerTodos } = marcasActions;

const Formulario = (props) => {

   const {
      marcasReducer: {
         form: { id, name },
         state_form: state_form_marcas,
         error_form,
         loading },
      geneticasReducer: { state_form: state_form_geneticas },
      cambioMarcaName,
      retirarFormularioMarca,
      agregar,
      editar,
      cancelar,
      marcasTraerTodos,
   } = props;

   const handleCambioMarcaName = (event) => cambioMarcaName(event.target.value);

   const guardar = () => {

      const nueva_marca = {
         id: id,
         name: name
      };

      if (state_form_marcas === 'crear') agregar(nueva_marca);

      if (state_form_marcas === 'editar') editar(nueva_marca, id)

   };

   const handleRetirarFormularioMarca = () => {
      marcasTraerTodos()
      retirarFormularioMarca()
   }

   return (
      <div>
         <div className="form-row">

            <div className="form-group col-md-12">
               <label>Nombre </label>
               <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleCambioMarcaName}
               />
               {error_form.name && error_form.name.map((err, key) =>
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

               {state_form_marcas === 'editar'
                  ?
                  <button
                     className="btn btn-danger btn-cancelar"
                     onClick={cancelar}
                  >
                     Cancelar
                  </button> : ''}

               {state_form_geneticas === 'crear-marca'
                  ?
                  <button
                     className="btn btn-danger btn-cancelar"
                     onClick={handleRetirarFormularioMarca}
                     hidden={loading ? true : false}
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
   agregar,
   editar,
   cancelar,
   retirarFormularioMarca,
   cambioMarcaName,
   marcasTraerTodos

};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
