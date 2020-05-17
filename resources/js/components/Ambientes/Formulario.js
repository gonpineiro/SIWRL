import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import * as ambientesActions from '../../actions/ambientesActions'

const { agregar, editar, borrar, cambioAmbienteName, cambioAmbienteCodigo, cambioAmbienteInputs, cancelar } = ambientesActions;

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
      loading,
      borrar,
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
      <div className="card">
         {loading ? <Spinner /> :
            <div>
               <div className="card-header">
                  <div className="row mt-2">
                     <div className="col col-md-6 card-agregar" >
                        {state_form === 'crear' ? 'AGREGAR AMBIENTE' : ''}
                        {state_form === 'editar' ? 'MODIFICAR AMBIENTE' : ''}
                        {state_form === 'borrar' ? 'ELIMINAR AMBIENTE' : ''}
                     </div>
                  </div>
               </div>
               <div className="card-body">
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
                              disabled={state_form === 'borrar' ? true : false}
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
                              disabled={state_form === 'borrar' ? true : false}
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
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </FormControl>

                        <div className="form-row margin-button">
                           <div className="form-group col-md-6">
                              {state_form === 'crear' || state_form === 'editar'
                                 ?
                                 <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={guardar}
                                 >
                                    Guardar
                                    </Button> : ''}
                              {state_form === 'borrar'
                                 ?
                                 <div>
                                    <Button
                                       variant="contained"
                                       color="primary"
                                       onClick={() => borrar(id)}
                                    >
                                       Borrar
                                       </Button>
                                 </div>
                                 : ''}
                              {error_form && <small className="text-danger">Existe un registro vinculado.</small>}

                           </div >

                           <div className="form-group col-md-6">
                              {state_form === 'editar' || state_form === 'borrar'
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

               </div>
            </div>}
      </div>
   );
}

const mapStateToProps = ({ ambientesReducer }) => {
   return { ambientesReducer };
};

const mapDispatchToProps = {
   cambioAmbienteName,
   cambioAmbienteCodigo,
   cambioAmbienteInputs,

   borrar,
   agregar,
   editar,
   cancelar
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
