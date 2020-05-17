import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../General/Spinner';

import * as marcasActions from '../../actions/marcasActions'

const { agregar, editar, borrar, cambioMarcaName, cancelar, traerTodos } = marcasActions;

const Formulario = (props) => {

   const {
      marcasReducer: {
         marca: { id, name },
         state_form,
         error_form,
         loading,
      },      
      cambioMarcaName,
      agregar,
      editar,
      cancelar,
      borrar,
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
      <div className="card transparent">
         {loading ? <Spinner /> :
            <div>
               <div className="card-header">
                  <div className="row mt-2">
                     <div className="col col-md-6 card-agregar" >
                        {state_form === 'crear' ? 'AGREGAR MARCA' : ''}
                        {state_form === 'editar' ? 'MODIFICAR MARCA' : ''}
                        {state_form === 'borrar' ? 'ELIMINAR MARCA' : ''}
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
                              className="form-control transparent"
                              value={name || ''}
                              onChange={handleCambioMarcaName}
                              helperText={error_form.name}
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
                  </FormControl >

               </div>
            </div>}
      </div>



   );
}

const mapStateToProps = ({ geneticasReducer, marcasReducer }) => {
   return { geneticasReducer, marcasReducer };
};

const mapDispatchToProps = {
   traerTodos,

   cambioMarcaName,

   borrar,
   agregar,
   editar,
   cancelar
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
