import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Spinner from '../General/Spinner';

import * as usersActions from '../../actions/usersActions'

const Formulario = (props) => {

   const {
      user: { id, name, email, password },
      agregar,
      editar,
      borrar,
      cancelar,
      state_form,
      error_form,
      cambioUsuarioName,
      cambioUsuarioEmail,
      cambioUsuarioPassword,
      loading,
   } = props

   const handleCambioUsuarioName = (event) => cambioUsuarioName(event.target.value);

   const handleCambioUsuarioEmail = (event) => cambioUsuarioEmail(event.target.value);

   const handleCambioUsuarioPassword = (event) => cambioUsuarioPassword(event.target.value);

   const guardar = () => {

      const nuevo_usuario = {
         id: id,
         name: name,
         email: email,
         password: password
      };

      if (state_form === 'crear') agregar(nuevo_usuario);

      if (state_form === 'editar') editar(nuevo_usuario, id)
   };

   const useStyles = makeStyles((theme) => ({
      root: {
         flexGrow: 1,
         width: "100%",
      },

      formButton: {
         marginTop: 20,
      },
   }));

   const classes = useStyles();

   return (

      <div className="card transparent">
         <div className="card-header">
            <div className="row mt-2">
               <div className="col col-md-6 card-agregar" >
                  {state_form === 'crear' ? 'AGREGAR USUARIO' : ''}
                  {state_form === 'editar' ? 'MODIFICAR USUARIO' : ''}
                  {state_form === 'borrar' ? 'ELIMINAR USUARIO' : ''}
               </div>
            </div>
         </div>
         {loading ? <Spinner /> :
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
                           onChange={handleCambioUsuarioName}
                           helperText={error_form.name}
                           error={!error_form.name ? false : true}
                           disabled={state_form === 'borrar' ? true : false}
                        />
                     </Grid>

                     {/* EMAIL */}
                     <Grid item xs={12} sm={12}>
                        <TextField
                           label="Email"
                           type="email"
                           className="form-control transparent"
                           value={email || ''}
                           onChange={handleCambioUsuarioEmail}
                           helperText={error_form.email}
                           error={!error_form.email ? false : true}
                           disabled={state_form === 'borrar' ? true : false}
                        />
                     </Grid>

                     {/* PASSWORD */}
                     <Grid item xs={12} sm={12}>
                        <TextField
                           id="standard-basic"
                           label="Password"
                           type="text"
                           className="form-control transparent"
                           value={password || ''}
                           onChange={handleCambioUsuarioPassword}
                           helperText={error_form.password}
                           error={!error_form.password ? false : true}
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
            </div>}
      </div>
   );
}

const mapStateToProps = (reducers) => {
   return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Formulario);
