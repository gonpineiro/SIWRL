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
         marcasTraerTodos
      } = this.props


      if (!this.props.marcasReducer.marcas.length) {
         await marcasTraerTodos()
      }
   }

   cambioGeneticaName = (event) => {
      this.props.cambioGeneticaName(event.target.value);
   };

   cambioGeneticaMarca = (event) => {
      this.props.cambioGeneticaMarca(event.target.value);
   }

   guardar = () => {
      const {
         id,
         name,
         id_marca,
         thc
      } = this.props.geneticasReducer;

      const {
         state_form
      } = this.props

      const nueva_genetica = {
         id: id,
         name: name,
         marca_id: id_marca,
         thc: thc
      };

      if (this.props.geneticasReducer.state_form === 'crear') {         
         this.props.agregar(nueva_genetica);
      }
      if (this.props.geneticasReducer.state_form === 'editar') {
         this.props.editar(nueva_genetica, id)
      }
   };

   ponerFormularioMarca = () => {
      this.props.ponerFormularioMarca()
   }


   render() {
      return (
         <div>
            <div className="form-row">

               <div className="form-group col-md-12">
                  <label>Nombre</label>
                  <input
                     type="text"
                     className="form-control"
                     value={this.props.geneticasReducer.name}
                     onChange={this.cambioGeneticaName}
                     pattern="[A-Z]"
                  />
                  {this.props.geneticasReducer.error_form.name && this.props.geneticasReducer.error_form.name.map((err, key) =>
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
                        onChange={this.cambioGeneticaMarca}
                     >
                        <option value="">Seleccione</option>
                        {this.props.marcasReducer.marcas.map((marca) => (
                           <option
                              key={marca.id}
                              value={marca.id}
                           >
                              {marca.name}
                           </option>
                        ))}
                     </select>
                     {this.props.geneticasReducer.error_form.marca_id && this.props.geneticasReducer.error_form.marca_id.map((err, key) =>
                        <small key={key} className="text-danger">{err}</small>
                     )}

                  </div>

               </div>

               <div className="form-group col-md-12">
                  <SliderThc />
                  {this.props.geneticasReducer.error_form.thc && this.props.geneticasReducer.error_form.thc.map((err, key) =>
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

                  {this.props.geneticasReducer.state_form === 'editar'
                     ?
                     <button
                        className="btn btn-danger btn-cancelar"
                        onClick={this.props.cancelar}
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
   geneticasActions,
   cambioGeneticaName,
   cambioGeneticaMarca,
   ponerFormularioMarca,
   agregar,
   editar,
   cancelar
};
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
