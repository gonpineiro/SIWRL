import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Spinner from '../General/Spinner';

import * as sensorsActions from '../../actions/sensorsActions'
import * as ambientesActions from '../../actions/ambientesActions'

const { agregar, editar, borrar, cambioSensorName, cambioSensorOutput, cambioSensorAmbiente, traerTodosPorAmbiente, cancelar } = sensorsActions;
const { traerUno: ambienteTraerUno, traerTodos: ambientesTraerTodos } = ambientesActions;

const Formulario = (props) => {

   const {
      ambientesReducer: { ambientes, ambiente },
      sensorsReducer: {
         sensor: { id, name, ambiente_id, output },
         sensors_ambiente,
         state_form,
         error_form,
         loading
      },
      ambientesTraerTodos,
      ambienteTraerUno,
      traerTodosPorAmbiente,
      cambioSensorName,
      cambioSensorOutput,
      cambioSensorAmbiente,
      getId,
      borrar,
      agregar,
      editar,
      cancelar
   } = props;

   const handleCambioSensorName = (event) => cambioSensorName(event.target.value);

   const handleCambioSensorOutput = (event) => cambioSensorOutput(event.target.value);

   const handleCambioAmbiente = (event) => {
      ambienteTraerUno(event.target.value)
      traerTodosPorAmbiente(event.target.value)
      cambioSensorAmbiente(event.target.value)
   };

   const guardar = () => {

      const nuevo_sensor = {
         id: id,
         name: name,
         ambiente_id: ambiente_id || getId,
         output: output,
      };

      if (state_form === 'crear') agregar(nuevo_sensor);

      if (state_form === 'editar') editar(nuevo_sensor, id)

      ambientesTraerTodos()
   }; 

   const useStyles = makeStyles((theme) => ({
      root: {
         flexGrow: 1,
         width: "100%",
      },

      formControl: {
         width: "100%",
      },
      formButton: {
         marginTop: 20,
      },
   }));

   const classes = useStyles();

   return (

      <div className="card transparent">
         {loading || !ambiente.inputs ? <Spinner /> :
            <div>
               <div className="card-header">
                  <div className="row mt-2">
                     <div className="col col-md-6 card-agregar" >
                        {state_form === 'crear' ? 'AGREGAR SENSOR' : ''}
                        {state_form === 'editar' ? 'MODIFICAR SENSOR' : ''}
                        {state_form === 'borrar' ? 'ELIMINAR SENSOR' : ''}
                     </div>
                     <div
                        className={(ambiente.sensors.length >= ambiente.inputs) ?
                           "col col-md-6 center color-alert" : "col col-md-6 center"}
                     >
                        {sensors_ambiente ? sensors_ambiente.length + " / " + ambiente.inputs : ''}
                     </div>
                  </div>
               </div>
               <div className="card-body">
                  <div className={classes.root}>
                     <Grid container spacing={3}>
                        {/* AMBIENTE */}
                        <Grid item xs={12}>
                           <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-helper-label" error={!error_form.ambiente_id ? false : true}>Ambientes</InputLabel>
                              <Select
                                 labelId="demo-simple-select-helper-label"
                                 id="demo-simple-select-helper"
                                 value={ambiente ? (ambiente.id || '') : getId || (ambiente_id || getId)}
                                 onChange={handleCambioAmbiente}
                                 error={!error_form.ambiente_id ? false : true}
                                 disabled={state_form === 'borrar' ? true : false}
                                 className="transparent"
                              >
                                 {ambientes.map((ambiente) => (
                                    <MenuItem key={ambiente.id} value={ambiente.id}>{ambiente.name}</MenuItem>
                                 ))}
                              </Select>
                              <FormHelperText error={!error_form.ambiente_id ? false : true}>{error_form.ambiente_id}</FormHelperText>
                           </FormControl>
                        </Grid>
                        
                        {/* NAME */}
                        <Grid item xs={12} sm={12}>
                           <TextField
                              id="standard-basic"
                              label="Nombre"
                              type="text"
                              className="form-control transparent"
                              value={name || ''}
                              onChange={handleCambioSensorName}
                              helperText={error_form.name}
                              error={!error_form.name ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>
                        
                        {/* INPUT */}
                        <Grid item xs={12} sm={12}>
                           <TextField
                              id="standard-basic"
                              label="Input"
                              type="number"
                              className="form-control transparent"
                              value={output || ''}
                              onChange={handleCambioSensorOutput}
                              helperText={error_form.output}
                              error={!error_form.name ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>
                        
                        {/* BUTTOMS */}
                        <Grid item xs={6} sm={6} >
                           {state_form === 'crear' || state_form === 'editar'
                              ?
                              <Button
                                 variant="contained"
                                 color="primary"
                                 onClick={guardar}
                                 className={classes.formButton}
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
                                    className={classes.formButton}
                                 >
                                    Borrar
                                       </Button>
                              </div>
                              : ''}
                        </Grid>

                        <Grid item xs={6} sm={6}>
                           {state_form === 'editar' || state_form === 'borrar'
                              ?
                              <Button
                                 variant="contained"
                                 color="inherit"
                                 onClick={cancelar}
                                 className={classes.formButton}
                              >
                                 Cancelar
                                    </Button> : ''}
                        </Grid>
                        {error_form && <small className="text-danger">Existe un registro vinculado.</small>}
                     </Grid>
                  </div>
               </div>
            </div>}
      </div>

   );
}

const mapStateToProps = ({ sensorsReducer, ambientesReducer }) => {
   return { sensorsReducer, ambientesReducer };
};

const mapDispatchToProps = {
   ambientesTraerTodos,
   cambioSensorName,
   cambioSensorOutput,
   cambioSensorAmbiente,
   traerTodosPorAmbiente,
   ambienteTraerUno,

   agregar,
   editar,
   cancelar,
   borrar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
