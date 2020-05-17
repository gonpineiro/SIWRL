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
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Spinner from '../General/Spinner';
import TocIcon from '@material-ui/icons/Toc';

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

   traerTabla,
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
      goBack,
      traerTabla,
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
         {loading ? <Spinner /> :
            <div>
               <div className="card-header">
                  <div className="row mt-2">
                     <div className="col col-md-6 card-agregar" >
                        {state_form === 'crear' ? 'AGREGAR PROTOTIPO' : ''}
                        {state_form === 'editar' ? 'MODIFICAR PROTOTIPO' : ''}
                        {state_form === 'borrar' ? 'ELIMINAR PROTOTIPO' : ''}
                     </div>
                     <div className="col col-md-6 text-derecha" >
                        <TocIcon fontSize="large" className="link" onClick={traerTabla} />
                     </div>
                  </div>
               </div>
               <div className="card-body">
                  <div className={classes.root}>


                     <Grid container spacing={3}>
                        {/* NAME */}
                        <Grid item xs={12}>
                           <TextField
                              id="standard-basic"
                              label="Nombre"
                              type="text"
                              className="form-control transparent"
                              value={name || ''}
                              onChange={handleCambioPrototypeName}
                              helperText={error_form.name}
                              error={!error_form.name ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>

                        {/* GENETICA */}
                        <Grid item xs={12} sm={12}>
                           <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-helper-label" error={!error_form.genetica_id ? false : true}>Genetica</InputLabel>
                              <Select
                                 labelId="demo-simple-select-helper-label"
                                 id="demo-simple-select-helper"
                                 value={genetica_id || ''}
                                 onChange={handleCambioPrototypeGenetica}
                                 error={!error_form.genetica_id ? false : true}
                                 disabled={state_form === 'borrar' ? true : false}
                                 className="transparent"
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
                        </Grid>

                        {/* AMBIENTE */}
                        <Grid item xs={12} sm={12}>
                           <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-helper-label" error={!error_form.ambiente_id ? false : true}>Ambientes</InputLabel>
                              <Select
                                 labelId="demo-simple-select-helper-label"
                                 id="demo-simple-select-helper"
                                 value={ambiente_id || ''}
                                 onChange={handleCambioPrototypeAmbiente}
                                 error={!error_form.ambiente_id ? false : true}
                                 disabled={state_form === 'borrar' ? true : false}
                                 className="transparent"
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
                        </Grid>

                        {/* SENSOR */}
                        <Grid item xs={12} sm={12}>
                           <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-helper-label" error={!error_form.sensor_id ? false : true}>Sensor</InputLabel>
                              <Select
                                 labelId="demo-simple-select-helper-label"
                                 id="demo-simple-select-helper"
                                 value={ambiente.sensors ? sensor_id || '' : ''}
                                 onChange={handleCambioPrototypeSensor}
                                 error={!error_form.sensor_id ? false : true}
                                 disabled={!ambiente_id || state_form === 'borrar'}
                                 className="transparent"
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
                        </Grid>

                        {/* FECHA */}
                        <Grid item xs={12} sm={12}>
                           <FormControl className={classes.formControl}>
                              <TextField
                                 id="date"
                                 label="Fecha Implante"
                                 type="date"
                                 onChange={handleCambioPrototypeFechaA}
                                 value={fecha_etapa_a || ''}
                                 className="transparent"
                                 InputLabelProps={{
                                    shrink: true,
                                 }}
                                 disabled={state_form === 'borrar' || state_form === 'editar' ? true : false}
                              />
                           </FormControl>
                        </Grid>
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
                  </div>
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

   traerTabla,
   borrar,
   agregar,
   editar,
   cancelar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
