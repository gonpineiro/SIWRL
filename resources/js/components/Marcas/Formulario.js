import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import * as marcasActions from '../../actions/marcasActions'

const { agregar, editar, cambioMarcaName, cancelar, traerTodos } = marcasActions;

const Formulario = (props) => {
   
   const {
      marcasReducer: {
         marca: { id, name },
         state_form,
         error_form,
      },
      cambioMarcaName,
      agregar,
      editar,
      cancelar,
      traerTodos,
   } = props;

   const handleCambioMarcaName = (event) => cambioMarcaName(event.target.value);

   const guardar = () => {

      const nueva_marca = {
         id: id,
         name: name
      };

      if (state_form === 'crear') agregar(nueva_marca);

      if (state_form === 'editar') editar(nueva_marca, id)

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
                  onChange={handleCambioMarcaName}
                  helperText={error_form.name}
                  error={!error_form.name ? false : true}
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

const mapStateToProps = ({ geneticasReducer, marcasReducer }) => {
   return { geneticasReducer, marcasReducer };
};

const mapDispatchToProps = {
   traerTodos,

   cambioMarcaName,

   agregar,
   editar,
   cancelar

};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
