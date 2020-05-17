import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Spinner from '../General/Spinner';

import * as protoypesActions from '../../actions/protoypesActions'

import * as ambientesActions from '../../actions/ambientesActions'
import * as sensorsActions from '../../actions/sensorsActions'

const { traerUno: ambientesTraerUno, cancelar: ambientesCancelar } = ambientesActions;
const { traerTodosPorAmbiente: traerTodosPorAmbienteSensor, cancelar: sensorsCancelar } = sensorsActions;

const {
   cambioPrototypeName,
   cambioPrototypeGenetica,
   cambioPrototypeAmbiente,
   cambioPrototypeSensor,
   cambioPrototypeFechaA,

   borrar,
   agregar,
   editar,
   cancelar
} = protoypesActions;

const Formulario = (props) => {
   const {
      ambientesTraerUno,
      ambientesCancelar,
      sensorsCancelar,
      traerTodosPorAmbienteSensor,
      geneticasReducer: { geneticas },
      ambientesReducer: { ambientes, ambiente },
      prototypesReducer: {
         prototype: { id, name, genetica_id, ambiente_id, sensor_id, fecha_etapa_a, estado },
         state_form,
         error_form,
         loading
      },
      borrar,
      agregar,
      editar,
      cancelar
   } = props;

   const handleCambioPrototypeName = (event) => props.cambioPrototypeName(event.target.value);

   const handleCambioPrototypeGenetica = (event) => props.cambioPrototypeGenetica(event.target.value);

   const handleCambioPrototypeAmbiente = (event) => {
      props.cambioPrototypeAmbiente(event.target.value);
      if (event.target.value) ambientesTraerUno(event.target.value)
   }

   const handleCambioPrototypeFechaA = (event) => props.cambioPrototypeFechaA(event.target.value)

   const handleCambioPrototypeSensor = (event) => props.cambioPrototypeSensor(event.target.value);

   const guardar = () => {

      const nuevo_prototype = {
         id: id,
         name: name,
         genetica_id: genetica_id,
         ambiente_id: ambiente_id,
         sensor_id: sensor_id,
         fecha_etapa_a: fecha_etapa_a,
         estado: estado
      };

      if (state_form === 'crear') agregar(nuevo_prototype);

      if (state_form === 'editar') editar(nuevo_prototype, id)

   };

   const cancelarAmbientes = () => ambientesCancelar()

   const cancelarSensors = () => {
      traerTodosPorAmbienteSensor(ambiente_id)
      sensorsCancelar()
   }

   useEffect(() => {
      if (ambiente_id) ambientesTraerUno(ambiente_id)

   }, []);

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
                        {state_form === 'crear' ? 'AGREGAR PROTOTIPO' : ''}
                        {state_form === 'editar' ? 'MODIFICAR PROTOTIPO' : ''}
                        {state_form === 'borrar' ? 'ELIMINAR PROTOTIPO' : ''}
                     </div>
                     <div className="col col-md-6 center">

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
                              onChange={handleCambioPrototypeName}
                              helperText={error_form.name}
                              error={!error_form.name ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </FormControl>

                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.genetica_id ? false : true}>Genetica</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={genetica_id || ''}
                              onChange={handleCambioPrototypeGenetica}
                              error={!error_form.genetica_id ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                           >
                              <Link to="/geneticas">
                                 <MenuItem value="">
                                    <em
                                       className="link link-string"
                                    >
                                       Agregar
                                       </em>
                                 </MenuItem>
                              </Link>

                              {geneticas.map((genetica) => (
                                 <MenuItem key={genetica.id} value={genetica.id}>{genetica.name}</MenuItem>
                              ))}
                           </Select>
                           <FormHelperText error={!error_form.genetica_id ? false : true}>{error_form.genetica_id}</FormHelperText>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.ambiente_id ? false : true}>Ambientes</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={ambiente_id || ''}
                              onChange={handleCambioPrototypeAmbiente}
                              error={!error_form.ambiente_id ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                           >
                              <Link to="/ambientes">
                                 <MenuItem value="" onClick={() => cancelarAmbientes()}>
                                    <em
                                       className="link link-string"
                                    >
                                       Agregar
                                       </em>
                                 </MenuItem>
                              </Link>
                              <MenuItem value={null}><em className="link link-string" > Vacio </em> </MenuItem>

                              {ambientes.map((ambiente) => (
                                 <MenuItem key={ambiente.id} value={ambiente.id}>{ambiente.name}</MenuItem>
                              ))}
                           </Select>
                           <FormHelperText error={!error_form.ambiente_id ? false : true}>{error_form.ambiente_id}</FormHelperText>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.sensor_id ? false : true}>Sensor</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={ambiente.sensors ? sensor_id || '' : ''}
                              onChange={handleCambioPrototypeSensor}
                              error={!error_form.sensor_id ? false : true}
                              disabled={!ambiente_id || state_form === 'borrar'}
                           >
                              <Link to={`/ambientes/sensor/${ambiente_id}`}>
                                 <MenuItem value="" onClick={() => cancelarSensors()}>
                                    <em
                                       className="link link-string"
                                    >
                                       Agregar
                                       </em>
                                 </MenuItem>
                              </Link>
                              <MenuItem value=""><em className="link link-string" > Vacio </em> </MenuItem>

                              {ambiente && ambiente.sensors ? ambiente.sensors.map((sensor) => (
                                 <MenuItem key={sensor.id} value={sensor.id}>{sensor.name}</MenuItem>
                              )) : ''}
                           </Select>
                           <FormHelperText error={!error_form.sensor_id ? false : true}>{error_form.sensor_id}</FormHelperText>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                           <TextField
                              id="date"
                              label="Fecha Implante"
                              type="date"
                              onChange={handleCambioPrototypeFechaA}
                              value={fecha_etapa_a || ''}
                              className={classes.textField || ''}
                              InputLabelProps={{
                                 shrink: true,
                              }}
                              disabled={state_form === 'borrar' || state_form === 'editar' ? true : false}
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

const mapStateToProps = ({ prototypesReducer, geneticasReducer, ambientesReducer, sensorsReducer }) => {
   return { prototypesReducer, geneticasReducer, ambientesReducer, sensorsReducer };
};

const mapDispatchToProps = {
   ambientesTraerUno,
   ambientesCancelar,
   traerTodosPorAmbienteSensor,
   sensorsCancelar,

   cambioPrototypeName,
   cambioPrototypeGenetica,
   cambioPrototypeAmbiente,
   cambioPrototypeSensor,
   cambioPrototypeFechaA,

   borrar,
   agregar,
   editar,
   cancelar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
