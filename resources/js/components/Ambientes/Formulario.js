import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import * as ambientesActions from '../../actions/ambientesActions'

const { agregar, editar, cambioAmbienteName, cambioAmbienteCodigo, cambioAmbienteInputs, cancelar } = ambientesActions;

const Formulario = (props) => {

   const {
      ambientesReducer: {
         ambiente: { id, name, codigo, inputs },
         state_form,
         error_form,
      },
      cambioAmbienteName,
      cambioAmbienteCodigo,
      cambioAmbienteInputs,
      agregar,
      editar,
      cancelar,
   } = props;

   const handleCambioAmbienteName = (event) => cambioAmbienteName(event.target.value);

   const handleCambioAmbienteCodigo = (event) => cambioAmbienteCodigo(event.target.value);

   const handleCambioAmbienteInputs = (event) => cambioAmbienteInputs(event.target.value);

   const guardar = () => {

      const nuevo_ambiente = {
         id: id,
         name: name,
         codigo: codigo,
         inputs: inputs
      };

      if (state_form === 'crear') agregar(nuevo_ambiente);

      if (state_form === 'editar') editar(nuevo_ambiente, id)

   };

   const useStyles = makeStyles((theme) => ({

      formControl: {
         margin: theme.spacing(0),
         marginBottom: 35,
         width: "100%",
      },
   }));

   const classes = useStyles();   

   return (
      <FormControl >
         <div className="form-row">

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Nombre"
                  type="text"
                  className="form-control"
                  value={name || ''}
                  onChange={handleCambioAmbienteName}
                  helperText={error_form.name}
                  error={!error_form.name ? false : true}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Código"
                  type="number"
                  className="form-control"
                  value={codigo || ''}
                  onChange={handleCambioAmbienteCodigo}
                  helperText={error_form.codigo}
                  error={!error_form.codigo ? false : true}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Inputs"
                  type="number"
                  className="form-control"
                  value={inputs || ''}
                  onChange={handleCambioAmbienteInputs}
                  helperText={error_form.inputs}
                  error={!error_form.inputs ? false : true}
               />
            </FormControl>


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
                  {state_form === 'editar'
                     ?
                     <Button
                        variant="contained"
                        color="inherit"
                        onClick={cancelar}
                     >
                        Cancelar
                     </Button> : ''}
               </div >

            </div>

         </div>
      </FormControl>
   );
}

const mapStateToProps = ({ ambientesReducer }) => {
   return { ambientesReducer };
};

const mapDispatchToProps = {
   cambioAmbienteName,
   cambioAmbienteCodigo,
   cambioAmbienteInputs,

   agregar,
   editar,
   cancelar
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
