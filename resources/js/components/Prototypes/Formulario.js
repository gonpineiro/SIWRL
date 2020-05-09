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

import * as protoypesActions from '../../actions/protoypesActions'
import * as geneticasActions from '../../actions/geneticasActions'

const { traerTodos: geneticasTraerTodos } = geneticasActions;

const {
   cambioPrototypeName,
   cambioPrototypeGenetica,
   cambioPrototypeAmbiente,
   cambioPrototypeSensor,
   agregar,
   editar,
   cancelar } = protoypesActions;

const Formulario = (props) => {
   const {
      geneticasTraerTodos,
      geneticasReducer: { geneticas },
      prototypesReducer: {
         form: { id, name, genetica_id, ambiente_id, sensor_id },
         state_form,
         error_form,
         loading },
      agregar,
      editar,
      cancelar
   } = props;

   if (!geneticas.length) geneticasTraerTodos()

   const handleCambioPrototypeName = (event) =>  props.cambioPrototypeName(event.target.value);   

   const handleCambioPrototypeGenetica = (event) =>  props.cambioPrototypeGenetica(event.target.value);

   const handleCambioPrototypeAmbiente = (event) =>  props.cambioPrototypeAmbiente(event.target.value);

   const handleCambioPrototypeSensor = (event) =>  props.cambioPrototypeSensor(event.target.value);

   const guardar = () => {

      const nuevo_prototype = { 
         id: id, 
         name: name, 
         genetica_id: genetica_id, 
         ambiente_id: ambiente_id, 
         sensor_id: sensor_id
      };

      if (state_form === 'crear') agregar(nuevo_prototype);

      if (state_form === 'editar') editar(nuevo_prototype, id)

   };

   /*   const handleRetirarFormularioMarca = () => {
        marcasTraerTodos()
        retirarFormularioMarca()
     } */

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
                  value={name}
                  onChange={handleCambioPrototypeName}
                  helperText={error_form.name}
                  error={!error_form.name ? false : true}
               />
            </FormControl>

            <FormControl className={classes.formControl}>
               <InputLabel id="demo-simple-select-helper-label" error={!error_form.genetica_id ? false : true}>Genetica</InputLabel>
               <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={genetica_id}
                  onChange={handleCambioPrototypeGenetica}
                  error={!error_form.genetica_id ? false : true}
               >
                  {/* <MenuItem value=""><em className="link link-string" onClick={() => ponerFormularioMarca()}>Agregar</em></MenuItem> */}

                  {geneticas.map((genetica) => (
                     <MenuItem key={genetica.id} value={genetica.id}>{genetica.name}</MenuItem>
                  ))}
               </Select>
               <FormHelperText error={!error_form.genetica_id ? false : true}>{error_form.genetica_id}</FormHelperText>
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

const mapStateToProps = ({ prototypesReducer, geneticasReducer }) => {
   return { prototypesReducer, geneticasReducer };
};

const mapDispatchToProps = {
   geneticasTraerTodos,

   cambioPrototypeName,
   cambioPrototypeGenetica,
   cambioPrototypeAmbiente,
   cambioPrototypeSensor,

   agregar,
   editar,
   cancelar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
