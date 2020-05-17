import React from 'react';
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
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import * as geneticasActions from '../../actions/geneticasActions'

const {
   cambioGeneticaName,
   cambioGeneticaMarca,
   cambioGeneticaThc,
   cambioGeneticaCbd,
   cambioGeneticaProdInt,
   cambioGeneticaProdExt,
   cambioGeneticaTiempoFlora,
   cambioGeneticaSabores,

   traerTabla,
   borrar,
   cancelar,
   agregar,
   editar
} = geneticasActions;

const Formulario = (props) => {

   const {
      marcasReducer: { marcas },
      geneticasReducer: {
         genetica: { name, id, marca_id, thc, cbd, prod_int, prod_ext, tiempo_flora, sabores },
         error_form,
         state_form,
         loading,

      },
      goBack,
      traerTabla,
      borrar,
      cancelar
   } = props

   const handleCambioGeneticaName = (event) => props.cambioGeneticaName(event.target.value)

   const handleCambioGeneticaMarca = (event) => props.cambioGeneticaMarca(event.target.value)

   const handleCambioGeneticaThc = (event) => props.cambioGeneticaThc(event.target.value)

   const handleCambioGeneticaCbd = (event) => props.cambioGeneticaCbd(event.target.value)

   const handleCambioGeneticaProdInt = (event) => props.cambioGeneticaProdInt(event.target.value)

   const handleCambioGeneticaProdExt = (event) => props.cambioGeneticaProdExt(event.target.value)

   const handleCambioGeneticaTiempoFlora = (event) => props.cambioGeneticaTiempoFlora(event.target.value)

   const handleCambioGeneticaSabores = (event) => props.cambioGeneticaSabores(event.target.value)

   const guardar = () => {
      const {
         geneticasReducer: {
            genetica: {
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
            state_form,
         },
         agregar,
         editar
      } = props;

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
                        {state_form === 'crear' ? 'AGREGAR GENÉTICA' : ''}
                        {state_form === 'editar' ? 'MODIFICAR GENÉTICA' : ''}
                        {state_form === 'borrar' ? 'ELIMINAR GENÉTICA' : ''}
                     </div>
                     <div className="col col-md-3 text-derecha" >
                        <TocIcon fontSize="large" className="link" onClick={traerTabla} />
                     </div>
                     <div className="col col-md-3 text-derecha" >
                        <KeyboardReturnIcon fontSize="large" className="link" onClick={goBack} />
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
                              onChange={handleCambioGeneticaName}
                              helperText={error_form.name}
                              error={!error_form.name ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>

                        {/* MARCA */}
                        <Grid item xs={12} sm={12}>
                           <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-helper-label" error={!error_form.marca_id ? false : true}>Marcas</InputLabel>
                              <Select
                                 labelId="demo-simple-select-helper-label"
                                 id="demo-simple-select-helper"
                                 value={marca_id || ''}
                                 onChange={handleCambioGeneticaMarca}
                                 error={!error_form.marca_id ? false : true}
                                 disabled={state_form === 'borrar' ? true : false}
                                 className="transparent"
                              >
                                 <Link to="/marcas">
                                    <MenuItem value="">
                                       <em
                                          className="link link-string"
                                       >
                                          Agregar
                                       </em>
                                    </MenuItem>
                                 </Link>

                                 {marcas.map((marca) => (
                                    <MenuItem key={marca.id} value={marca.id}>{marca.name}</MenuItem>
                                 ))}
                              </Select>
                              <FormHelperText error={!error_form.marca_id ? false : true}>{error_form.marca_id}</FormHelperText>
                           </FormControl>
                        </Grid>

                        {/* THC */}
                        <Grid item xs={6} sm={6}>
                           <TextField
                              id="standard-basic"
                              label="THC"
                              type="number"
                              className="form-control transparent"
                              value={thc || ''}
                              onChange={handleCambioGeneticaThc}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>

                        {/* CBD */}
                        <Grid item xs={6} sm={6}>
                           <TextField
                              id="standard-basic"
                              label="CBD"
                              type="number"
                              className="form-control transparent"
                              value={cbd || ''}
                              onChange={handleCambioGeneticaCbd}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>

                        {/* SABORES */}
                        <Grid item xs={12}>
                           <TextField
                              id="standard-basic"
                              label="Sabores"
                              type="text"
                              className="form-control transparent"
                              value={sabores || ''}
                              onChange={handleCambioGeneticaSabores}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>

                        {/* INTERNA */}
                        <Grid item xs={6} sm={6}>
                           <TextField
                              id="standard-basic"
                              label="Interna"
                              type="number"
                              className="form-control transparent"
                              value={prod_int || ''}
                              onChange={handleCambioGeneticaProdInt}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>

                        {/* EXTERNA */}
                        <Grid item xs={6} sm={6}>
                           <TextField
                              id="standard-basic"
                              label="Externa"
                              type="number"
                              className="form-control transparent"
                              value={prod_ext || ''}
                              onChange={handleCambioGeneticaProdExt}
                              disabled={state_form === 'borrar' ? true : false}
                           />
                        </Grid>

                        {/* TIEMPO */}
                        <Grid item xs={12} sm={12}>
                           <TextField
                              id="standard-basic"
                              label="Tiempo"
                              type="number"
                              className="form-control transparent"
                              value={tiempo_flora || ''}
                              onChange={handleCambioGeneticaTiempoFlora}
                              helperText={error_form.tiempo_flora}
                              error={!error_form.tiempo_flora ? false : true}
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

const mapStateToProps = ({ geneticasReducer, marcasReducer }) => {
   return { geneticasReducer, marcasReducer };
};

const mapDispatchToProps = {
   cambioGeneticaName,
   cambioGeneticaMarca,
   cambioGeneticaThc,
   cambioGeneticaCbd,
   cambioGeneticaProdInt,
   cambioGeneticaProdExt,
   cambioGeneticaTiempoFlora,
   cambioGeneticaSabores,

   traerTabla,
   borrar,
   agregar,
   editar,
   cancelar
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);