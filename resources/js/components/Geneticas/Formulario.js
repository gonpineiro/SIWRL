import React, { Component } from 'react';
import { connect } from 'react-redux'

import SliderThc from './General/SliderThc'
import SliderCbd from './General/SliderCbd'

import * as geneticasActions from '../../actions/geneticasActions'
import * as marcasActions from '../../actions/marcasActions';

const { traerTodos: marcasTraerTodos } = marcasActions;

const {
   cambioGeneticaName,
   cambioGeneticaMarca,
   cambioGeneticaProdInt,
   cambioGeneticaProdExt,
   cambioGeneticaTiempoFlora,
   cambioGeneticaSabores,

   ponerFormularioMarca,
   cancelar,
   agregar,
   editar
} = geneticasActions;

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

   handleCambioGeneticaProdInt = (event) => this.props.cambioGeneticaProdInt(event.target.value)

   handleCambioGeneticaProdExt = (event) => this.props.cambioGeneticaProdExt(event.target.value)

   handleCambioGeneticaTiempoFlora = (event) => this.props.cambioGeneticaTiempoFlora(event.target.value)

   handleCambioGeneticaSabores = (event) => this.props.cambioGeneticaSabores(event.target.value)

   guardar = () => {
      const {
         geneticasReducer: {
            form: {
               id,
               name,
               marca_id,
               thc,
               cbd,
               prod_int,
               prod_ext,
               tiempo_flora,
               sabores
            },
            state_form
         },
         agregar,
         editar
      } = this.props;

      const nueva_genetica = {
         id: id,
         name: name,
         marca_id: marca_id,
         thc: thc,
         cbd: cbd,
         prod_int: prod_int,
         prod_ext: prod_ext,
         tiempo_flora: tiempo_flora,
         sabores: sabores
      };

      if (state_form === 'crear') agregar(nueva_genetica);

      if (state_form === 'editar') editar(nueva_genetica, id)

   };

   render() {
      const {
         geneticasReducer: {
            form: { name, prod_int, prod_ext, tiempo_flora, sabores },
            error_form,
            state_form
         },
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
                  <SliderThc /> <SliderCbd />
                  {error_form.thc && error_form.thc.map((err, key) =>
                     <small key={key} className="text-danger">{err}</small>
                  )}
               </div>

               <div className="form-row">

                  <div className="form-group col-md-4">
                     <label>Prod. Int<small>(m2)</small></label>
                     <input
                        type="number"
                        className="form-control"
                        value={prod_int}
                        onChange={this.handleCambioGeneticaProdInt}
                     />
                  </div>

                  <div className="form-group col-md-4">
                     <label>Prod. Ext<small>(x planta)</small></label>
                     <input
                        type="number"
                        className="form-control"
                        value={prod_ext}
                        onChange={this.handleCambioGeneticaProdExt}
                     />
                  </div>

                  <div className="form-group col-md-4">
                     <label>Tiempo</label>
                     <input
                        type="number"
                        className="form-control"
                        value={tiempo_flora}
                        onChange={this.handleCambioGeneticaTiempoFlora}
                     />
                     {error_form.tiempo_flora && error_form.tiempo_flora.map((err, key) =>
                        <small key={key} className="text-danger">{err}</small>
                     )}
                  </div>

               </div>

               <div className="form-group col-md-12">
                  <label>Sabores</label>
                  <input
                     type="text"
                     className="form-control"
                     value={sabores}
                     onChange={this.handleCambioGeneticaSabores}
                  />
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
   cambioGeneticaProdInt,
   cambioGeneticaProdExt,
   cambioGeneticaTiempoFlora,
   cambioGeneticaSabores,

   agregar,
   editar,
   cancelar
};
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
