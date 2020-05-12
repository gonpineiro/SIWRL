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
import Select from '@material-ui/core/Select';

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
         
      },
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
            state_form
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

      formControl: {
         margin: theme.spacing(0),
         marginBottom: 35,
         width: "100%",
      },
   }));

   const classes = useStyles();
   
   return (
      <form noValidate autoComplete="on">
         <div className="form-row">
            
            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Nombre"
                  type="text"
                  className="form-control"
                  value={name || ''}
                  onChange={handleCambioGeneticaName}
                  helperText={error_form.name}
                  error={!error_form.name ? false : true}
                  disabled={state_form === 'borrar' ? true : false}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <InputLabel id="demo-simple-select-helper-label" error={!error_form.marca_id ? false : true}>Marcas</InputLabel>
               <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={marca_id || ''}
                  onChange={handleCambioGeneticaMarca}
                  error={!error_form.marca_id ? false : true}
                  disabled={state_form === 'borrar' ? true : false}
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

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="THC"
                  type="number"
                  className="form-control"
                  value={thc || ''}
                  onChange={handleCambioGeneticaThc}
                  disabled={state_form === 'borrar' ? true : false}
               />
            </FormControl>
            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="CBD"
                  type="number"
                  className="form-control"
                  value={cbd || ''}
                  onChange={handleCambioGeneticaCbd}
                  disabled={state_form === 'borrar' ? true : false}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Sabores"
                  type="text"
                  className="form-control"
                  value={sabores || ''}
                  onChange={handleCambioGeneticaSabores}
                  disabled={state_form === 'borrar' ? true : false}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Interna"
                  type="number"
                  className="form-control"
                  value={prod_int || ''}
                  onChange={handleCambioGeneticaProdInt}
                  disabled={state_form === 'borrar' ? true : false}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Externa"
                  type="number"
                  className="form-control"
                  value={prod_ext || ''}
                  onChange={handleCambioGeneticaProdExt}
                  disabled={state_form === 'borrar' ? true : false}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <TextField
                  id="standard-basic"
                  label="Tiempo"
                  type="number"
                  className="form-control"
                  value={tiempo_flora || ''}
                  onChange={handleCambioGeneticaTiempoFlora}
                  helperText={error_form.tiempo_flora}
                  error={!error_form.tiempo_flora ? false : true}
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
      </form>
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

   borrar,
   agregar,
   editar,
   cancelar
};
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
