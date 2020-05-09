import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

   const useStyles = makeStyles((theme) => ({
      root: {
         '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: "95%",
         },
      },
   }));

   const classes = useStyles();

   return (
      <form className={classes.root} noValidate autoComplete="off">
         <div className="form-row">

            <div className="form-group col-md-12">
               <TextField
                  id="standard-basic"
                  label="Nombre"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleCambioMarcaName}
                  helperText={error_form.name}
                  error={!error_form.name ? false : true}
               />
            </div>

            <div className="form-row margin-button">

               <div className="form-group col-md-6">
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={guardar}
                  >
                     Guardar
                  </Button>
               </div >

               <div className="form-group col-md-6">
                  {state_form_marcas === 'editar'
                     ?
                     <Button
                        variant="contained"
                        color="inherit"
                        onClick={cancelar}
                     >
                        Cancelar
                     </Button> : ''}

                  {state_form_geneticas === 'crear-marca'
                     ?
                     <Button
                        variant="contained"
                        color="inherit"
                        onClick={handleRetirarFormularioMarca}
                        hidden={loading ? true : false}
                     >
                        Volver
                     </Button> : ''}
               </div >
               
            </div>

         </div>
      </form>
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
