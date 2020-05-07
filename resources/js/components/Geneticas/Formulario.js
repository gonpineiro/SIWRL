import React, { Component } from 'react';
import { connect } from 'react-redux'

import SliderThc from './General/SliderThc'

import * as geneticasActions from '../../actions/geneticasActions'
import * as marcasActions from '../../actions/marcasActions';

const { traerTodos: marcasTraerTodos } = marcasActions;
const {
   cambioGeneticaName,
   cambioGeneticaMarca,
   ponerFormularioMarca,
   cancelar,
   agregar,
   editar } = geneticasActions;

class Formulario extends Component {

   async componentDidMount() {
      const {
         marcasTraerTodos,
         marcasReducer: { marcas },
      } = this.props

      if (!marcas.length) await marcasTraerTodos()
   }
   
   ponerFormularioMarca = () => this.props.ponerFormularioMarca()

   handleCambioGeneticaName = (event) => this.props.cambioGeneticaName(event.target.value)

   handleCambioGeneticaMarca = (event) => this.props.cambioGeneticaMarca(event.target.value)   

   guardar = () => {
      const {
         geneticasReducer: { id, name, id_marca, thc, state_form },
         agregar,
         editar
      } = this.props;

      const nueva_genetica = {
         id: id,
         name: name,
         marca_id: id_marca,
         thc: thc
      };

      if (state_form === 'crear') agregar(nueva_genetica);

      if (state_form === 'editar') editar(nueva_genetica, id)

   };   

   render() {
      const {
         geneticasReducer: { name, error_form, state_form },
         marcasReducer: { marcas },
         cancelar
      } = this.props

      return (
         <div>
            <div className="form-row">

               <div className="form-group col-md-12">
                  <label>Nombre</label>
                  <input
                     type="text"
                     className="form-control"
                     value={name}
                     onChange={this.handleCambioGeneticaName}
                     pattern="[A-Z]"
                  />
                  {error_form.name && error_form.name.map((err, key) =>
                     <small key={key} className="text-danger">{err}</small>
                  )}
               </div>

               <div className="form-group col-md-12">
                  <label
                     className="link link-string"
                     onClick={() => this.ponerFormularioMarca()}
                  >Marcas
                  </label>

                  <div className="form-row">
                     <select
                        className="form-control"
                        onChange={this.handleCambioGeneticaMarca}
                     >
                        <option value="">Seleccione</option>
                        {marcas.map((marca) => (
                           <option
                              key={marca.id}
                              value={marca.id}
                           >
                              {marca.name}
                           </option>
                        ))}
                     </select>
                     {error_form.marca_id && error_form.marca_id.map((err, key) =>
                        <small key={key} className="text-danger">{err}</small>
                     )}

                  </div>

               </div>

               <div className="form-group col-md-12">
                  <SliderThc />
                  {error_form.thc && error_form.thc.map((err, key) =>
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
}

const mapStateToProps = ({ geneticasReducer, marcasReducer }) => {
   return { geneticasReducer, marcasReducer };
};

const mapDispatchToProps = {
   marcasTraerTodos,
   cambioGeneticaName,
   cambioGeneticaMarca,
   ponerFormularioMarca,
   agregar,
   editar,
   cancelar
};
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
