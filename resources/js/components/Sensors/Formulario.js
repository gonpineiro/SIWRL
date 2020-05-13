import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
      cancelar,
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

   const eliminar = () => {
      borrar(id)
      ambientesTraerTodos()
   }

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
               <InputLabel id="demo-simple-select-helper-label" error={!error_form.ambiente_id ? false : true}>Ambientes</InputLabel>
               <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={ambiente ? (ambiente.id || '') : getId || (ambiente_id || getId)}
                  onChange={handleCambioAmbiente}
                  error={!error_form.ambiente_id ? false : true}
                  disabled={state_form === 'borrar' ? true : false}
               >
                  {ambientes.map((ambiente) => (
                     <MenuItem key={ambiente.id} value={ambiente.id}>{ambiente.name}</MenuItem>
                  ))}
               </Select>
               <FormHelperText error={!error_form.ambiente_id ? false : true}>{error_form.ambiente_id}</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Nombre"
                  type="text"
                  className="form-control"
                  value={name || ''}
                  onChange={handleCambioSensorName}
                  helperText={error_form.name}
                  error={!error_form.name ? false : true}
                  disabled={state_form === 'borrar' ? true : false}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Input"
                  type="number"
                  className="form-control"
                  value={output || ''}
                  onChange={handleCambioSensorOutput}
                  helperText={error_form.output}
                  error={!error_form.name ? false : true}
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
                        disabled={(sensors_ambiente.length >= ambiente.inputs) && state_form == 'crear' ? true : false}
                     >
                        Guardar
                     </Button> : ''}
                  {state_form === 'borrar'
                     ?
                     <div>
                        <Button
                           variant="contained"
                           color="primary"
                           onClick={eliminar}
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
